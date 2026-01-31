/**
 * ============================================
 * APP.JS - Aplicación principal
 * Psicología del Desarrollo II - Simo Pro
 * ============================================
 * 
 * Punto de entrada de la aplicación.
 * Coordina todos los módulos e inicializa la app.
 */

const App = (function() {
    'use strict';
    
    // ============================================
    // CONFIGURACIÓN
    // ============================================
    
    const CONFIG = {
        appName: 'Simo Pro',
        version: '1.0.0',
        debug: true
    };
    
    // ============================================
    // ESTADO GLOBAL
    // ============================================
    
    const state = {
        initialized: false,
        currentUser: null,
        isOnline: navigator.onLine
    };
    
    // ============================================
    // INICIALIZACIÓN
    // ============================================
    
    function init() {
        console.log(`🚀 Iniciando ${CONFIG.appName} v${CONFIG.version}`);
        
        // Verificar soporte del navegador
        if (!checkBrowserSupport()) {
            showUnsupportedMessage();
            return;
        }
        
        // Inicializar módulos en orden
        try {
            // 1. Persistencia (debe ir primero)
            initProgressManager();
            
            // 2. Audio
            initAudioManager();
            
            // 3. Gamificación
            initGamification();
            
            // 4. Flashcards
            initFlashcards();
            
            // 5. Pomodoro
            initPomodoro();
            
            // 6. UI
            initUI();
            
            // 7. Event listeners globales
            initGlobalEvents();
            
            // 8. Verificar primera visita
            checkFirstVisit();
            
            // 9. Actualizar UI con datos del usuario
            updateUserInterface();
            
            state.initialized = true;
            
            console.log('✅ Aplicación inicializada correctamente');
            
            // Mostrar mensaje de bienvenida
            showWelcomeMessage();
            
        } catch (error) {
            console.error('❌ Error inicializando la aplicación:', error);
            showErrorMessage('Error al iniciar la aplicación. Por favor, recarga la página.');
        }
    }
    
    // ============================================
    // INICIALIZACIÓN DE MÓDULOS
    // ============================================
    
    function initProgressManager() {
        if (typeof ProgressManager !== 'undefined') {
            ProgressManager.init();
            state.currentUser = ProgressManager.getData().user;
        } else {
            throw new Error('ProgressManager no está disponible');
        }
    }
    
    function initAudioManager() {
        if (typeof AudioManager !== 'undefined') {
            AudioManager.init();
        }
    }
    
    function initGamification() {
        if (typeof Gamification !== 'undefined') {
            Gamification.init();
        }
    }
    
    function initFlashcards() {
        if (typeof Flashcards !== 'undefined') {
            Flashcards.init();
        }
    }
    
    function initPomodoro() {
        if (typeof Pomodoro !== 'undefined') {
            Pomodoro.init();
        }
    }
    
    function initUI() {
        if (typeof UI !== 'undefined') {
            UI.init();
        }
    }
    
    // ============================================
    // EVENT LISTENERS GLOBALES
    // ============================================
    
    function initGlobalEvents() {
        // Cambio de estado online/offline
        window.addEventListener('online', () => {
            state.isOnline = true;
            UI.showToast('Conexión restaurada', 'success');
        });
        
        window.addEventListener('offline', () => {
            state.isOnline = false;
            UI.showToast('Sin conexión. La app funciona offline.', 'warning');
        });
        
        // Visibilidad de la página (para pausar pomodoro)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden && typeof Pomodoro !== 'undefined' && Pomodoro.isRunning()) {
                // Opcional: pausar pomodoro cuando se cambia de pestaña
                // Pomodoro.pause();
            }
        });
        
        // Atajos de teclado globales
        document.addEventListener('keydown', handleGlobalKeyboard);
        
        // Antes de cerrar la página
        window.addEventListener('beforeunload', () => {
            if (typeof ProgressManager !== 'undefined') {
                ProgressManager.save();
            }
        });
        
        // Escuchar eventos personalizados
        window.addEventListener('progressSaved', handleProgressSaved);
        window.addEventListener('levelUp', handleLevelUp);
        window.addEventListener('achievementUnlocked', handleAchievementUnlocked);
    }
    
    function handleGlobalKeyboard(e) {
        // Escape para cerrar modales
        if (e.code === 'Escape') {
            UI.hideCelebration();
            UI.closeSidebar();
        }
        
        // Ctrl/Cmd + número para navegación rápida
        if ((e.ctrlKey || e.metaKey) && e.code.startsWith('Digit')) {
            const num = parseInt(e.code.replace('Digit', ''));
            const sections = ['dashboard', 'flashcards', 'pomodoro', 'logros'];
            if (sections[num - 1]) {
                e.preventDefault();
                UI.navigateTo(sections[num - 1]);
            }
        }
    }
    
    function handleProgressSaved(e) {
        if (CONFIG.debug) {
            console.log('💾 Progreso guardado:', e.detail);
        }
    }
    
    function handleLevelUp(e) {
        const { level, name } = e.detail;
        console.log(`⭐ ¡Subiste al nivel ${level}: ${name}!`);
        
        // La celebración se maneja en gamification.js
    }
    
    function handleAchievementUnlocked(e) {
        const { id } = e.detail;
        console.log(`🏆 Logro desbloqueado: ${id}`);
        
        // Actualizar lista de logros si está visible
        if (UI.getCurrentSection() === 'logros') {
            UI.renderAchievements();
        }
        
        // Actualizar próximos logros en dashboard
        UI.renderUpcomingAchievements();
    }
    
    // ============================================
    // VERIFICACIONES
    // ============================================
    
    function checkBrowserSupport() {
        const requirements = [
            { test: () => 'localStorage' in window, name: 'localStorage' },
            { test: () => 'Promise' in window, name: 'Promises' },
            { test: () => 'fetch' in window, name: 'Fetch API' },
            { test: () => 'CSS' in window && CSS.supports('display', 'grid'), name: 'CSS Grid' }
        ];
        
        const unsupported = requirements.filter(req => !req.test());
        
        if (unsupported.length > 0) {
            console.warn('Características no soportadas:', unsupported.map(u => u.name));
            return false;
        }
        
        return true;
    }
    
    function checkFirstVisit() {
        const hasVisited = localStorage.getItem('simopro_visited');
        
        if (!hasVisited) {
            localStorage.setItem('simopro_visited', 'true');
            
            // Mostrar tutorial o mensaje de bienvenida especial
            setTimeout(() => {
                UI.showToast('¡Bienvenido a Simo Pro! Comienza estudiando en Flashcards 🎴', 'info', 5000);
            }, 1000);
        }
    }
    
    // ============================================
    // ACTUALIZACIÓN DE UI
    // ============================================
    
    function updateUserInterface() {
        const data = ProgressManager.getData();
        const stats = ProgressManager.getStats();
        
        // Actualizar navbar
        const navLevel = document.getElementById('nav-level');
        const navPoints = document.getElementById('nav-points');
        const navStreak = document.getElementById('nav-streak');
        
        if (navLevel) navLevel.textContent = data.user.level;
        if (navPoints) navPoints.textContent = data.user.points;
        if (navStreak) navStreak.textContent = data.user.streak;
        
        // Actualizar dashboard
        const dashLevel = document.getElementById('dash-level');
        const dashPoints = document.getElementById('dash-points');
        const dashStreak = document.getElementById('dash-streak');
        const dashCards = document.getElementById('dash-cards');
        
        if (dashLevel) {
            dashLevel.textContent = data.user.level;
            const levelInfo = Gamification.getLevelInfo(data.user.level);
            if (dashLevel.nextElementSibling) {
                dashLevel.nextElementSibling.textContent = levelInfo.name;
            }
        }
        if (dashPoints) dashPoints.textContent = data.user.points;
        if (dashStreak) dashStreak.textContent = data.user.streak;
        if (dashCards) dashCards.textContent = `${stats.masteredCards}/${stats.totalCards}`;
        
        // Actualizar barra de progreso
        const progressBar = document.getElementById('progress-bar');
        const totalProgress = document.getElementById('total-progress');
        
        if (progressBar && totalProgress) {
            const progress = stats.progressPercent || 0;
            progressBar.style.width = `${progress}%`;
            totalProgress.textContent = `${progress}%`;
        }
        
        // Actualizar última sesión
        const lastSession = document.getElementById('last-session');
        if (lastSession && data.flashcards.sessionHistory.length > 0) {
            const last = data.flashcards.sessionHistory[data.flashcards.sessionHistory.length - 1];
            const date = new Date(last.date);
            lastSession.textContent = `${last.cards} tarjetas - ${date.toLocaleDateString()}`;
        }
    }
    
    // ============================================
    // MENSAJES
    // ============================================
    
    function showWelcomeMessage() {
        const hour = new Date().getHours();
        let greeting = '¡Hola';
        
        if (hour < 12) greeting = '¡Buenos días';
        else if (hour < 18) greeting = '¡Buenas tardes';
        else greeting = '¡Buenas noches';
        
        const name = state.currentUser?.name || 'Simo';
        
        setTimeout(() => {
            UI.showToast(`${greeting}, ${name}! 👋`, 'info', 3000);
        }, 500);
    }
    
    function showUnsupportedMessage() {
        const message = `
            <div class="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center p-4">
                <div class="bg-white rounded-2xl p-8 max-w-md text-center">
                    <span class="text-6xl mb-4 block">😕</span>
                    <h2 class="text-2xl font-bold text-gray-900 mb-2">Navegador no compatible</h2>
                    <p class="text-gray-600 mb-6">
                        Tu navegador no soporta algunas características necesarias. 
                        Por favor, actualiza a una versión más reciente o usa Chrome, Firefox, Safari o Edge.
                    </p>
                    <button onclick="location.reload()" class="px-6 py-3 bg-primary-500 text-white rounded-xl font-semibold">
                        Intentar de nuevo
                    </button>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', message);
    }
    
    function showErrorMessage(message) {
        UI.showToast(message, 'error', 5000);
    }
    
    // ============================================
    // FUNCIONES PÚBLICAS
    // ============================================
    
    function navigateTo(section) {
        UI.navigateTo(section);
    }
    
    function getStats() {
        return {
            user: ProgressManager.getData().user,
            stats: ProgressManager.getStats(),
            flashcards: Flashcards.getStats(),
            pomodoro: Pomodoro.getStats()
        };
    }
    
    function exportProgress() {
        const data = ProgressManager.exportData();
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `simopro-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        
        URL.revokeObjectURL(url);
        
        UI.showToast('Progreso exportado correctamente', 'success');
    }
    
    function importProgress(file) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const success = ProgressManager.importData(e.target.result);
                if (success) {
                    UI.showToast('Progreso importado correctamente', 'success');
                    setTimeout(() => location.reload(), 1000);
                } else {
                    UI.showToast('Error al importar el archivo', 'error');
                }
            } catch (err) {
                UI.showToast('Archivo inválido', 'error');
            }
        };
        
        reader.readAsText(file);
    }
    
    function resetProgress() {
        ProgressManager.resetAll();
    }
    
    // ============================================
    // DEBUG
    // ============================================
    
    function debug() {
        if (!CONFIG.debug) return;
        
        console.log('=== DEBUG INFO ===');
        console.log('State:', state);
        console.log('User:', ProgressManager?.getData()?.user);
        console.log('Stats:', ProgressManager?.getStats());
        console.log('Flashcards:', Flashcards?.getStats?.());
        console.log('Achievements:', Gamification?.getAchievements?.());
        console.log('==================');
    }
    
    // Exponer debug globalmente en modo desarrollo
    if (CONFIG.debug) {
        window.simoproDebug = debug;
    }
    
    // ============================================
    // API PÚBLICA
    // ============================================
    
    return {
        init,
        navigateTo,
        getStats,
        exportProgress,
        importProgress,
        resetProgress,
        debug,
        getConfig: () => CONFIG,
        isInitialized: () => state.initialized
    };
})();

// ============================================
// INICIALIZACIÓN AL CARGAR
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Pequeño delay para asegurar que todos los scripts están cargados
    setTimeout(() => {
        App.init();
    }, 100);
});

// Exportar globalmente
window.App = App;
window.app = App;  // Alias corto
