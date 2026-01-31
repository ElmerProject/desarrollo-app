/**
 * ============================================
 * PROGRESS.JS - Persistencia con localStorage
 * Psicología del Desarrollo II - Bursuc Pro
 * ============================================
 * 
 * Gestiona el guardado y carga de todo el progreso del usuario.
 * Incluye sistema de versiones para migraciones futuras.
 */

const ProgressManager = (function() {
    'use strict';
    
    // ============================================
    // CONFIGURACIÓN
    // ============================================
    
    const STORAGE_KEY = 'bursucpro_progress';
    const VERSION = '1.0.0';
    
    // ============================================
    // ESTRUCTURA DE DATOS POR DEFECTO
    // ============================================
    
    const defaultData = {
        version: VERSION,
        user: {
            name: 'Bursuc',
            level: 1,
            points: 0,
            totalPoints: 0,
            streak: 0,
            bestStreak: 0,
            lastStudyDate: null,
            joinedDate: new Date().toISOString()
        },
        flashcards: {
            // Estado de cada flashcard: { id, status, nextReview, reviewCount, correctCount }
            cards: [],
            totalStudied: 0,
            mastered: 0,
            sessionHistory: []
        },
        achievements: {
            unlocked: [],  // IDs de logros desbloqueados
            lastCheck: null
        },
        pomodoro: {
            totalSessions: 0,
            totalMinutes: 0,
            todaySessions: 0,
            todayMinutes: 0,
            lastReset: new Date().toISOString()
        },
        stats: {
            cardsStudied: 0,
            perfectAnswers: 0,
            currentStreak: 0,
            bestStreak: 0,
            pomodorosCompleted: 0,
            studySessions: 0,
            totalStudyTime: 0,  // en minutos
            categoriesProgress: {},
            dailyActivity: {}   // { '2024-01-15': { cards: 5, minutes: 30 } }
        },
        settings: {
            soundEnabled: true,
            soundVolume: 0.3,
            darkMode: false,
            notifications: true,
            dailyGoal: 10  // flashcards objetivo por día
        },
        timestamps: {
            created: new Date().toISOString(),
            lastSaved: null,
            lastOpened: null
        }
    };
    
    // ============================================
    // DATOS EN MEMORIA
    // ============================================
    
    let data = null;
    let autoSaveInterval = null;
    
    // ============================================
    // INICIALIZACIÓN
    // ============================================
    
    function init() {
        load();
        startAutoSave();
        updateLastOpened();
        checkDailyReset();
        return data;
    }
    
    // ============================================
    // CARGAR DATOS
    // ============================================
    
    function load() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            
            if (saved) {
                const parsed = JSON.parse(saved);
                
                // Verificar versión y migrar si es necesario
                if (parsed.version !== VERSION) {
                    data = migrateData(parsed);
                } else {
                    data = mergeWithDefaults(parsed);
                }
                
                console.log('✅ Progreso cargado correctamente');
            } else {
                // Primera vez - crear datos por defecto
                data = JSON.parse(JSON.stringify(defaultData));
                initializeFlashcards();
                save();
                console.log('🆕 Nuevo progreso creado');
            }
            
            return data;
        } catch (error) {
            console.error('❌ Error cargando progreso:', error);
            data = JSON.parse(JSON.stringify(defaultData));
            initializeFlashcards();
            return data;
        }
    }
    
    // ============================================
    // GUARDAR DATOS
    // ============================================
    
    function save() {
        try {
            if (!data) return false;
            
            data.timestamps.lastSaved = new Date().toISOString();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            
            // Disparar evento para que otros módulos sepan que se guardó
            window.dispatchEvent(new CustomEvent('progressSaved', { detail: data }));
            
            return true;
        } catch (error) {
            console.error('❌ Error guardando progreso:', error);
            
            // Manejar error de quota exceeded
            if (error.name === 'QuotaExceededError') {
                console.warn('⚠️ Almacenamiento lleno, intentando limpiar...');
                cleanupOldData();
            }
            
            return false;
        }
    }
    
    // ============================================
    // AUTO-GUARDADO
    // ============================================
    
    function startAutoSave(interval = 30000) {  // Cada 30 segundos
        if (autoSaveInterval) clearInterval(autoSaveInterval);
        
        autoSaveInterval = setInterval(() => {
            save();
        }, interval);
    }
    
    function stopAutoSave() {
        if (autoSaveInterval) {
            clearInterval(autoSaveInterval);
            autoSaveInterval = null;
        }
    }
    
    // ============================================
    // INICIALIZAR FLASHCARDS
    // ============================================
    
    function initializeFlashcards() {
        // Crear estado inicial para cada flashcard
        if (typeof FLASHCARDS_DATA !== 'undefined') {
            data.flashcards.cards = FLASHCARDS_DATA.map(card => ({
                id: card.id,
                status: 'new',  // new, learning, review, mastered
                nextReview: null,
                reviewCount: 0,
                correctCount: 0,
                lastReviewed: null,
                difficulty: null  // easy, medium, hard
            }));
        }
    }
    
    // ============================================
    // ACTUALIZAR FLASHCARD
    // ============================================
    
    function updateFlashcard(cardId, updates) {
        const card = data.flashcards.cards.find(c => c.id === cardId);
        if (!card) return false;
        
        Object.assign(card, updates);
        save();
        return true;
    }
    
    // ============================================
    // AÑADIR PUNTOS
    // ============================================
    
    function addPoints(amount, source = 'general') {
        data.user.points += amount;
        data.user.totalPoints += amount;
        
        // Verificar subida de nivel
        checkLevelUp();
        
        // Guardar actividad
        recordActivity('points', { amount, source });
        
        save();
        return data.user;
    }
    
    // ============================================
    // VERIFICAR SUBIDA DE NIVEL
    // ============================================
    
    function checkLevelUp() {
        if (typeof LEVELS_DATA !== 'undefined') {
            const nextLevel = LEVELS_DATA.find(l => l.level === data.user.level + 1);
            
            if (nextLevel && data.user.totalPoints >= nextLevel.minPoints) {
                data.user.level = nextLevel.level;
                
                // Disparar evento de subida de nivel
                window.dispatchEvent(new CustomEvent('levelUp', { 
                    detail: { level: data.user.level, name: nextLevel.name } 
                }));
                
                return true;
            }
        }
        return false;
    }
    
    // ============================================
    // GESTIÓN DE RACHA (STREAK)
    // ============================================
    
    function updateStreak() {
        const today = new Date().toDateString();
        const lastStudy = data.user.lastStudyDate ? new Date(data.user.lastStudyDate).toDateString() : null;
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastStudy === today) {
            // Ya estudió hoy, no cambia nada
            return data.user.streak;
        } else if (lastStudy === yesterday.toDateString()) {
            // Estudió ayer, incrementar racha
            data.user.streak++;
        } else if (lastStudy !== today) {
            // Perdió la racha
            data.user.streak = 1;
        }
        
        // Actualizar mejor racha
        if (data.user.streak > data.user.bestStreak) {
            data.user.bestStreak = data.user.streak;
        }
        
        data.user.lastStudyDate = new Date().toISOString();
        save();
        
        return data.user.streak;
    }
    
    // ============================================
    // DESBLOQUEAR LOGRO
    // ============================================
    
    function unlockAchievement(achievementId) {
        if (!data.achievements.unlocked.includes(achievementId)) {
            data.achievements.unlocked.push(achievementId);
            data.achievements.lastCheck = new Date().toISOString();
            save();
            
            // Disparar evento
            window.dispatchEvent(new CustomEvent('achievementUnlocked', { 
                detail: { id: achievementId } 
            }));
            
            return true;
        }
        return false;
    }
    
    // ============================================
    // POMODORO
    // ============================================
    
    function addPomodoroSession(minutes) {
        data.pomodoro.totalSessions++;
        data.pomodoro.totalMinutes += minutes;
        data.pomodoro.todaySessions++;
        data.pomodoro.todayMinutes += minutes;
        
        data.stats.pomodorosCompleted++;
        data.stats.totalStudyTime += minutes;
        
        save();
    }
    
    // ============================================
    // REGISTRAR ACTIVIDAD DIARIA
    // ============================================
    
    function recordActivity(type, details) {
        const today = new Date().toISOString().split('T')[0];
        
        if (!data.stats.dailyActivity[today]) {
            data.stats.dailyActivity[today] = {
                cards: 0,
                minutes: 0,
                pomodoros: 0,
                points: 0
            };
        }
        
        const activity = data.stats.dailyActivity[today];
        
        switch (type) {
            case 'card':
                activity.cards++;
                data.stats.cardsStudied++;
                break;
            case 'pomodoro':
                activity.pomodoros++;
                activity.minutes += details.minutes || 25;
                break;
            case 'points':
                activity.points += details.amount || 0;
                break;
        }
        
        save();
    }
    
    // ============================================
    // RESET DIARIO
    // ============================================
    
    function checkDailyReset() {
        const lastReset = data.pomodoro.lastReset;
        const today = new Date().toDateString();
        
        if (lastReset && new Date(lastReset).toDateString() !== today) {
            // Es un nuevo día
            data.pomodoro.todaySessions = 0;
            data.pomodoro.todayMinutes = 0;
            data.pomodoro.lastReset = new Date().toISOString();
            save();
        }
    }
    
    // ============================================
    // ESTADÍSTICAS
    // ============================================
    
    function getStats() {
        const today = new Date().toISOString().split('T')[0];
        const todayActivity = data.stats.dailyActivity[today] || { cards: 0, minutes: 0 };
        
        // Calcular categorías dominadas
        const masteredCategories = [];
        if (typeof FLASHCARDS_DATA !== 'undefined') {
            const categories = [...new Set(FLASHCARDS_DATA.map(c => c.category))];
            
            categories.forEach(cat => {
                const catCards = FLASHCARDS_DATA.filter(c => c.category === cat);
                const masteredCount = data.flashcards.cards.filter(
                    c => catCards.some(cc => cc.id === c.id) && c.status === 'mastered'
                ).length;
                
                if (masteredCount >= catCards.length * 0.8) {
                    masteredCategories.push(cat);
                }
            });
        }
        
        return {
            ...data.stats,
            level: data.user.level,
            points: data.user.points,
            streak: data.user.streak,
            bestStreak: data.user.bestStreak,
            todayCards: todayActivity.cards,
            todayMinutes: todayActivity.minutes,
            achievementsUnlocked: data.achievements.unlocked.length,
            masteredCategories,
            totalCards: data.flashcards.cards.length,
            masteredCards: data.flashcards.cards.filter(c => c.status === 'mastered').length,
            progressPercent: Math.round(
                (data.flashcards.cards.filter(c => c.status === 'mastered').length / 
                 data.flashcards.cards.length) * 100
            )
        };
    }
    
    // ============================================
    // CONFIGURACIÓN
    // ============================================
    
    function updateSettings(newSettings) {
        Object.assign(data.settings, newSettings);
        save();
        return data.settings;
    }
    
    function getSettings() {
        return data.settings;
    }
    
    // ============================================
    // MIGRACIÓN DE DATOS
    // ============================================
    
    function migrateData(oldData) {
        console.log(`🔄 Migrando datos de versión ${oldData.version || 'desconocida'} a ${VERSION}`);
        
        // Merge con estructura actual
        const migrated = mergeWithDefaults(oldData);
        migrated.version = VERSION;
        
        return migrated;
    }
    
    function mergeWithDefaults(savedData) {
        // Deep merge recursivo
        function merge(target, source) {
            for (const key in source) {
                if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                    if (!target[key]) target[key] = {};
                    merge(target[key], source[key]);
                } else {
                    if (target[key] === undefined) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        }
        
        const merged = JSON.parse(JSON.stringify(defaultData));
        return merge(merged, savedData);
    }
    
    // ============================================
    // LIMPIEZA DE DATOS ANTIGUOS
    // ============================================
    
    function cleanupOldData() {
        // Mantener solo los últimos 30 días de actividad diaria
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        
        const filteredActivity = {};
        for (const date in data.stats.dailyActivity) {
            if (new Date(date) >= thirtyDaysAgo) {
                filteredActivity[date] = data.stats.dailyActivity[date];
            }
        }
        
        data.stats.dailyActivity = filteredActivity;
        
        // Limitar historial de sesiones
        if (data.flashcards.sessionHistory.length > 100) {
            data.flashcards.sessionHistory = data.flashcards.sessionHistory.slice(-100);
        }
        
        save();
    }
    
    // ============================================
    // EXPORTAR/IMPORTAR
    // ============================================
    
    function exportData() {
        return JSON.stringify(data, null, 2);
    }
    
    function importData(jsonString) {
        try {
            const imported = JSON.parse(jsonString);
            data = mergeWithDefaults(imported);
            save();
            return true;
        } catch (error) {
            console.error('❌ Error importando datos:', error);
            return false;
        }
    }
    
    // ============================================
    // RESET TOTAL
    // ============================================
    
    function resetAll() {
        if (confirm('¿Estás seguro de que quieres borrar TODO tu progreso? Esta acción no se puede deshacer.')) {
            localStorage.removeItem(STORAGE_KEY);
            data = JSON.parse(JSON.stringify(defaultData));
            initializeFlashcards();
            save();
            location.reload();
        }
    }
    
    // ============================================
    // ACTUALIZAR TIMESTAMP
    // ============================================
    
    function updateLastOpened() {
        if (data) {
            data.timestamps.lastOpened = new Date().toISOString();
        }
    }
    
    // ============================================
    // API PÚBLICA
    // ============================================
    
    return {
        init,
        load,
        save,
        startAutoSave,
        stopAutoSave,
        getData: () => data,
        updateFlashcard,
        addPoints,
        checkLevelUp,
        updateStreak,
        unlockAchievement,
        addPomodoroSession,
        recordActivity,
        getStats,
        updateSettings,
        getSettings,
        exportData,
        importData,
        resetAll,
        getFlashcardStatus: (id) => data.flashcards.cards.find(c => c.id === id),
        getAllFlashcards: () => data.flashcards.cards,
        getUnlockedAchievements: () => data.achievements.unlocked,
        isAchievementUnlocked: (id) => data.achievements.unlocked.includes(id)
    };
})();

// Inicializar al cargar
window.ProgressManager = ProgressManager;
