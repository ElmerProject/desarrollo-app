/**
 * ============================================
 * AUDIO.JS - Sistema de sonidos con Web Audio API
 * Psicología del Desarrollo II - Simo Pro
 * ============================================
 * 
 * Genera sonidos sintéticos sin necesidad de archivos externos.
 * Compatible con todos los navegadores modernos.
 */

const AudioManager = (function() {
    'use strict';
    
    // ============================================
    // CONFIGURACIÓN
    // ============================================
    
    const config = {
        enabled: true,
        volume: 0.3,  // Volumen base (0-1)
        sounds: {
            success: { frequency: 523.25, type: 'sine', duration: 0.15 },      // Do5
            error: { frequency: 220, type: 'sawtooth', duration: 0.3 },         // La3
            flip: { frequency: 440, type: 'triangle', duration: 0.08 },         // La4
            levelUp: { type: 'arpeggio', notes: [523.25, 659.25, 783.99, 1046.50] }, // Do-Mi-Sol-Do
            achievement: { type: 'chord', notes: [523.25, 659.25, 783.99] },    // Do mayor
            streak: { type: 'ascending', start: 440, steps: 5 },
            click: { frequency: 800, type: 'sine', duration: 0.05 },
            complete: { type: 'melody', notes: [523.25, 659.25, 783.99, 523.25] },
            timer: { frequency: 880, type: 'sine', duration: 0.1 },             // La5
            notification: { frequency: 600, type: 'sine', duration: 0.2 }
        }
    };
    
    // Contexto de audio
    let audioContext = null;
    let masterGain = null;
    
    // ============================================
    // INICIALIZACIÓN
    // ============================================
    
    function init() {
        try {
            // Crear contexto de audio
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) {
                console.warn('Web Audio API no soportada');
                return false;
            }
            
            audioContext = new AudioContext();
            
            // Nodo maestro de ganancia (volumen)
            masterGain = audioContext.createGain();
            masterGain.gain.value = config.volume;
            masterGain.connect(audioContext.destination);
            
            // Cargar preferencias guardadas
            loadPreferences();
            
            return true;
        } catch (error) {
            console.error('Error inicializando audio:', error);
            return false;
        }
    }
    
    // ============================================
    // GENERADORES DE SONIDO
    // ============================================
    
    /**
     * Genera un tono simple
     */
    function playTone(frequency, type = 'sine', duration = 0.2, startTime = 0) {
        if (!audioContext || !config.enabled) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        
        // Envelope ADSR simplificado
        const now = audioContext.currentTime + startTime;
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(1, now + 0.01);  // Attack
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);  // Decay
        
        oscillator.connect(gainNode);
        gainNode.connect(masterGain);
        
        oscillator.start(now);
        oscillator.stop(now + duration + 0.01);
    }
    
    /**
     * Genera un acorde (múltiples notas simultáneas)
     */
    function playChord(notes, duration = 0.5) {
        if (!audioContext || !config.enabled) return;
        
        notes.forEach((freq, index) => {
            // Pequeño delay entre notas para efecto más rico
            playTone(freq, 'sine', duration, index * 0.02);
        });
    }
    
    /**
     * Genera un arpegio (notas secuenciales)
     */
    function playArpeggio(notes, duration = 0.15) {
        if (!audioContext || !config.enabled) return;
        
        notes.forEach((freq, index) => {
            playTone(freq, 'sine', duration, index * 0.1);
        });
    }
    
    /**
     * Genera una secuencia ascendente
     */
    function playAscending(startFreq, steps, duration = 0.1) {
        if (!audioContext || !config.enabled) return;
        
        for (let i = 0; i < steps; i++) {
            const freq = startFreq * Math.pow(2, i / 12);  // Escala cromática
            playTone(freq, 'sine', duration, i * 0.08);
        }
    }
    
    /**
     * Genera una melodía
     */
    function playMelody(notes, duration = 0.2) {
        if (!audioContext || !config.enabled) return;
        
        notes.forEach((freq, index) => {
            playTone(freq, 'triangle', duration, index * 0.15);
        });
    }
    
    // ============================================
    // SONIDOS ESPECÍFICOS
    // ============================================
    
    const sounds = {
        /**
         * Sonido de acierto/correcto
         */
        success: () => {
            const s = config.sounds.success;
            playTone(s.frequency, s.type, s.duration);
            // Segunda nota para efecto más agradable
            setTimeout(() => playTone(s.frequency * 1.5, s.type, s.duration * 0.8), 80);
        },
        
        /**
         * Sonido de error/incorrecto
         */
        error: () => {
            const s = config.sounds.error;
            playTone(s.frequency, s.type, s.duration);
            // Descenso para efecto de "fallo"
            setTimeout(() => playTone(s.frequency * 0.75, s.type, s.duration * 0.8), 100);
        },
        
        /**
         * Sonido de voltear tarjeta
         */
        flip: () => {
            const s = config.sounds.flip;
            playTone(s.frequency, s.type, s.duration);
        },
        
        /**
         * Sonido de subir de nivel
         */
        levelUp: () => {
            const s = config.sounds.levelUp;
            playArpeggio(s.notes, 0.2);
            // Acorde final más largo
            setTimeout(() => playChord(s.notes, 0.8), 600);
        },
        
        /**
         * Sonido de logro desbloqueado
         */
        achievement: () => {
            const s = config.sounds.achievement;
            playChord(s.notes, 0.4);
            setTimeout(() => playArpeggio([...s.notes, s.notes[0] * 2], 0.15), 500);
        },
        
        /**
         * Sonido de racha/streak
         */
        streak: () => {
            const s = config.sounds.streak;
            playAscending(s.start, s.steps, 0.08);
        },
        
        /**
         * Sonido de click/botón
         */
        click: () => {
            const s = config.sounds.click;
            playTone(s.frequency, s.type, s.duration);
        },
        
        /**
         * Sonido de completar sesión
         */
        complete: () => {
            const s = config.sounds.complete;
            playMelody(s.notes, 0.2);
            setTimeout(() => playChord([s.notes[2], s.notes[2] * 1.25, s.notes[2] * 1.5], 0.6), 700);
        },
        
        /**
         * Sonido del timer Pomodoro
         */
        timer: () => {
            const s = config.sounds.timer;
            playTone(s.frequency, s.type, s.duration);
        },
        
        /**
         * Sonido de notificación
         */
        notification: () => {
            const s = config.sounds.notification;
            playTone(s.frequency, s.type, s.duration);
            setTimeout(() => playTone(s.frequency * 1.25, s.type, s.duration * 0.8), 100);
        },
        
        /**
         * Sonido de celebración especial
         */
        celebration: () => {
            // Secuencia más elaborada para celebraciones importantes
            const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1046.50, 783.99];
            playArpeggio(notes, 0.12);
            setTimeout(() => playChord([523.25, 659.25, 783.99, 1046.50], 1), 900);
        }
    };
    
    // ============================================
    // CONTROLES
    // ============================================
    
    /**
     * Habilita/deshabilita sonidos
     */
    function toggle() {
        config.enabled = !config.enabled;
        savePreferences();
        return config.enabled;
    }
    
    /**
     * Establece el volumen
     */
    function setVolume(value) {
        config.volume = Math.max(0, Math.min(1, value));
        if (masterGain) {
            masterGain.gain.value = config.volume;
        }
        savePreferences();
    }
    
    /**
     * Obtiene el estado actual
     */
    function getStatus() {
        return {
            enabled: config.enabled,
            volume: config.volume
        };
    }
    
    // ============================================
    // PERSISTENCIA
    // ============================================
    
    function savePreferences() {
        try {
            localStorage.setItem('simopro_audio_prefs', JSON.stringify({
                enabled: config.enabled,
                volume: config.volume
            }));
        } catch (e) {
            console.warn('No se pudieron guardar preferencias de audio');
        }
    }
    
    function loadPreferences() {
        try {
            const saved = localStorage.getItem('simopro_audio_prefs');
            if (saved) {
                const prefs = JSON.parse(saved);
                config.enabled = prefs.enabled !== undefined ? prefs.enabled : true;
                config.volume = prefs.volume !== undefined ? prefs.volume : 0.3;
            }
        } catch (e) {
            console.warn('No se pudieron cargar preferencias de audio');
        }
    }
    
    // ============================================
    // RESUMIR CONTEXTO (para cuando el usuario interactúa)
    // ============================================
    
    function resume() {
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume();
        }
    }
    
    // ============================================
    // API PÚBLICA
    // ============================================
    
    return {
        init,
        play: sounds,
        toggle,
        setVolume,
        getStatus,
        resume,
        // Acceso directo a sonidos individuales
        success: sounds.success,
        error: sounds.error,
        flip: sounds.flip,
        levelUp: sounds.levelUp,
        achievement: sounds.achievement,
        streak: sounds.streak,
        click: sounds.click,
        complete: sounds.complete,
        timer: sounds.timer,
        notification: sounds.notification,
        celebration: sounds.celebration
    };
})();

// Inicializar al cargar el documento
document.addEventListener('DOMContentLoaded', () => {
    AudioManager.init();
});

// Resumir contexto de audio en la primera interacción del usuario
document.addEventListener('click', () => {
    AudioManager.resume();
}, { once: true });

document.addEventListener('touchstart', () => {
    AudioManager.resume();
}, { once: true });

// Exportar para uso global
window.AudioManager = AudioManager;
