/**
 * ============================================
 * SERVICE WORKER - Bursuc Pro PWA
 * Psicología del Desarrollo II
 * ============================================
 * 
 * Estrategia de cache: Cache First, then Network
 * Permite funcionamiento offline completo
 */

const CACHE_NAME = 'bursucpro-v4';
const STATIC_CACHE = 'bursucpro-static-v4';
const DYNAMIC_CACHE = 'bursucpro-dynamic-v4';

// Recursos estáticos para precachear
const STATIC_ASSETS = [
    './',
    'index.html',
    'css/styles.css',
    'js/data.js',
    'js/content.js',
    'js/audio.js',
    'js/progress.js',
    'js/gamification.js',
    'js/flashcards.js',
    'js/pomodoro.js',
    'js/ui.js',
    'js/app.js',
    'manifest.json',
    // Tailwind CDN (se cacheará dinámicamente)
    'https://cdn.tailwindcss.com',
    // Google Fonts
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
];

// ============================================
// INSTALACIÓN
// ============================================

self.addEventListener('install', (event) => {
    console.log('[SW] Instalando Service Worker...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then((cache) => {
                console.log('[SW] Cacheando recursos estáticos...');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('[SW] Recursos cacheados correctamente');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('[SW] Error cacheando recursos:', error);
            })
    );
});

// ============================================
// ACTIVACIÓN
// ============================================

self.addEventListener('activate', (event) => {
    console.log('[SW] Activando Service Worker...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                // Eliminar caches antiguos
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                            console.log('[SW] Eliminando cache antiguo:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('[SW] Service Worker activado');
                return self.clients.claim();
            })
    );
});

// ============================================
// FETCH - Estrategia de cache
// ============================================

self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Ignorar peticiones no GET
    if (request.method !== 'GET') {
        return;
    }
    
    // Estrategia según tipo de recurso
    if (isStaticAsset(url)) {
        // Cache First para assets estáticos
        event.respondWith(cacheFirst(request));
    } else if (isAPIRequest(url)) {
        // Network First para APIs
        event.respondWith(networkFirst(request));
    } else {
        // Stale While Revalidate para el resto
        event.respondWith(staleWhileRevalidate(request));
    }
});

// ============================================
// ESTRATEGIAS DE CACHE
// ============================================

/**
 * Cache First: Devuelve del cache, si no está, fetch y cachea
 */
async function cacheFirst(request) {
    const cache = await caches.open(STATIC_CACHE);
    const cached = await cache.match(request);

    if (cached) {
        return cached;
    }

    try {
        const response = await fetch(request);
        if (response.ok) {
            cache.put(request, response.clone());
        }
        return response;
    } catch (error) {
        console.error('[SW] Error en cacheFirst:', error);
        // Return network fetch as fallback (let browser handle errors)
        return fetch(request);
    }
}

/**
 * Network First: Intenta fetch, si falla, devuelve del cache
 */
async function networkFirst(request) {
    try {
        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        console.log('[SW] Fallo de red, usando cache:', request.url);
        const cache = await caches.open(DYNAMIC_CACHE);
        const cached = await cache.match(request);

        if (cached) {
            return cached;
        }

        // Return a proper error response instead of throwing
        return new Response('Network error', { status: 503, statusText: 'Service Unavailable' });
    }
}

/**
 * Stale While Revalidate: Devuelve del cache inmediatamente, 
 * actualiza en background
 */
async function staleWhileRevalidate(request) {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cached = await cache.match(request);

    // Actualizar en background
    const fetchPromise = fetch(request)
        .then((networkResponse) => {
            if (networkResponse.ok) {
                cache.put(request, networkResponse.clone());
            }
            return networkResponse;
        })
        .catch((error) => {
            console.log('[SW] Fetch fallido:', error);
            // Return cached version if available, otherwise re-throw
            if (cached) return cached;
            throw error;
        });

    // Return cache immediately if available, otherwise wait for fetch
    if (cached) {
        // Trigger background update but return cached immediately
        fetchPromise.catch(() => {}); // Suppress unhandled rejection
        return cached;
    }
    return fetchPromise;
}

// ============================================
// HELPERS
// ============================================

function isStaticAsset(url) {
    const staticExtensions = [
        '.js', '.css', '.html', '.json',
        '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp',
        '.woff', '.woff2', '.ttf', '.eot'
    ];
    
    return staticExtensions.some(ext => url.pathname.endsWith(ext)) ||
           url.hostname === 'cdn.tailwindcss.com' ||
           url.hostname === 'fonts.googleapis.com' ||
           url.hostname === 'fonts.gstatic.com';
}

function isAPIRequest(url) {
    return url.pathname.startsWith('/api/') ||
           url.hostname.includes('api.');
}

// ============================================
// BACKGROUND SYNC (para futuras features)
// ============================================

self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-progress') {
        event.waitUntil(syncProgress());
    }
});

async function syncProgress() {
    // Sincronizar progreso cuando hay conexión
    console.log('[SW] Sincronizando progreso...');
}

// ============================================
// PUSH NOTIFICATIONS (para futuras features)
// ============================================

self.addEventListener('push', (event) => {
    if (event.data) {
        const data = event.data.json();
        
        const options = {
            body: data.body || '¡Es hora de estudiar!',
            icon: '/assets/icons/icon-192x192.png',
            badge: '/assets/icons/badge-72x72.png',
            tag: data.tag || 'study-reminder',
            requireInteraction: true,
            actions: [
                {
                    action: 'open',
                    title: 'Abrir app'
                },
                {
                    action: 'dismiss',
                    title: 'Descartar'
                }
            ]
        };
        
        event.waitUntil(
            self.registration.showNotification(
                data.title || 'Bursuc Pro',
                options
            )
        );
    }
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    if (event.action === 'open') {
        event.waitUntil(
            clients.openWindow('/#flashcards')
        );
    }
});

// ============================================
// MESSAGE HANDLER (comunicación con la app)
// ============================================

self.addEventListener('message', (event) => {
    if (event.data && event.data.type) {
        switch (event.data.type) {
            case 'SKIP_WAITING':
                self.skipWaiting();
                break;
            case 'GET_VERSION':
                event.ports[0].postMessage({ version: CACHE_NAME });
                break;
            case 'CLEAR_CACHE':
                event.waitUntil(clearAllCaches());
                break;
        }
    }
});

async function clearAllCaches() {
    const cacheNames = await caches.keys();
    return Promise.all(cacheNames.map(name => caches.delete(name)));
}

// ============================================
// PERIODIC SYNC (para recordatorios)
// ============================================

self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'daily-reminder') {
        event.waitUntil(showDailyReminder());
    }
});

async function showDailyReminder() {
    // Verificar si el usuario ha estudiado hoy
    // Si no, mostrar notificación
}

console.log('[SW] Service Worker cargado');
