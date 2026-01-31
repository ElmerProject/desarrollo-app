# 📘 GUÍA TÉCNICA COMPLETA
## Psicología del Desarrollo II - Bursuc Pro

---

## 1. ESTRUCTURA DE ARCHIVOS

```
psicologia-gamificada/
│
├── 📄 index.html              # Entrada principal - HTML semántico + Tailwind
├── 📄 manifest.json           # Configuración PWA
├── 📄 sw.js                   # Service Worker para offline
├── 📄 README.md               # Documentación de usuario
├── 📄 GUIA_TECNICA.md         # Esta guía
│
├── 📁 css/
│   └── styles.css             # Estilos personalizados + animaciones
│
├── 📁 js/
│   ├── data.js                # 📊 90+ flashcards, logros, categorías
│   ├── audio.js               # 🔊 Web Audio API - sonidos sintéticos
│   ├── progress.js            # 💾 localStorage - persistencia completa
│   ├── gamification.js        # 🎮 Puntos, niveles, logros, celebraciones
│   ├── flashcards.js          # 🎴 Flip 3D, repetición espaciada
│   ├── pomodoro.js            # 🍅 Timer con círculo de progreso
│   ├── ui.js                  # 🎨 Navegación, toasts, modales
│   └── app.js                 # 🚀 Coordinador principal
│
└── 📁 assets/
    ├── icons/                 # Iconos PWA (favicon, apple-touch, etc.)
    ├── sounds/                # Sonidos opcionales (no necesarios)
    └── images/                # Imágenes del contenido
```

---

## 2. HTML BASE (index.html)

### Meta Tags PWA Esenciales

```html
<!-- Viewport responsive -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Tema y colores -->
<meta name="theme-color" content="#6366f1">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

<!-- PWA Manifest -->
<link rel="manifest" href="manifest.json">

<!-- Iconos -->
<link rel="icon" type="image/png" sizes="32x32" href="assets/icons/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon.png">
```

### Carga de Scripts (ORDEN IMPORTANTE)

```html
<!-- 1. Datos (debe ir primero) -->
<script src="js/data.js"></script>

<!-- 2. Utilidades base -->
<script src="js/audio.js"></script>
<script src="js/progress.js"></script>

<!-- 3. Sistemas principales -->
<script src="js/gamification.js"></script>
<script src="js/flashcards.js"></script>
<script src="js/pomodoro.js"></script>

<!-- 4. UI y App -->
<script src="js/ui.js"></script>
<script src="js/app.js"></script>
```

---

## 3. SISTEMA CSS

### Variables CSS Personalizadas

```css
:root {
    /* Colores principales */
    --color-primary: #6366f1;
    --color-primary-light: #818cf8;
    --color-primary-dark: #4f46e5;
    
    /* Estados */
    --color-success: #10b981;
    --color-warning: #f59e0b;
    --color-danger: #ef4444;
    
    /* Sombras */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    
    /* Transiciones */
    --transition-fast: 150ms ease;
    --transition: 300ms ease;
}
```

### Animaciones Keyframes

```css
/* Flip 3D para flashcards */
@keyframes flip {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(180deg); }
}

/* Confetti para celebraciones */
@keyframes confetti {
    0% { opacity: 1; transform: translateY(0) rotate(0deg); }
    100% { opacity: 0; transform: translateY(-100px) rotate(720deg); }
}

/* Shake para errores */
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
}
```

### Responsive Breakpoints (Tailwind)

```javascript
// sm: 640px   - Móviles grandes
// md: 768px   - Tablets
// lg: 1024px  - Desktop
// xl: 1280px  - Desktop grande

// Ejemplo de uso:
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

---

## 4. JAVASCRIPT - MÓDULOS

### 4.1 app.js - Inicialización

```javascript
const App = (function() {
    function init() {
        // Orden de inicialización:
        initProgressManager();  // 1. Persistencia
        initAudioManager();     // 2. Audio
        initGamification();     // 3. Gamificación
        initFlashcards();       // 4. Flashcards
        initPomodoro();         // 5. Pomodoro
        initUI();               // 6. UI
    }
    
    return { init };
})();
```

### 4.2 data.js - Estructura de Datos

```javascript
// Flashcard
{
    id: 1,
    category: 'piaget',
    question: '¿Qué es...?',
    answer: 'Es...',
    difficulty: 'easy',  // easy, medium, hard
    tags: ['concepto', 'definicion']
}

// Logro
{
    id: 'first_card',
    title: 'Primer Paso',
    description: 'Estudia tu primera flashcard',
    icon: '🎯',
    points: 10,
    condition: (stats) => stats.cardsStudied >= 1
}

// Nivel
{
    level: 1,
    name: 'Novato Curioso',
    minPoints: 0,
    icon: '🌱'
}
```

### 4.3 progress.js - Persistencia

```javascript
// Estructura guardada en localStorage
{
    version: '1.0.0',
    user: {
        name: 'Bursuc',
        level: 1,
        points: 0,
        streak: 0
    },
    flashcards: {
        cards: [
            { id: 1, status: 'new', nextReview: null, reviewCount: 0 }
        ]
    },
    achievements: {
        unlocked: ['first_card']
    },
    pomodoro: {
        totalSessions: 0,
        totalMinutes: 0
    },
    stats: {
        cardsStudied: 0,
        dailyActivity: {}
    }
}
```

---

## 5. SISTEMA DE GAMIFICACIÓN

### Estructura de Usuario

```javascript
const user = {
    name: 'Bursuc',
    level: 1,
    points: 0,           // Puntos disponibles
    totalPoints: 0,      // Puntos totales acumulados
    streak: 0,           // Racha actual
    bestStreak: 0,       // Mejor racha
    lastStudyDate: null  // Última fecha de estudio
};
```

### Funciones Principales

```javascript
// Añadir puntos
Gamification.addPoints(10, 'correct_answer');

// Verificar nivel
const level = Gamification.getCurrentLevel();
// { level: 2, name: 'Aprendiz Dedicado', icon: '🌿', ... }

// Progreso al siguiente nivel
const progress = Gamification.getProgressToNextLevel(); // 0-100

// Verificar logros
Gamification.checkAchievements();

// Obtener todos los logros
const achievements = Gamification.getAchievements();
```

### Sistema de Niveles

```javascript
const LEVELS_DATA = [
    { level: 1, name: 'Novato Curioso', minPoints: 0, icon: '🌱' },
    { level: 2, name: 'Aprendiz Dedicado', minPoints: 100, icon: '🌿' },
    { level: 3, name: 'Estudiante Aplicado', minPoints: 300, icon: '🌳' },
    // ... hasta nivel 10
];
```

### Celebración de Logros

```javascript
function showAchievementCelebration(achievement) {
    // Mostrar modal
    // Efecto de confetti
    // Sonido de celebración
    AudioManager.achievement();
}
```

---

## 6. FLASHCARDS

### Estructura de Datos

```javascript
const FLASHCARDS_DATA = [
    {
        id: 1,
        category: 'piaget',
        question: '¿Qué es la permanencia del objeto?',
        answer: 'Comprensión de que los objetos siguen existiendo...',
        difficulty: 'medium',
        tags: ['piaget', 'sensoriomotor']
    }
];
```

### Estados de Tarjeta

```javascript
// Estados posibles
const STATUS = {
    NEW: 'new',           // Nunca estudiada
    LEARNING: 'learning', // En proceso
    REVIEW: 'review',     // Para repasar
    MASTERED: 'mastered'  // Dominada
};

// Intervalos de repetición (días)
const REVIEW_INTERVALS = {
    new: 0,
    learning: 1,
    review: 3,
    mastered: 7
};
```

### Efecto Flip 3D (CSS)

```css
.flashcard-wrapper {
    perspective: 1000px;
}

.flashcard {
    transform-style: preserve-3d;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.flashcard.flipped {
    transform: rotateY(180deg);
}

.flashcard-face {
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
}

.flashcard-back {
    transform: rotateY(180deg);
}
```

### Algoritmo de Repetición Espaciada

```javascript
function updateCardStatus(difficulty) {
    // Multiplicadores según dificultad
    const MULTIPLIERS = {
        easy: 2,    // Duplicar intervalo
        good: 1,    // Mantener
        hard: 0.5   // Reducir
    };
    
    // Calcular próxima revisión
    const baseInterval = REVIEW_INTERVALS[status];
    const daysToAdd = Math.round(baseInterval * MULTIPLIERS[difficulty]);
    const nextReview = new Date(Date.now() + daysToAdd * 24 * 60 * 60 * 1000);
}
```

---

## 7. SISTEMA DE AUDIO

### Web Audio API - Generación de Sonidos

```javascript
const AudioManager = (function() {
    let audioContext = null;
    
    function init() {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContext();
    }
    
    // Generar tono
    function playTone(frequency, type = 'sine', duration = 0.2) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        
        // Envelope (ADSR simplificado)
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + duration);
    }
    
    // Sonidos predefinidos
    return {
        success: () => playTone(523.25, 'sine', 0.15),  // Do5
        error: () => playTone(220, 'sawtooth', 0.3),    // La3
        flip: () => playTone(440, 'triangle', 0.08),    // La4
        levelUp: () => playArpeggio([523.25, 659.25, 783.99, 1046.50])
    };
})();
```

### Frecuencias Musicales

```javascript
const NOTES = {
    'C4': 261.63,  // Do
    'D4': 293.66,  // Re
    'E4': 329.63,  // Mi
    'F4': 349.23,  // Fa
    'G4': 392.00,  // Sol
    'A4': 440.00,  // La
    'B4': 493.88,  // Si
    'C5': 523.25   // Do5
};
```

---

## 8. PERSISTENCIA CON LOCALSTORAGE

### Qué Datos Guardar

```javascript
const dataToSave = {
    // ✅ Guardar
    user: { level, points, streak },
    flashcards: { status, nextReview, reviewCount },
    achievements: { unlocked: [] },
    pomodoro: { totalSessions, totalMinutes },
    stats: { cardsStudied, dailyActivity },
    settings: { soundEnabled, volume },
    timestamps: { created, lastSaved }
    
    // ❌ NO guardar
    // - Datos estáticos (flashcards originales)
    // - Configuración temporal
    // - Cache de UI
};
```

### Funciones de Guardar/Cargar

```javascript
const STORAGE_KEY = 'bursucpro_progress';

function save() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            cleanupOldData();
        }
    }
}

function load() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        data = JSON.parse(saved);
        // Migrar si es versión antigua
        if (data.version !== CURRENT_VERSION) {
            data = migrateData(data);
        }
    }
}
```

### Sistema de Versiones

```javascript
function migrateData(oldData) {
    // Ejemplo: migrar de v1.0.0 a v1.1.0
    if (oldData.version === '1.0.0') {
        // Añadir nuevo campo
        oldData.user.bestStreak = oldData.user.streak;
    }
    
    oldData.version = CURRENT_VERSION;
    return oldData;
}
```

---

## 9. PWA BÁSICA

### manifest.json

```json
{
  "name": "Bursuc Pro",
  "short_name": "Bursuc Pro",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#6366f1",
  "theme_color": "#6366f1",
  "icons": [
    { "src": "icon-192x192.png", "sizes": "192x192" },
    { "src": "icon-512x512.png", "sizes": "512x512" }
  ]
}
```

### Service Worker Básico

```javascript
const CACHE_NAME = 'bursucpro-v1';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/app.js'
];

// Instalación: Cachear recursos estáticos
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(STATIC_ASSETS))
    );
});

// Fetch: Cache First strategy
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
```

### Iconos Necesarios

```
assets/icons/
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png (180x180)
├── icon-72x72.png
├── icon-96x96.png
├── icon-128x128.png
├── icon-144x144.png
├── icon-152x152.png
├── icon-192x192.png
├── icon-384x384.png
└── icon-512x512.png
```

---

## 10. OPTIMIZACIONES

### Lazy Loading de Flashcards

```javascript
// Cargar solo las necesarias para la sesión
function loadSession() {
    applyFilters();  // Filtrar por estado/categoría
    shuffleCards();  // Mezclar
    // Cargar primera tarjeta
}

// Renderizar bajo demanda
function showCard() {
    const card = filteredCards[currentIndex];
    // Renderizar HTML de la tarjeta
}
```

### Minificación (Build)

```bash
# Instalar herramientas
npm install -g terser clean-css-cli html-minifier

# Minificar JS
terser js/app.js -o js/app.min.js -c -m

# Minificar CSS
cleancss -o css/styles.min.css css/styles.css

# Minificar HTML
html-minifier --input-dir . --output-dir dist --collapse-whitespace
```

### Compresión de Imágenes

```bash
# Usar ImageMagick
convert image.png -quality 85 -resize 50% image-compressed.jpg

# O herramientas online:
# - tinypng.com
# - compressor.io
```

### Performance Tips

```javascript
// 1. Debounce en eventos de scroll/resize
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// 2. requestAnimationFrame para animaciones
function animate() {
    requestAnimationFrame(() => {
        // Actualizar animación
    });
}

// 3. Intersection Observer para lazy loading
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadElement(entry.target);
        }
    });
});
```

---

## 11. DEPLOY

### GitHub Pages

```bash
# 1. Crear repositorio en GitHub
# 2. Subir archivos
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USUARIO/REPO.git
git push -u origin main

# 3. Activar Pages en Settings > Pages
# Source: Deploy from a branch
# Branch: main / (root)

# URL: https://USUARIO.github.io/REPO/
```

### Netlify

```bash
# Opción 1: Drag & Drop
# Subir carpeta a https://app.netlify.com/drop

# Opción 2: CLI
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

### Vercel

```bash
# Instalar CLI
npm install -g vercel

# Deploy
vercel --prod
```

---

## 12. CHECKLIST DE IMPLEMENTACIÓN

### MVP (Mínimo Producto Viable)

- [x] HTML base con estructura semántica
- [x] CSS con Tailwind + estilos personalizados
- [x] 90+ flashcards con datos reales
- [x] Sistema de gamificación (puntos, niveles)
- [x] 10+ logros desbloqueables
- [x] Efecto flip 3D en tarjetas
- [x] Sonidos con Web Audio API
- [x] Persistencia en localStorage
- [x] Timer Pomodoro básico
- [x] Dashboard con progreso
- [x] Navegación responsive
- [x] PWA básica (manifest + SW)

### Nice-to-Have

- [ ] Sincronización entre dispositivos
- [ ] Notificaciones push
- [ ] Modo oscuro completo
- [ ] Estadísticas avanzadas con gráficos
- [ ] Compartir progreso en redes
- [ ] Modo competición con amigos
- [ ] Importar/exportar datos
- [ ] Más categorías de contenido

### Testing Checklist

- [ ] Funciona en Chrome/Edge
- [ ] Funciona en Firefox
- [ ] Funciona en Safari (iOS)
- [ ] Funciona en móviles Android
- [ ] Funciona en móviles iOS
- [ ] Funciona offline (PWA)
- [ ] Sonidos funcionan
- [ ] Persistencia funciona
- [ ] Pomodoro funciona
- [ ] Flashcards flip funcionan
- [ ] Gamificación funciona
- [ ] Responsive en todas las pantallas

---

## 🎯 ORDEN RECOMENDADO DE DESARROLLO

1. **Estructura HTML** - Semántica y accesible
2. **CSS base** - Tailwind + variables + animaciones
3. **data.js** - Flashcards y logros
4. **progress.js** - localStorage funcionando
5. **audio.js** - Sonidos básicos
6. **flashcards.js** - Flip y navegación
7. **gamification.js** - Puntos y niveles
8. **pomodoro.js** - Timer funcionando
9. **ui.js** - Navegación y toasts
10. **app.js** - Coordinación final
11. **PWA** - Manifest y Service Worker
12. **Polish** - Animaciones, sonidos, celebraciones

---

## 📚 RECURSOS ADICIONALES

- [Web Audio API MDN](https://developer.mozilla.org/es/docs/Web/API/Web_Audio_API)
- [Service Workers MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [PWA Checklist](https://web.dev/pwa-checklist/)

---

**¡Éxito en tu desarrollo!** 🚀
