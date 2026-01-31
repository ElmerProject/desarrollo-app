/**
 * ============================================
 * UI.JS - Utilidades de interfaz de usuario
 * Psicología del Desarrollo II - Bursuc Pro
 * ============================================
 * 
 * Gestiona: navegación, toasts, modales, utilidades visuales
 */

const UI = (function() {
    'use strict';
    
    // ============================================
    // NAVEGACIÓN
    // ============================================
    
    let currentSection = 'dashboard';
    
    function navigateTo(sectionId) {
        // Ocultar todas las secciones
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.add('hidden');
        });
        
        // Mostrar sección objetivo
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            targetSection.classList.add('animate-fade-in');
            
            // Scroll al inicio
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            currentSection = sectionId;
            
            // Actualizar navegación activa
            updateActiveNav(sectionId);
            
            // Cerrar sidebar en móvil
            closeSidebar();
        }
        
        // Restaurar título
        document.title = 'Psicología del Desarrollo II - Bursuc Pro';
    }
    
    function updateActiveNav(sectionId) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active', 'bg-primary-50', 'text-primary-700');
            
            if (item.getAttribute('href') === `#${sectionId}`) {
                item.classList.add('active', 'bg-primary-50', 'text-primary-700');
            }
        });
    }
    
    // ============================================
    // SIDEBAR (MÓVIL)
    // ============================================
    
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        
        if (sidebar && overlay) {
            const isOpen = !sidebar.classList.contains('-translate-x-full');
            
            if (isOpen) {
                closeSidebar();
            } else {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        }
    }
    
    function closeSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        
        if (sidebar && overlay) {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }
    
    function initSidebar() {
        const toggleBtn = document.getElementById('menu-toggle');
        const overlay = document.getElementById('sidebar-overlay');
        
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleSidebar);
        }
        
        if (overlay) {
            overlay.addEventListener('click', closeSidebar);
        }
        
        // Cerrar al hacer click en un link (móvil)
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth < 1024) {
                    closeSidebar();
                }
            });
        });
    }
    
    // ============================================
    // TOAST NOTIFICATIONS
    // ============================================
    
    function showToast(message, type = 'info', duration = 3000) {
        const container = document.getElementById('toast-container');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };
        
        toast.innerHTML = `
            <span class="text-xl">${icons[type] || icons.info}</span>
            <span class="text-gray-700">${message}</span>
        `;
        
        container.appendChild(toast);
        
        // Sonido según tipo
        if (type === 'success') AudioManager.success();
        if (type === 'error') AudioManager.error();
        
        // Auto-eliminar
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
    
    // ============================================
    // MODALES
    // ============================================
    
    function showModal(content, options = {}) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-2xl p-6 max-w-md w-full animate-scale-in">
                ${content}
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Cerrar al hacer click fuera
        if (options.closeOnClickOutside !== false) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal(modal);
                }
            });
        }
        
        return modal;
    }
    
    function closeModal(modal) {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 300);
    }
    
    function hideCelebration() {
        const modal = document.getElementById('celebration-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }
    
    // ============================================
    // CONFIRM DIALOG
    // ============================================
    
    function confirm(message, onConfirm, onCancel) {
        const modal = showModal(`
            <h3 class="text-lg font-bold text-gray-900 mb-2">Confirmar</h3>
            <p class="text-gray-600 mb-6">${message}</p>
            <div class="flex justify-end space-x-3">
                <button class="cancel-btn px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    Cancelar
                </button>
                <button class="confirm-btn px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                    Confirmar
                </button>
            </div>
        `);
        
        modal.querySelector('.cancel-btn').addEventListener('click', () => {
            closeModal(modal);
            if (onCancel) onCancel();
        });
        
        modal.querySelector('.confirm-btn').addEventListener('click', () => {
            closeModal(modal);
            if (onConfirm) onConfirm();
        });
    }
    
    // ============================================
    // LOADING STATES
    // ============================================
    
    function showLoading(element, message = 'Cargando...') {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        
        if (element) {
            element.dataset.originalContent = element.innerHTML;
            element.innerHTML = `
                <div class="flex items-center justify-center space-x-2">
                    <div class="w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                    <span class="text-gray-600">${message}</span>
                </div>
            `;
            element.disabled = true;
        }
    }
    
    function hideLoading(element) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        
        if (element && element.dataset.originalContent) {
            element.innerHTML = element.dataset.originalContent;
            element.disabled = false;
            delete element.dataset.originalContent;
        }
    }
    
    // ============================================
    // SKELETON LOADING
    // ============================================
    
    function showSkeleton(container, count = 3) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }
        
        if (container) {
            let skeletons = '';
            for (let i = 0; i < count; i++) {
                skeletons += `
                    <div class="bg-white rounded-xl p-4 mb-4">
                        <div class="skeleton h-4 w-3/4 mb-3"></div>
                        <div class="skeleton h-3 w-1/2"></div>
                    </div>
                `;
            }
            container.innerHTML = skeletons;
        }
    }
    
    // ============================================
    // ANIMACIONES
    // ============================================
    
    function animateElement(element, animation) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        
        if (element) {
            element.classList.add(`animate-${animation}`);
            setTimeout(() => {
                element.classList.remove(`animate-${animation}`);
            }, 1000);
        }
    }
    
    function shake(element) {
        animateElement(element, 'shake');
    }
    
    function pulse(element) {
        animateElement(element, 'pulse');
    }
    
    // ============================================
    // SCROLL UTILITIES
    // ============================================
    
    function scrollTo(element, offset = 0) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        
        if (element) {
            const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }
    
    // ============================================
    // FORM UTILITIES
    // ============================================
    
    function serializeForm(form) {
        const formData = new FormData(form);
        const data = {};
        
        for (const [key, value] of formData.entries()) {
            if (data[key]) {
                if (!Array.isArray(data[key])) {
                    data[key] = [data[key]];
                }
                data[key].push(value);
            } else {
                data[key] = value;
            }
        }
        
        return data;
    }
    
    function validateForm(form, rules) {
        const data = serializeForm(form);
        const errors = {};
        
        for (const field in rules) {
            const rule = rules[field];
            const value = data[field];
            
            if (rule.required && !value) {
                errors[field] = rule.requiredMessage || 'Este campo es requerido';
            } else if (rule.minLength && value && value.length < rule.minLength) {
                errors[field] = `Mínimo ${rule.minLength} caracteres`;
            } else if (rule.pattern && value && !rule.pattern.test(value)) {
                errors[field] = rule.patternMessage || 'Formato inválido';
            }
        }
        
        return {
            isValid: Object.keys(errors).length === 0,
            errors,
            data
        };
    }
    
    // ============================================
    // RENDERIZAR LOGROS
    // ============================================
    
    function renderAchievements() {
        const container = document.getElementById('achievements-grid');
        if (!container || typeof ACHIEVEMENTS_DATA === 'undefined') return;
        
        const achievements = Gamification.getAchievements();
        
        container.innerHTML = achievements.map(achievement => `
            <div class="achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}">
                <div class="achievement-icon">
                    ${achievement.icon}
                </div>
                <h4 class="font-bold text-gray-900 mb-1">${achievement.title}</h4>
                <p class="text-sm text-gray-600 mb-2">${achievement.description}</p>
                <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-500">
                        ${achievement.unlocked ? '✓ Desbloqueado' : '🔒 Bloqueado'}
                    </span>
                    <span class="text-sm font-bold text-primary-600">
                        +${achievement.points} pts
                    </span>
                </div>
            </div>
        `).join('');
    }
    
    // ============================================
    // RENDERIZAR PRÓXIMOS LOGROS
    // ============================================
    
    function renderUpcomingAchievements() {
        const container = document.getElementById('upcoming-achievements');
        if (!container || typeof ACHIEVEMENTS_DATA === 'undefined') return;
        
        const achievements = Gamification.getAchievements();
        const locked = achievements.filter(a => !a.unlocked).slice(0, 3);
        
        if (locked.length === 0) {
            container.innerHTML = `
                <div class="text-center py-4">
                    <span class="text-3xl mb-2 block">🎉</span>
                    <p class="text-gray-600">¡Has desbloqueado todos los logros!</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = locked.map(achievement => `
            <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                <span class="text-2xl opacity-50">${achievement.icon}</span>
                <div class="flex-1">
                    <p class="font-medium text-gray-900">${achievement.title}</p>
                    <p class="text-sm text-gray-500">${achievement.description}</p>
                </div>
                <span class="text-sm font-bold text-primary-600">+${achievement.points}</span>
            </div>
        `).join('');
    }
    
    // ============================================
    // RESPONSIVE UTILITIES
    // ============================================
    
    function isMobile() {
        return window.innerWidth < 768;
    }
    
    function isTablet() {
        return window.innerWidth >= 768 && window.innerWidth < 1024;
    }
    
    function isDesktop() {
        return window.innerWidth >= 1024;
    }
    
    // ============================================
    // INICIALIZACIÓN
    // ============================================
    
    function init() {
        initSidebar();
        initNavigation();
        
        // Renderizar logros si estamos en esa página
        if (!document.getElementById('logros')?.classList.contains('hidden')) {
            renderAchievements();
        }
        
        // Renderizar próximos logros en dashboard
        renderUpcomingAchievements();
        
        console.log('🎨 UI inicializada');
    }
    
    function initNavigation() {
        // Manejar clicks en navegación
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const href = item.getAttribute('href');
                if (href) {
                    const sectionId = href.replace('#', '');
                    navigateTo(sectionId);
                    
                    // Renderizar logros si es necesario
                    if (sectionId === 'logros') {
                        setTimeout(renderAchievements, 100);
                    }
                }
            });
        });
        
        // Navegación inicial
        const hash = window.location.hash.replace('#', '');
        if (hash && document.getElementById(hash)) {
            navigateTo(hash);
        }
    }
    
    // ============================================
    // API PÚBLICA
    // ============================================
    
    return {
        init,
        navigateTo,
        toggleSidebar,
        closeSidebar,
        showToast,
        showModal,
        closeModal,
        hideCelebration,
        confirm,
        showLoading,
        hideLoading,
        showSkeleton,
        animateElement,
        shake,
        pulse,
        scrollTo,
        serializeForm,
        validateForm,
        renderAchievements,
        renderUpcomingAchievements,
        isMobile,
        isTablet,
        isDesktop,
        getCurrentSection: () => currentSection
    };
})();

// NOTE: Initialization is handled by App.init() - do not add DOMContentLoaded here

// Exportar globalmente
window.UI = UI;
window.ui = UI;
