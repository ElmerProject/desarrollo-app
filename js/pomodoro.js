/**
 * ============================================
 * POMODORO.JS - Timer Pomodoro integrado
 * Psicología del Desarrollo II - Bursuc Pro
 * ============================================
 * 
 * Características:
 * - Modos: Trabajo (25min), Descanso corto (5min), Descanso largo (15min)
 * - Notificaciones visuales y de audio
 * - Estadísticas de sesión
 * - Persistencia de progreso
 */

const Pomodoro = (function() {
    'use strict';
    
    // ============================================
    // CONFIGURACIÓN
    // ============================================
    
    const MODES = {
        work: { name: 'Estudio', minutes: 25, color: '#6366f1' },
        short: { name: 'Descanso Corto', minutes: 5, color: '#10b981' },
        long: { name: 'Descanso Largo', minutes: 15, color: '#3b82f6' }
    };
    
    const SETTINGS = {
        autoStartBreaks: false,
        autoStartPomodoros: false,
        longBreakInterval: 4  // Cada 4 pomodoros, descanso largo
    };
    
    // ============================================
    // ESTADO
    // ============================================
    
    let state = {
        mode: 'work',
        timeLeft: MODES.work.minutes * 60,
        isRunning: false,
        totalTime: MODES.work.minutes * 60,
        completedPomodoros: 0,
        intervalId: null,
        sessionStartTime: null
    };
    
    // ============================================
    // INICIALIZACIÓN
    // ============================================
    
    function init() {
        // Cargar estadísticas guardadas
        loadStats();
        
        // Actualizar UI inicial
        updateDisplay();
        updateStats();
        
        console.log('🍅 Pomodoro inicializado');
    }
    
    // ============================================
    // CONTROL PRINCIPAL
    // ============================================
    
    function toggle() {
        if (state.isRunning) {
            pause();
        } else {
            start();
        }
    }
    
    function start() {
        if (state.isRunning) return;
        
        state.isRunning = true;
        state.sessionStartTime = Date.now();
        
        // Actualizar botón
        updateToggleButton();
        
        // Iniciar intervalo
        state.intervalId = setInterval(tick, 1000);
        
        // Sonido de inicio
        AudioManager.click();
        
        console.log(`▶️ Pomodoro iniciado: ${MODES[state.mode].name}`);
    }
    
    function pause() {
        if (!state.isRunning) return;
        
        state.isRunning = false;
        clearInterval(state.intervalId);
        
        updateToggleButton();
        
        console.log('⏸️ Pomodoro pausado');
    }
    
    function reset() {
        pause();
        state.timeLeft = MODES[state.mode].minutes * 60;
        state.totalTime = state.timeLeft;
        updateDisplay();
        updateProgress();
    }
    
    function skip() {
        pause();
        complete();
    }
    
    // ============================================
    // TICK (cada segundo)
    // ============================================
    
    function tick() {
        state.timeLeft--;
        
        updateDisplay();
        updateProgress();
        
        // Verificar si terminó
        if (state.timeLeft <= 0) {
            complete();
        }
        
        // Sonido en los últimos 5 segundos
        if (state.timeLeft <= 5 && state.timeLeft > 0) {
            AudioManager.timer();
        }
    }
    
    // ============================================
    // COMPLETAR SESIÓN
    // ============================================
    
    function complete() {
        pause();
        
        const mode = MODES[state.mode];
        const minutesCompleted = mode.minutes;
        
        // Sonido de completado
        if (state.mode === 'work') {
            AudioManager.complete();
        } else {
            AudioManager.notification();
        }
        
        // Actualizar estadísticas
        if (state.mode === 'work') {
            state.completedPomodoros++;
            ProgressManager.addPomodoroSession(minutesCompleted);
            Gamification.pointsForPomodoro();
            
            // Disparar evento
            window.dispatchEvent(new CustomEvent('pomodoroCompleted', {
                detail: { duration: minutesCompleted }
            }));
        }
        
        // Guardar estadísticas
        saveStats();
        
        // Mostrar notificación
        showCompletionNotification();
        
        // Cambiar al siguiente modo
        switchMode();
        
        // Actualizar UI
        updateStats();
        
        console.log(`✅ Pomodoro completado: ${mode.name}`);
    }
    
    // ============================================
    // CAMBIAR MODO
    // ============================================
    
    function setMode(mode) {
        if (!MODES[mode]) return;
        
        pause();
        state.mode = mode;
        state.timeLeft = MODES[mode].minutes * 60;
        state.totalTime = state.timeLeft;
        
        // Actualizar botones de modo
        updateModeButtons();
        
        // Actualizar color del círculo
        updateProgressColor();
        
        // Actualizar display
        updateDisplay();
        updateProgress();
        
        console.log(`🔄 Modo cambiado a: ${MODES[mode].name}`);
    }
    
    function switchMode() {
        if (state.mode === 'work') {
            // Después de trabajo, descanso
            if (state.completedPomodoros % SETTINGS.longBreakInterval === 0) {
                setMode('long');
            } else {
                setMode('short');
            }
            
            // Auto-iniciar descanso si está configurado
            if (SETTINGS.autoStartBreaks) {
                setTimeout(start, 1000);
            }
        } else {
            // Después de descanso, trabajo
            setMode('work');
            
            // Auto-iniciar trabajo si está configurado
            if (SETTINGS.autoStartPomodoros) {
                setTimeout(start, 1000);
            }
        }
    }
    
    // ============================================
    // ACTUALIZACIÓN DE UI
    // ============================================
    
    function updateDisplay() {
        const display = document.getElementById('timer-display');
        const preview = document.getElementById('pomodoro-preview');
        
        const minutes = Math.floor(state.timeLeft / 60);
        const seconds = state.timeLeft % 60;
        const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (display) display.textContent = timeString;
        if (preview) preview.textContent = timeString;
        
        // Actualizar título de la página
        if (state.isRunning) {
            document.title = `${timeString} - ${MODES[state.mode].name} | Bursuc Pro`;
        }
    }
    
    function updateProgress() {
        const circle = document.getElementById('timer-progress');
        if (!circle) return;
        
        const circumference = 2 * Math.PI * 120;  // r=120
        const progress = state.timeLeft / state.totalTime;
        const offset = circumference * (1 - progress);
        
        circle.style.strokeDashoffset = offset;
    }
    
    function updateProgressColor() {
        const circle = document.getElementById('timer-progress');
        if (circle) {
            circle.style.stroke = MODES[state.mode].color;
        }
    }
    
    function updateToggleButton() {
        const button = document.getElementById('timer-toggle');
        if (!button) return;
        
        button.innerHTML = state.isRunning ? '⏸️' : '▶️';
        button.className = state.isRunning 
            ? 'w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl hover:bg-yellow-600 transition-colors shadow-lg'
            : 'w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl hover:bg-primary-600 transition-colors shadow-lg';
    }
    
    function updateModeButtons() {
        ['work', 'short', 'long'].forEach(mode => {
            const button = document.getElementById(`mode-${mode}`);
            if (button) {
                if (mode === state.mode) {
                    button.className = 'px-4 py-2 rounded-full text-sm font-medium text-white';
                    button.style.backgroundColor = MODES[mode].color;
                } else {
                    button.className = 'px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors';
                    button.style.backgroundColor = '';
                }
            }
        });
    }
    
    function updateStats() {
        const pomodorosEl = document.getElementById('pomodoros-completed');
        const studyTimeEl = document.getElementById('study-time');
        const breakTimeEl = document.getElementById('break-time');
        
        const pomodoroData = ProgressManager.getData().pomodoro;
        
        if (pomodorosEl) pomodorosEl.textContent = pomodoroData.todaySessions || 0;
        if (studyTimeEl) studyTimeEl.textContent = pomodoroData.todayMinutes || 0;
        if (breakTimeEl) breakTimeEl.textContent = Math.floor((pomodoroData.todayMinutes || 0) * 0.3);  // Estimado
    }
    
    // ============================================
    // NOTIFICACIONES
    // ============================================
    
    function showCompletionNotification() {
        const mode = MODES[state.mode];
        const isWork = state.mode === 'work';
        
        const message = isWork 
            ? `¡Pomodoro completado! Toma un descanso de ${state.completedPomodoros % SETTINGS.longBreakInterval === 0 ? '15' : '5'} minutos.`
            : `¡Descanso terminado! ¿Listo para otro pomodoro?`;
        
        UI.showToast(message, isWork ? 'success' : 'info');
        
        // Notificación del navegador si está permitida
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification(isWork ? '¡Pomodoro Completado!' : '¡Descanso Terminado!', {
                body: message,
                icon: '/assets/icons/icon-192x192.png'
            });
        }
    }
    
    // Solicitar permiso de notificaciones
    function requestNotificationPermission() {
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }
    }
    
    // ============================================
    // PERSISTENCIA
    // ============================================
    
    function saveStats() {
        ProgressManager.save();
    }
    
    function loadStats() {
        const pomodoroData = ProgressManager.getData().pomodoro;
        state.completedPomodoros = pomodoroData.totalSessions || 0;
    }
    
    // ============================================
    // CONFIGURACIÓN
    // ============================================
    
    function updateSettings(newSettings) {
        Object.assign(SETTINGS, newSettings);
    }
    
    function getSettings() {
        return { ...SETTINGS };
    }
    
    // ============================================
    // ESTADÍSTICAS AVANZADAS
    // ============================================
    
    function getStats() {
        const pomodoroData = ProgressManager.getData().pomodoro;
        const today = new Date().toISOString().split('T')[0];
        
        return {
            today: {
                sessions: pomodoroData.todaySessions || 0,
                minutes: pomodoroData.todayMinutes || 0
            },
            total: {
                sessions: pomodoroData.totalSessions || 0,
                minutes: pomodoroData.totalMinutes || 0
            },
            currentStreak: state.completedPomodoros,
            isRunning: state.isRunning,
            currentMode: state.mode,
            timeLeft: state.timeLeft
        };
    }
    
    // ============================================
    // ATAJOS DE TECLADO
    // ============================================
    
    document.addEventListener('keydown', (e) => {
        // Solo si estamos en la sección de pomodoro
        const pomodoroSection = document.getElementById('pomodoro');
        if (pomodoroSection?.classList.contains('hidden')) return;
        
        switch (e.code) {
            case 'Space':
                e.preventDefault();
                toggle();
                break;
            case 'KeyR':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    reset();
                }
                break;
        }
    });
    
    // ============================================
    // API PÚBLICA
    // ============================================
    
    return {
        init,
        toggle,
        start,
        pause,
        reset,
        skip,
        setMode,
        getStats,
        updateSettings,
        getSettings,
        requestNotificationPermission,
        isRunning: () => state.isRunning,
        getTimeLeft: () => state.timeLeft,
        getCurrentMode: () => state.mode,
        MODES
    };
})();

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (typeof ProgressManager !== 'undefined') {
            Pomodoro.init();
        }
    }, 300);
});

// Exportar globalmente
window.Pomodoro = Pomodoro;
window.pomodoro = Pomodoro;
