/**
 * ============================================
 * GAMIFICATION.JS - Sistema de gamificación completo
 * Psicología del Desarrollo II - Simo Pro
 * ============================================
 * 
 * Gestiona: puntos, niveles, logros, celebraciones y streaks.
 */

const Gamification = (function() {
    'use strict';
    
    // ============================================
    // CONFIGURACIÓN
    // ============================================
    
    const POINTS = {
        FLASHCARD_VIEW: 5,        // Ver una flashcard
        FLASHCARD_CORRECT: 10,    // Responder correctamente
        FLASHCARD_MASTERED: 25,   // Dominar una flashcard
        POMODORO_COMPLETE: 30,    // Completar un pomodoro
        DAILY_GOAL: 50,           // Alcanzar meta diaria
        STREAK_3: 15,             // Racha de 3
        STREAK_5: 30,             // Racha de 5
        STREAK_10: 75,            // Racha de 10
        LEVEL_UP: 100             // Subir de nivel (bonus)
    };
    
    // Multiplicadores
    const MULTIPLIERS = {
        EASY: 1,
        MEDIUM: 1.5,
        HARD: 2,
        STREAK_BONUS: 0.1  // +10% por cada 5 de racha
    };
    
    // Estado actual
    let currentStreak = 0;
    let sessionStats = {
        cardsViewed: 0,
        correctAnswers: 0,
        startTime: null
    };
    
    // ============================================
    // INICIALIZACIÓN
    // ============================================
    
    function init() {
        sessionStats.startTime = Date.now();
        loadSessionState();
        
        // Escuchar eventos
        window.addEventListener('flashcardRated', handleFlashcardRated);
        window.addEventListener('pomodoroCompleted', handlePomodoroCompleted);
        window.addEventListener('levelUp', handleLevelUp);
        
        console.log('🎮 Gamificación inicializada');
    }
    
    // ============================================
    // SISTEMA DE PUNTOS
    // ============================================
    
    /**
     * Añade puntos al usuario con animación y efectos
     */
    function addPoints(amount, reason = '', showAnimation = true) {
        // Aplicar multiplicadores
        const multiplier = calculateMultiplier();
        const finalAmount = Math.round(amount * multiplier);
        
        // Añadir a progreso
        const user = ProgressManager.addPoints(finalAmount, reason);
        
        // Animar si es visible
        if (showAnimation) {
            animatePoints(finalAmount);
        }
        
        // Actualizar UI
        updateUI(user);
        
        // Verificar logros
        checkAchievements();
        
        return { amount: finalAmount, total: user.points };
    }
    
    /**
     * Calcula multiplicador basado en racha y dificultad
     */
    function calculateMultiplier() {
        let multiplier = 1;
        
        // Bonus por racha
        const streakBonus = Math.floor(currentStreak / 5) * MULTIPLIERS.STREAK_BONUS;
        multiplier += streakBonus;
        
        return multiplier;
    }
    
    /**
     * Añade puntos por ver una flashcard
     */
    function pointsForViewingFlashcard() {
        sessionStats.cardsViewed++;
        return addPoints(POINTS.FLASHCARD_VIEW, 'flashcard_view');
    }
    
    /**
     * Añade puntos por respuesta correcta
     */
    function pointsForCorrectAnswer(difficulty = 'medium') {
        sessionStats.correctAnswers++;
        
        // Incrementar racha
        incrementStreak();
        
        // Puntos base + bonus por racha
        let points = POINTS.FLASHCARD_CORRECT;
        
        // Bonus por dificultad de la tarjeta
        if (difficulty === 'hard') points *= MULTIPLIERS.HARD;
        if (difficulty === 'easy') points *= MULTIPLIERS.EASY;
        
        // Bonus por racha
        if (currentStreak === 3) points += POINTS.STREAK_3;
        if (currentStreak === 5) points += POINTS.STREAK_5;
        if (currentStreak === 10) points += POINTS.STREAK_10;
        
        return addPoints(Math.round(points), 'correct_answer');
    }
    
    /**
     * Puntos por dominar una flashcard
     */
    function pointsForMasteringCard() {
        return addPoints(POINTS.FLASHCARD_MASTERED, 'card_mastered', true);
    }
    
    /**
     * Puntos por completar pomodoro
     */
    function pointsForPomodoro() {
        return addPoints(POINTS.POMODORO_COMPLETE, 'pomodoro', true);
    }
    
    // ============================================
    // SISTEMA DE RACHA (STREAK)
    // ============================================
    
    function incrementStreak() {
        currentStreak++;
        
        // Actualizar stats
        const stats = ProgressManager.getStats();
        if (currentStreak > stats.bestStreak) {
            stats.bestStreak = currentStreak;
        }
        
        // Efectos visuales para rachas importantes
        if (currentStreak === 3 || currentStreak === 5 || currentStreak === 10) {
            showStreakAnimation(currentStreak);
            AudioManager.streak();
        }
        
        // Actualizar UI
        updateStreakUI();
        
        saveSessionState();
    }
    
    function resetStreak() {
        if (currentStreak > 0) {
            currentStreak = 0;
            updateStreakUI();
            saveSessionState();
        }
    }
    
    function getStreak() {
        return currentStreak;
    }
    
    // ============================================
    // SISTEMA DE NIVELES
    // ============================================
    
    function getCurrentLevel() {
        const data = ProgressManager.getData();
        return {
            level: data.user.level,
            ...getLevelInfo(data.user.level)
        };
    }
    
    function getLevelInfo(level) {
        if (typeof LEVELS_DATA !== 'undefined') {
            return LEVELS_DATA.find(l => l.level === level) || LEVELS_DATA[0];
        }
        return { name: 'Nivel ' + level, icon: '⭐', minPoints: 0 };
    }
    
    function getNextLevelInfo() {
        const data = ProgressManager.getData();
        if (typeof LEVELS_DATA !== 'undefined') {
            return LEVELS_DATA.find(l => l.level === data.user.level + 1);
        }
        return null;
    }
    
    function getProgressToNextLevel() {
        const data = ProgressManager.getData();
        const currentLevel = getLevelInfo(data.user.level);
        const nextLevel = getNextLevelInfo();
        
        if (!nextLevel) return 100;  // Nivel máximo
        
        const pointsInLevel = data.user.totalPoints - currentLevel.minPoints;
        const pointsNeeded = nextLevel.minPoints - currentLevel.minPoints;
        
        return Math.min(100, Math.round((pointsInLevel / pointsNeeded) * 100));
    }
    
    // ============================================
    // SISTEMA DE LOGROS
    // ============================================
    
    function checkAchievements() {
        if (typeof ACHIEVEMENTS_DATA === 'undefined') return;
        
        const stats = ProgressManager.getStats();
        const newlyUnlocked = [];
        
        ACHIEVEMENTS_DATA.forEach(achievement => {
            if (!ProgressManager.isAchievementUnlocked(achievement.id)) {
                if (achievement.condition(stats)) {
                    unlockAchievement(achievement);
                    newlyUnlocked.push(achievement);
                }
            }
        });
        
        return newlyUnlocked;
    }
    
    function unlockAchievement(achievement) {
        // Desbloquear en progreso
        ProgressManager.unlockAchievement(achievement.id);
        
        // Añadir puntos
        addPoints(achievement.points, 'achievement', false);
        
        // Mostrar celebración
        showAchievementCelebration(achievement);
        
        // Sonido
        AudioManager.achievement();
        
        console.log(`🏆 Logro desbloqueado: ${achievement.title}`);
    }
    
    function getAchievements() {
        if (typeof ACHIEVEMENTS_DATA === 'undefined') return [];
        
        const unlocked = ProgressManager.getUnlockedAchievements();
        
        return ACHIEVEMENTS_DATA.map(achievement => ({
            ...achievement,
            unlocked: unlocked.includes(achievement.id)
        }));
    }
    
    function getUnlockedCount() {
        return ProgressManager.getUnlockedAchievements().length;
    }
    
    function getTotalCount() {
        return typeof ACHIEVEMENTS_DATA !== 'undefined' ? ACHIEVEMENTS_DATA.length : 0;
    }
    
    // ============================================
    // CELEBRACIONES Y ANIMACIONES
    // ============================================
    
    function showAchievementCelebration(achievement) {
        const modal = document.getElementById('celebration-modal');
        const title = document.getElementById('celebration-title');
        const message = document.getElementById('celebration-message');
        
        title.textContent = '🏆 ¡Logro Desbloqueado!';
        message.innerHTML = `
            <strong>${achievement.title}</strong><br>
            ${achievement.description}<br>
            <span class="text-primary-600 font-bold">+${achievement.points} puntos</span>
        `;
        
        modal.classList.remove('hidden');
        
        // Efecto de confetti
        createConfetti();
    }
    
    function showLevelUpCelebration(level, levelName) {
        const modal = document.getElementById('celebration-modal');
        const title = document.getElementById('celebration-title');
        const message = document.getElementById('celebration-message');
        
        title.textContent = '⭐ ¡Subiste de Nivel!';
        message.innerHTML = `
            <strong>Nivel ${level}: ${levelName}</strong><br>
            ¡Felicidades por tu progreso!<br>
            <span class="text-primary-600 font-bold">+${POINTS.LEVEL_UP} puntos bonus</span>
        `;
        
        modal.classList.remove('hidden');
        
        // Sonido especial
        AudioManager.levelUp();
        
        // Confetti extra
        createConfetti(50);
    }
    
    function showStreakAnimation(streak) {
        const messages = {
            3: '🔥 ¡Racha de 3!',
            5: '⚡ ¡Racha de 5! ¡Increíble!',
            10: '🌟 ¡Racha de 10! ¡Eres imparable!'
        };
        
        if (messages[streak]) {
            UI.showToast(messages[streak], 'success');
        }
    }
    
    function animatePoints(amount) {
        // Crear elemento flotante
        const floatEl = document.createElement('div');
        floatEl.className = 'fixed z-50 text-2xl font-bold text-primary-600 animate-float pointer-events-none';
        floatEl.textContent = `+${amount}`;
        floatEl.style.cssText = `
            right: 20px;
            top: 80px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        `;
        
        document.body.appendChild(floatEl);
        
        // Animar y eliminar
        setTimeout(() => {
            floatEl.style.transition = 'all 1s ease-out';
            floatEl.style.opacity = '0';
            floatEl.style.transform = 'translateY(-50px)';
        }, 100);
        
        setTimeout(() => floatEl.remove(), 1100);
    }
    
    function createConfetti(count = 30) {
        const colors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#3b82f6', '#ec4899'];
        
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    left: ${Math.random() * 100}vw;
                    top: 50vh;
                    border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                    pointer-events: none;
                    z-index: 100;
                `;
                
                document.body.appendChild(confetti);
                
                // Animación
                const angle = (Math.random() - 0.5) * 60;
                const distance = 100 + Math.random() * 200;
                
                confetti.animate([
                    { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
                    { transform: `translate(${Math.sin(angle) * distance}px, -${distance}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
                ], {
                    duration: 1000 + Math.random() * 500,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }).onfinish = () => confetti.remove();
                
            }, i * 50);
        }
    }
    
    // ============================================
    // ACTUALIZACIÓN DE UI
    // ============================================
    
    function updateUI(user) {
        // Actualizar navbar
        const navLevel = document.getElementById('nav-level');
        const navPoints = document.getElementById('nav-points');
        const navStreak = document.getElementById('nav-streak');
        
        if (navLevel) navLevel.textContent = user.level;
        if (navPoints) navPoints.textContent = user.points;
        if (navStreak) navStreak.textContent = currentStreak;
        
        // Actualizar dashboard
        const dashLevel = document.getElementById('dash-level');
        const dashPoints = document.getElementById('dash-points');
        const dashStreak = document.getElementById('dash-streak');
        
        if (dashLevel) {
            dashLevel.textContent = user.level;
            const levelInfo = getLevelInfo(user.level);
            dashLevel.nextElementSibling.textContent = levelInfo.name;
        }
        if (dashPoints) dashPoints.textContent = user.points;
        if (dashStreak) dashStreak.textContent = currentStreak;
    }
    
    function updateStreakUI() {
        const navStreak = document.getElementById('nav-streak');
        const dashStreak = document.getElementById('dash-streak');
        
        if (navStreak) {
            navStreak.textContent = currentStreak;
            navStreak.parentElement.classList.add('animate-pulse');
            setTimeout(() => navStreak.parentElement.classList.remove('animate-pulse'), 1000);
        }
        if (dashStreak) dashStreak.textContent = currentStreak;
    }
    
    // ============================================
    // MANEJADORES DE EVENTOS
    // ============================================
    
    function handleFlashcardRated(event) {
        const { difficulty, correct } = event.detail;
        
        if (correct) {
            pointsForCorrectAnswer(difficulty);
        } else {
            resetStreak();
        }
    }
    
    function handlePomodoroCompleted() {
        pointsForPomodoro();
        
        // Actualizar racha diaria
        ProgressManager.updateStreak();
    }
    
    function handleLevelUp(event) {
        const { level, name } = event.detail;
        showLevelUpCelebration(level, name);
    }
    
    // ============================================
    // PERSISTENCIA DE SESIÓN
    // ============================================
    
    function saveSessionState() {
        try {
            sessionStorage.setItem('simopro_session', JSON.stringify({
                currentStreak,
                sessionStats
            }));
        } catch (e) {
            console.warn('No se pudo guardar estado de sesión');
        }
    }
    
    function loadSessionState() {
        try {
            const saved = sessionStorage.getItem('simopro_session');
            if (saved) {
                const state = JSON.parse(saved);
                currentStreak = state.currentStreak || 0;
                sessionStats = state.sessionStats || { cardsViewed: 0, correctAnswers: 0, startTime: Date.now() };
            }
        } catch (e) {
            console.warn('No se pudo cargar estado de sesión');
        }
    }
    
    // ============================================
    // STATS DE SESIÓN
    // ============================================
    
    function getSessionStats() {
        const duration = Math.round((Date.now() - sessionStats.startTime) / 60000);  // minutos
        
        return {
            ...sessionStats,
            duration,
            currentStreak,
            accuracy: sessionStats.cardsViewed > 0 
                ? Math.round((sessionStats.correctAnswers / sessionStats.cardsViewed) * 100) 
                : 0
        };
    }
    
    // ============================================
    // API PÚBLICA
    // ============================================
    
    return {
        init,
        addPoints,
        pointsForViewingFlashcard,
        pointsForCorrectAnswer,
        pointsForMasteringCard,
        pointsForPomodoro,
        incrementStreak,
        resetStreak,
        getStreak,
        getCurrentLevel,
        getLevelInfo,
        getNextLevelInfo,
        getProgressToNextLevel,
        checkAchievements,
        getAchievements,
        getUnlockedCount,
        getTotalCount,
        showAchievementCelebration,
        showLevelUpCelebration,
        createConfetti,
        getSessionStats,
        POINTS,
        MULTIPLIERS
    };
})();

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Esperar a que ProgressManager esté listo
    if (typeof ProgressManager !== 'undefined') {
        Gamification.init();
    } else {
        setTimeout(() => Gamification.init(), 100);
    }
});

// Exportar globalmente
window.Gamification = Gamification;
