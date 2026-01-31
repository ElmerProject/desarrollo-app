/**
 * ============================================
 * FLASHCARDS.JS - Sistema de flashcards interactivas
 * Psicología del Desarrollo II - Simo Pro
 * ============================================
 * 
 * Incluye:
 * - Efecto flip 3D
 * - Sistema de calificación (fácil/medio/difícil)
 * - Algoritmo de repetición espaciada simple
 * - Progreso y estadísticas
 */

const Flashcards = (function() {
    'use strict';
    
    // ============================================
    // CONFIGURACIÓN
    // ============================================
    
    const REVIEW_INTERVALS = {
        new: 0,           // Nueva - revisar inmediatamente
        learning: 1,      // Aprendiendo - 1 día
        review: 3,        // Repaso - 3 días
        mastered: 7       // Dominada - 7 días
    };
    
    const DIFFICULTY_MULTIPLIERS = {
        easy: 2,      // Duplicar intervalo
        good: 1,      // Mantener intervalo
        hard: 0.5     // Reducir intervalo
    };
    
    // ============================================
    // ESTADO
    // ============================================
    
    let currentCard = null;
    let currentCardIndex = 0;
    let filteredCards = [];
    let isFlipped = false;
    let sessionCards = [];
    let sessionStartTime = null;
    
    // ============================================
    // INICIALIZACIÓN
    // ============================================
    
    function init() {
        // Cargar filtros guardados
        loadFilters();
        
        // Configurar event listeners
        setupEventListeners();
        
        // Renderizar primera tarjeta
        loadSession();
        
        console.log('🎴 Flashcards inicializadas');
    }
    
    // ============================================
    // CARGAR SESIÓN
    // ============================================
    
    function loadSession() {
        sessionStartTime = Date.now();
        
        // Obtener todas las flashcards
        if (typeof FLASHCARDS_DATA === 'undefined') {
            console.error('No hay datos de flashcards');
            return;
        }
        
        // Aplicar filtros
        applyFilters();
        
        // Si no hay tarjetas para hoy, mostrar mensaje
        if (filteredCards.length === 0) {
            showEmptyState();
            return;
        }
        
        // Mezclar tarjetas
        shuffleCards();
        
        // Mostrar primera tarjeta
        currentCardIndex = 0;
        showCard();
        
        // Actualizar contador
        updateCounter();
    }
    
    // ============================================
    // FILTROS
    // ============================================
    
    function applyFilters() {
        const statusFilter = document.getElementById('flashcard-filter')?.value || 'all';
        const categoryFilter = document.getElementById('flashcard-category')?.value || 'all';
        
        const cardStatuses = ProgressManager.getAllFlashcards();
        
        filteredCards = FLASHCARDS_DATA.filter(card => {
            const status = cardStatuses.find(s => s.id === card.id)?.status || 'new';
            
            // Filtro por estado
            if (statusFilter !== 'all' && status !== statusFilter) {
                return false;
            }
            
            // Filtro por categoría
            if (categoryFilter !== 'all' && card.category !== categoryFilter) {
                return false;
            }
            
            // Verificar si está disponible para revisión hoy
            const cardStatus = cardStatuses.find(s => s.id === card.id);
            if (cardStatus?.nextReview) {
                const nextReview = new Date(cardStatus.nextReview);
                if (nextReview > new Date()) {
                    return false;
                }
            }
            
            return true;
        });
    }
    
    function setupEventListeners() {
        // Filtros
        const filterSelect = document.getElementById('flashcard-filter');
        const categorySelect = document.getElementById('flashcard-category');
        
        if (filterSelect) {
            filterSelect.addEventListener('change', () => {
                saveFilters();
                loadSession();
            });
        }
        
        if (categorySelect) {
            categorySelect.addEventListener('change', () => {
                saveFilters();
                loadSession();
            });
        }
        
        // Teclado
        document.addEventListener('keydown', handleKeyboard);
    }
    
    function handleKeyboard(e) {
        // Solo si estamos en la sección de flashcards
        const flashcardsSection = document.getElementById('flashcards');
        if (flashcardsSection?.classList.contains('hidden')) return;
        
        if (!isFlipped) {
            if (e.code === 'Space' || e.code === 'Enter') {
                e.preventDefault();
                flip();
            }
        } else {
            switch (e.code) {
                case 'Digit1':
                case 'Numpad1':
                    rate('hard');
                    break;
                case 'Digit2':
                case 'Numpad2':
                    rate('good');
                    break;
                case 'Digit3':
                case 'Numpad3':
                    rate('easy');
                    break;
                case 'Space':
                case 'Enter':
                    e.preventDefault();
                    nextCard();
                    break;
            }
        }
    }
    
    // ============================================
    // MOSTRAR TARJETA
    // ============================================
    
    function showCard() {
        if (filteredCards.length === 0) {
            showEmptyState();
            return;
        }
        
        currentCard = filteredCards[currentCardIndex];
        isFlipped = false;
        
        const container = document.getElementById('flashcard-container');
        if (!container) return;
        
        // Obtener categoría
        const category = CATEGORIES_DATA?.[currentCard.category] || { name: 'General', icon: '📚' };
        
        // Obtener estado actual
        const cardStatus = ProgressManager.getFlashcardStatus(currentCard.id);
        const statusBadge = getStatusBadge(cardStatus?.status || 'new');
        
        container.innerHTML = `
            <div class="flashcard-wrapper" onclick="flashcards.flip()">
                <div class="flashcard" id="flashcard">
                    <!-- Frente -->
                    <div class="flashcard-face flashcard-front">
                        <div class="flashcard-content">
                            <div class="flex items-center gap-2 mb-4">
                                <span class="text-2xl">${category.icon}</span>
                                <span class="text-sm font-medium text-gray-500">${category.name}</span>
                                ${statusBadge}
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                ${currentCard.question}
                            </h3>
                            <div class="flashcard-hint">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
                                </svg>
                                <span>Toca para voltear</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Reverso -->
                    <div class="flashcard-face flashcard-back">
                        <div class="flashcard-content">
                            <div class="flex items-center gap-2 mb-4">
                                <span class="text-2xl">💡</span>
                                <span class="text-sm font-medium text-primary-600">Respuesta</span>
                            </div>
                            <div class="text-lg text-gray-800 whitespace-pre-line">
                                ${currentCard.answer}
                            </div>
                            ${currentCard.tags ? `
                                <div class="mt-6 flex flex-wrap gap-2 justify-center">
                                    ${currentCard.tags.map(tag => `
                                        <span class="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                                            #${tag}
                                        </span>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Mostrar controles
        const controls = document.getElementById('flashcard-controls');
        if (controls) controls.classList.add('hidden');
        
        // Ocultar estado vacío
        const emptyState = document.getElementById('flashcards-empty');
        if (emptyState) emptyState.classList.add('hidden');
        
        // Puntos por ver
        Gamification.pointsForViewingFlashcard();
    }
    
    function getStatusBadge(status) {
        const badges = {
            new: '<span class="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">Nueva</span>',
            learning: '<span class="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">Aprendiendo</span>',
            review: '<span class="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Repaso</span>',
            mastered: '<span class="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Dominada</span>'
        };
        return badges[status] || badges.new;
    }
    
    // ============================================
    // FLIP
    // ============================================
    
    function flip() {
        if (isFlipped) return;
        
        const card = document.getElementById('flashcard');
        if (!card) return;
        
        card.classList.add('flipped');
        isFlipped = true;
        
        // Sonido
        AudioManager.flip();
        
        // Mostrar controles después de un momento
        setTimeout(() => {
            const controls = document.getElementById('flashcard-controls');
            if (controls) controls.classList.remove('hidden');
        }, 300);
    }
    
    // ============================================
    // CALIFICAR TARJETA
    // ============================================
    
    function rate(difficulty) {
        if (!currentCard) return;
        
        // Sonido según dificultad
        if (difficulty === 'easy') {
            AudioManager.success();
        } else if (difficulty === 'hard') {
            AudioManager.error();
        } else {
            AudioManager.click();
        }
        
        // Actualizar estado de la tarjeta
        updateCardStatus(difficulty);
        
        // Disparar evento para gamificación
        window.dispatchEvent(new CustomEvent('flashcardRated', {
            detail: {
                cardId: currentCard.id,
                difficulty,
                correct: difficulty !== 'hard'
            }
        }));
        
        // Guardar en sesión
        sessionCards.push({
            id: currentCard.id,
            difficulty,
            timestamp: Date.now()
        });
        
        // Siguiente tarjeta
        nextCard();
    }
    
    function updateCardStatus(difficulty) {
        const cardStatus = ProgressManager.getFlashcardStatus(currentCard.id);
        let newStatus = cardStatus?.status || 'new';
        let reviewCount = (cardStatus?.reviewCount || 0) + 1;
        let correctCount = (cardStatus?.correctCount || 0) + (difficulty !== 'hard' ? 1 : 0);
        
        // Actualizar estado según dificultad y progreso
        if (difficulty === 'easy') {
            if (newStatus === 'new') newStatus = 'learning';
            else if (newStatus === 'learning' && correctCount >= 2) newStatus = 'review';
            else if (newStatus === 'review' && correctCount >= 4) {
                newStatus = 'mastered';
                Gamification.pointsForMasteringCard();
            }
        } else if (difficulty === 'hard') {
            // Volver a learning si estaba avanzada
            if (newStatus === 'review' || newStatus === 'mastered') {
                newStatus = 'learning';
            }
        }
        
        // Calcular próxima revisión
        const baseInterval = REVIEW_INTERVALS[newStatus];
        const multiplier = DIFFICULTY_MULTIPLIERS[difficulty];
        const daysToAdd = Math.round(baseInterval * multiplier);
        
        const nextReview = daysToAdd > 0 
            ? new Date(Date.now() + daysToAdd * 24 * 60 * 60 * 1000).toISOString()
            : null;
        
        // Guardar en progreso
        ProgressManager.updateFlashcard(currentCard.id, {
            status: newStatus,
            nextReview,
            reviewCount,
            correctCount,
            lastReviewed: new Date().toISOString(),
            difficulty
        });
        
        // Registrar actividad
        ProgressManager.recordActivity('card');
    }
    
    // ============================================
    // NAVEGACIÓN
    // ============================================
    
    function nextCard() {
        currentCardIndex++;
        
        if (currentCardIndex >= filteredCards.length) {
            // Sesión completada
            completeSession();
        } else {
            showCard();
            updateCounter();
        }
    }
    
    function previousCard() {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            showCard();
            updateCounter();
        }
    }
    
    // ============================================
    // COMPLETAR SESIÓN
    // ============================================
    
    function completeSession() {
        const duration = Math.round((Date.now() - sessionStartTime) / 60000);
        const correct = sessionCards.filter(c => c.difficulty !== 'hard').length;
        const accuracy = sessionCards.length > 0 
            ? Math.round((correct / sessionCards.length) * 100) 
            : 0;
        
        // Sonido de completado
        AudioManager.complete();
        
        // Mostrar resumen
        showSessionSummary({
            total: sessionCards.length,
            correct,
            accuracy,
            duration
        });
        
        // Actualizar racha diaria
        ProgressManager.updateStreak();
        
        // Guardar sesión
        saveSessionHistory();
    }
    
    function showSessionSummary(stats) {
        const container = document.getElementById('flashcard-container');
        if (!container) return;
        
        container.innerHTML = `
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                <span class="text-6xl mb-4 block">🎉</span>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">¡Sesión Completada!</h3>
                <p class="text-gray-600 mb-6">Has repasado ${stats.total} tarjetas</p>
                
                <div class="grid grid-cols-3 gap-4 mb-6">
                    <div class="bg-green-50 rounded-xl p-4">
                        <p class="text-2xl font-bold text-green-600">${stats.correct}</p>
                        <p class="text-sm text-green-700">Correctas</p>
                    </div>
                    <div class="bg-blue-50 rounded-xl p-4">
                        <p class="text-2xl font-bold text-blue-600">${stats.accuracy}%</p>
                        <p class="text-sm text-blue-700">Precisión</p>
                    </div>
                    <div class="bg-purple-50 rounded-xl p-4">
                        <p class="text-2xl font-bold text-purple-600">${stats.duration}</p>
                        <p class="text-sm text-purple-700">Minutos</p>
                    </div>
                </div>
                
                <button onclick="flashcards.resetSession()" class="px-6 py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors">
                    Otra sesión
                </button>
            </div>
        `;
        
        // Ocultar controles
        const controls = document.getElementById('flashcard-controls');
        if (controls) controls.classList.add('hidden');
    }
    
    // ============================================
    // ESTADOS ESPECIALES
    // ============================================
    
    function showEmptyState() {
        const container = document.getElementById('flashcard-container');
        const controls = document.getElementById('flashcard-controls');
        const emptyState = document.getElementById('flashcards-empty');
        
        if (container) container.innerHTML = '';
        if (controls) controls.classList.add('hidden');
        if (emptyState) emptyState.classList.remove('hidden');
    }
    
    function resetSession() {
        sessionCards = [];
        loadSession();
    }
    
    // ============================================
    // UTILIDADES
    // ============================================
    
    function shuffleCards() {
        // Algoritmo Fisher-Yates
        for (let i = filteredCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [filteredCards[i], filteredCards[j]] = [filteredCards[j], filteredCards[i]];
        }
    }
    
    function updateCounter() {
        const counter = document.getElementById('flashcards-count');
        if (counter) {
            counter.textContent = `${currentCardIndex + 1}/${filteredCards.length}`;
        }
        
        // Actualizar barra de progreso
        const progress = document.getElementById('flashcards-progress');
        if (progress && filteredCards.length > 0) {
            const percent = ((currentCardIndex + 1) / filteredCards.length) * 100;
            progress.style.width = `${percent}%`;
        }
        
        // Actualizar dashboard
        const dashCards = document.getElementById('dash-cards');
        if (dashCards) {
            const stats = ProgressManager.getStats();
            dashCards.textContent = `${stats.masteredCards}/${stats.totalCards}`;
        }
    }
    
    function saveFilters() {
        const statusFilter = document.getElementById('flashcard-filter')?.value;
        const categoryFilter = document.getElementById('flashcard-category')?.value;
        
        localStorage.setItem('simopro_flashcard_filters', JSON.stringify({
            status: statusFilter,
            category: categoryFilter
        }));
    }
    
    function loadFilters() {
        try {
            const saved = localStorage.getItem('simopro_flashcard_filters');
            if (saved) {
                const filters = JSON.parse(saved);
                const statusSelect = document.getElementById('flashcard-filter');
                const categorySelect = document.getElementById('flashcard-category');
                
                if (statusSelect && filters.status) statusSelect.value = filters.status;
                if (categorySelect && filters.category) categorySelect.value = filters.category;
            }
        } catch (e) {
            console.warn('No se pudieron cargar filtros');
        }
    }
    
    function saveSessionHistory() {
        const data = ProgressManager.getData();
        
        data.flashcards.sessionHistory.push({
            date: new Date().toISOString(),
            cards: sessionCards.length,
            correct: sessionCards.filter(c => c.difficulty !== 'hard').length
        });
        
        // Limitar historial
        if (data.flashcards.sessionHistory.length > 100) {
            data.flashcards.sessionHistory = data.flashcards.sessionHistory.slice(-100);
        }
        
        ProgressManager.save();
    }
    
    // ============================================
    // ESTADÍSTICAS
    // ============================================
    
    function getStats() {
        const allCards = ProgressManager.getAllFlashcards();
        
        return {
            total: allCards.length,
            new: allCards.filter(c => c.status === 'new').length,
            learning: allCards.filter(c => c.status === 'learning').length,
            review: allCards.filter(c => c.status === 'review').length,
            mastered: allCards.filter(c => c.status === 'mastered').length,
            dueToday: allCards.filter(c => {
                if (!c.nextReview) return c.status === 'new';
                return new Date(c.nextReview) <= new Date();
            }).length
        };
    }
    
    // ============================================
    // API PÚBLICA
    // ============================================
    
    return {
        init,
        loadSession,
        flip,
        rate,
        nextCard,
        previousCard,
        resetSession,
        getStats,
        getCurrentCard: () => currentCard,
        getSessionCards: () => sessionCards,
        REVIEW_INTERVALS,
        DIFFICULTY_MULTIPLIERS
    };
})();

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Esperar a que otros módulos estén listos
    setTimeout(() => {
        if (typeof ProgressManager !== 'undefined') {
            Flashcards.init();
        }
    }, 200);
});

// Exportar globalmente
window.Flashcards = Flashcards;
