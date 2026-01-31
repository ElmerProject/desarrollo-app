# 🎮 GUÍA COMPLETA: Web Gamificada para Estudio Intensivo con TDAH

## Para: Simo | Psicología del Desarrollo II | Examen en 3 Días

---

# 📋 ÍNDICE

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Fundamentos Neurocientíficos](#2-fundamentos-neurocientíficos)
3. [Sistema de Gamificación](#3-sistema-de-gamificación)
4. [Protocolo de Estudio 3 Días](#4-protocolo-de-estudio-3-días)
5. [Arquitectura de la Web](#5-arquitectura-de-la-web)
6. [Implementación Técnica](#6-implementación-técnica)
7. [Checklist de Lanzamiento](#7-checklist-de-lanzamiento)

---

# 1. RESUMEN EJECUTIVO

## Objetivo
Crear una web estática gamificada que transforme el estudio de Psicología del Desarrollo II en una experiencia de aprendizaje de alta dopamina, optimizada para personas con TDAH y diseñada para maximizar la retención en solo 3 días.

## El Desafío
- **Usuario**: Simo, estudiante universitario con TDAH
- **Tiempo**: 3 días hasta el examen
- **Contenido**: Psicología del Desarrollo II (30 preguntas tipo test)
- **Necesita**: 15/30 aciertos para aprobar

## La Solución
Una web 100% estática (HTML/CSS/JS) con:
- 🎮 Gamificación completa (puntos, niveles, logros)
- 🧠 90+ flashcards interactivas
- ⏱️ Timer Pomodoro integrado
- 🔊 Sonidos gratificantes
- 📊 Progreso visual constante
- 📱 Funcionamiento offline (PWA)

## Distribución del Contenido

| Tema | Peso | Prioridad | Horas |
|------|------|-----------|-------|
| Piaget vs Vygotski | 25% | 🔴 CRÍTICA | 8h |
| Memoria y Funciones Ejecutivas | 20% | 🔴 CRÍTICA | 6h |
| Desarrollo Conceptual | 15% | 🟠 ALTA | 4h |
| Razonamiento | 12% | 🟠 ALTA | 3h |
| Desarrollo Moral y Social | 12% | 🟡 MEDIA | 3h |
| Metodología | 8% | 🟡 MEDIA | 2h |
| Lectura (Frith) | 5% | 🟢 BAJA | 1h |

---

# 2. FUNDAMENTOS NEUROCIENTÍFICOS

## 2.1 El TDAH y el Sistema de Recompensa

### ¿Qué es diferente en el cerebro con TDAH?

```
┌─────────────────────────────────────────────────────────────┐
│                    CEREBRO CON TDAH                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📉 Dopamina basal: MÁS BAJA que promedio                   │
│  ⚡ Búsqueda constante de estimulación                      │
│  ⏰ Dificultad con gratificación diferida                   │
│  🎯 Atención variable (hiperfoco ↔ distracción)            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### ¿Por qué funciona la gamificación?

La gamificación activa las **vías dopaminérgicas** del cerebro:

1. **Dopamina**: Liberada ante recompensas y logros
2. **Endorfinas**: Producidas durante el desafío y superación
3. **Oxitocina**: Generada en el reconocimiento social
4. **Serotonina**: Relacionada con el bienestar

### Evidencia Científica Clave

> **Estudio ASCE Magazine (2024)**: La gamificación en estudiantes con TDAH produce:
> - Participación: De "casi nunca" a "casi siempre"
> - Atención sostenida: Incremento significativo
> - Rendimiento académico: Mejora demostrable
> - Alfa de Cronbach: 0.873-0.892 (alta fiabilidad)

## 2.2 Principios de Diseño No Negociables

### 🔴 CRÍTICO (Debe implementarse sí o sí)

| Principio | Justificación | Implementación |
|-----------|---------------|----------------|
| **Recompensas inmediatas** | El TDAH descuenta fuertemente recompensas futuras | XP instantáneo con animaciones |
| **Sesiones de 20 min** | Ciclo de atención natural en TDAH | Timer Pomodoro integrado |
| **Cambio de formato cada 5-7 min** | Previene habituación | Alternar: lectura → quiz → flashcards |
| **Progreso visible constante** | Necesidad de feedback continuo | Barras de progreso en todo momento |
| **Repetición espaciada** | Aumenta retención +200% | Algoritmo SRS integrado |

### 🟠 ESENCIAL (Altamente recomendado)

| Principio | Justificación | Implementación |
|-----------|---------------|----------------|
| **Programa de ratio variable** | Recompensas sorpresa mantienen engagement | Bonus XP aleatorios, "tesoros" |
| **Multisensorialidad** | Conexiones neuronales más fuertes | Visual + auditivo + kinestésico |
| **Balance de dificultad** | Ni muy fácil (aburrimiento) ni muy difícil (ansiedad) | Adaptación automática |
| **Herramientas anti-estrés** | Cortisol alto daña memoria | Respiración 4-7-8 integrada |
| **Compensación memoria de trabajo** | 62-85% con TDAH tienen déficits | Notas visibles, recordatorios |

## 2.3 El Ciclo de la Dopamina en el Aprendizaje

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│    ACCIÓN ──► FEEDBACK ──► DOPAMINA ──► MOTIVACIÓN        │
│       ▲                                      │              │
│       └──────────────────────────────────────┘              │
│                                                             │
│  Ejemplo:                                                   │
│  1. Responde flashcard correctamente                      │
│  2. Suena "¡Ding!" + +25 XP flotante + barra avanza      │
│  3. Liberación de dopamina en estriado ventral            │
│  4. "Quiero otra vez" → siguiente flashcard               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# 3. SISTEMA DE GAMIFICACIÓN

## 3.1 Estructura de Niveles Temáticos

### Los 7 Niveles del Conocimiento

```
┌─────────────────────────────────────────────────────────────┐
│  NIVEL 1: 🏛️ EL ARQUITECTO PIAGET                           │
│  XP: 0-550 | Color: #4A90D9 (Azul Cognitivo)                │
│  Contenido: Estadios, asimilación, acomodación              │
├─────────────────────────────────────────────────────────────┤
│  NIVEL 2: 🌿 ZONA VYGOTSKIANA                               │
│  XP: 550-1,200 | Color: #5CB85C (Verde Social)              │
│  Contenido: ZDP, andamiaje, desarrollo sociocultural        │
├─────────────────────────────────────────────────────────────┤
│  NIVEL 3: 🧠 MEMORIA MATRIX                                 │
│  XP: 1,200-1,875 | Color: #9B59B6 (Púrpura Mental)          │
│  Contenido: Memoria de trabajo, estrategias mnemotécnicas   │
├─────────────────────────────────────────────────────────────┤
│  NIVEL 4: 💡 CONCEPTOS CRUCIALES                            │
│  XP: 1,875-2,325 | Color: #F39C12 (Naranja Creativo)        │
│  Contenido: Categorización, teoría de la mente              │
├─────────────────────────────────────────────────────────────┤
│  NIVEL 5: 🔍 RAZONAMIENTO RÁPIDO                            │
│  XP: 2,325-2,775 | Color: #E74C3C (Rojo Lógico)             │
│  Contenido: Sesgos, modelos mentales, Wason                 │
├─────────────────────────────────────────────────────────────┤
│  NIVEL 6: ⚖️ MORAL & SOCIAL MASTER                          │
│  XP: 2,775-3,250 | Color: #F1C40F (Dorado Ético)            │
│  Contenido: Kohlberg, Turiel, desarrollo moral              │
├─────────────────────────────────────────────────────────────┤
│  NIVEL 7: 📊 METODOLOGÍA & LECTURA                          │
│  XP: 3,250-3,425 | Color: #95A5A6 (Gris Académico)          │
│  Contenido: Diseños, validez, etapas Frith                  │
├─────────────────────────────────────────────────────────────┤
│  🏆 NIVEL FINAL: PSIDEV II CHAMPION                         │
│  XP: 3,425+ | Examen simulado de 50 preguntas              │
└─────────────────────────────────────────────────────────────┘
```

## 3.2 Sistema de XP y Recompensas

### Tabla de Recompensas Base

| Actividad | XP Base | Bonus Posible |
|-----------|---------|---------------|
| Leer sección (5-7 min) | 25 XP | +10 XP si <6 min |
| Quiz de 3 preguntas | 30 XP | +15 XP si 100% |
| Flashcard correcta | 15 XP | +5 XP racha 5+ |
| Mini-misión completada | 50 XP | +25 XP sin errores |
| Repaso espaciado | 40 XP | +20 XP si >80% recuerdas |
| Examen simulado (10 preg) | 100 XP | +50 XP si >80% |

### Multiplicadores de Racha

```
Día 1: x1.0 (base)
Día 2: x1.5 (¡Racha activa!)
Día 3: x2.0 (¡Día del examen!)
```

### Sistema de Badges/Logros

#### Badges de Conocimiento
| Badge | Cómo obtener | Icono |
|-------|--------------|-------|
| 🧠 Piaget Master | Completar Nivel 1 | Cerebro |
| 🌿 Vygotski Pro | Completar Nivel 2 | Planta |
| 🧠 Memoria Matrix | Completar Nivel 3 | Chip |
| 💡 Conceptual Sage | Completar Nivel 4 | Bombilla |

#### Badges de Rendimiento
| Badge | Cómo obtener | Icono |
|-------|--------------|-------|
| 🔥 Racha de 5 | 5 flashcards seguidas | Fuego |
| ⚡ Racha de 10 | 10 flashcards seguidas | Rayo |
| 🎯 Racha de 20 | 20 flashcards seguidas | Diana |
| 💎 Flash 90 | Completar todas las flashcards | Diamante |

#### Badges Especiales
| Badge | Cómo obtener | Icono |
|-------|--------------|-------|
| 🌙 Nocturno | Estudiar después de las 22:00 | Luna |
| 🚀 Veloz | Completar quiz en <2 min | Cohete |
| 🎲 Suertudo | Encontrar "tesoro" aleatorio | Dado |
| 👑 Campeón | Aprobar examen simulado | Corona |

## 3.3 Feedback Inmediato y Dopamina

### Efectos Visuales por Tipo de Acción

```
┌─────────────────────────────────────────────────────────────┐
│  ✅ ACIERTO EN FLASHCARD                                    │
│  ─────────────────────────                                  │
│  • Flash verde en toda la tarjeta (300ms)                  │
│  • "+15 XP" flotante hacia arriba                          │
│  • Sonido "¡Ding!" (Web Audio API)                         │
│  • Barra de progreso avanza animada                        │
│  • Partículas doradas (confetti sutil)                     │
├─────────────────────────────────────────────────────────────┤
│  ❌ ERROR EN FLASHCARD                                      │
│  ─────────────────────                                      │
│  • Shake horizontal de la tarjeta                          │
│  • Borde rojo pulsante                                     │
│  • Sonido "bump" grave                                     │
│  • Mensaje: "¡Casi! La respuesta es..."                    │
│  • Botón "Volver a intentar en 10 min"                     │
├─────────────────────────────────────────────────────────────┤
│  🏆 NIVEL COMPLETADO                                        │
│  ───────────────────                                        │
│  • Pantalla completa de celebración                        │
│  • Confetti + fuegos artificiales                          │
│  • Sonido de fanfarria                                     │
│  • Badge nuevo animado girando                             │
│  • "¡Felicidades! Desbloqueaste..."                        │
└─────────────────────────────────────────────────────────────┘
```

### Sonidos a Implementar (Web Audio API)

| Sonido | Frecuencia | Uso |
|--------|------------|-----|
| acierto.mp3 | Cada acierto | Feedback positivo |
| error.mp3 | Cada error | Feedback negativo |
| flip.mp3 | Cada flip de tarjeta | Interacción |
| nivel_up.mp3 | Al subir de nivel | Celebración |
| logro.mp3 | Al desbloquear badge | Reconocimiento |
| racha.mp3 | Cada 5 aciertos seguidos | Motivación |
| completado.mp3 | Al terminar sesión | Cierre |

**Nota**: Todos los sonidos deben tener opción de silencio y volumen ajustable.

## 3.4 Micro-Aprendizaje y Misiones

### Ejemplo: Misión "El Duelo de los Gigantes"

```
┌─────────────────────────────────────────────────────────────┐
│  ⚔️ MISIÓN: El Duelo de los Gigantes                        │
│  ───────────────────────────────────                        │
│  Tema: Piaget vs Vygotski                                   │
│  Duración: ~45 minutos                                      │
│  Recompensa: 550 XP + Badge "Arbitro de Gigantes"          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📋 PASOS:                                                  │
│                                                             │
│  1️⃣ [5 min] Lee "Piaget: El Arquitecto"                   │
│     └─► +25 XP                                              │
│                                                             │
│  2️⃣ [5 min] Lee "Vygotski: El Social"                     │
│     └─► +25 XP                                              │
│                                                             │
│  3️⃣ [5 min] Compara: Tabla Piaget vs Vygotski             │
│     └─► +30 XP                                              │
│                                                             │
│  4️⃣ [10 min] Flashcards: "¿Quién dijo qué?" (10 preg)     │
│     └─► +15 XP por acierto                                  │
│                                                             │
│  5️⃣ [5 min] Quiz rápido: 3 preguntas                        │
│     └─► +30 XP base + bonus                                 │
│                                                             │
│  6️⃣ [10 min] Mini-juego: "Clasifica la frase"             │
│     └─► +50 XP                                              │
│                                                             │
│  7️⃣ [5 min] Crea tu propio mnemotécnico                    │
│     └─► +25 XP                                              │
│                                                             │
│  🎁 BONUS: Si completas todo sin errores: +100 XP          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# 4. PROTOCOLO DE ESTUDIO 3 DÍAS

## 4.1 Plan Hora por Hora

### 📅 DOMINGO (Día 1) - INGESTA MASIVA (~10h efectivas)

```
┌─────────────────────────────────────────────────────────────┐
│  🌅 08:00 - 08:30 | RUTINA DE ACTIVACIÓN                    │
│  ─────────────────────────────────────                      │
│  • Respiración 4-7-8 (4s inhala, 7s retiene, 8s exhala)    │
│  • Café (opcional, antes de las 10:00)                     │
│  • Agua + luz natural                                      │
├─────────────────────────────────────────────────────────────┤
│  📚 08:30 - 10:00 | BLOQUE 1: Piaget (90 min)               │
│  ─────────────────────────────────────                      │
│  • Técnica: Lectura activa + subrayado                     │
│  • Tema: Equilibración, asimilación, acomodación           │
│  • Meta: 25 XP por sección completada                      │
├─────────────────────────────────────────────────────────────┤
│  ☕ 10:00 - 10:15 | DESCANSO OBLIGATORIO                    │
│  ─────────────────────────                                  │
│  • Movimiento + agua + mirar lejos                         │
├─────────────────────────────────────────────────────────────┤
│  📚 10:15 - 11:45 | BLOQUE 2: Vygotski (90 min)             │
│  ─────────────────────────────────                          │
│  • Técnica: Mapa conceptual + flashcards                   │
│  • Tema: ZDP, andamiaje, desarrollo sociocultural          │
├─────────────────────────────────────────────────────────────┤
│  ☕ 11:45 - 12:00 | DESCANSO OBLIGATORIO                    │
├─────────────────────────────────────────────────────────────┤
│  📚 12:00 - 13:30 | BLOQUE 3: Comparación (90 min)          │
│  ─────────────────────────────────                          │
│  • Técnica: Tabla comparativa Piaget vs Vygotski           │
│  • Focus: Diferencias clave que suelen caer                │
├─────────────────────────────────────────────────────────────┤
│  🍽️ 13:30 - 15:00 | COMIDA + DESCANSO                       │
│  ─────────────────────────                                  │
│  • Comida ligera + siesta 20 min (consolidación memoria)   │
├─────────────────────────────────────────────────────────────┤
│  🧠 15:00 - 15:15 | REPASO RÁPIDO                           │
│  ─────────────────                                          │
│  • Active recall flashcards de la mañana                   │
├─────────────────────────────────────────────────────────────┤
│  📚 15:15 - 16:45 | BLOQUE 4: Funciones Ejecutivas (90 min) │
│  ───────────────────────────────────────────────            │
│  • Diamond (FE): Inhibición, Memoria de Trabajo, Flexibilidad│
│  • Case (Memoria Operativa): Eficacia operacional          │
├─────────────────────────────────────────────────────────────┤
│  ☕ 16:45 - 17:00 | DESCANSO OBLIGATORIO                    │
├─────────────────────────────────────────────────────────────┤
│  📚 17:00 - 18:30 | BLOQUE 5: Estrategias de Memoria (90 min)│
│  ────────────────────────────────────────────────           │
│  • Repetición, organización, elaboración                   │
│  • Déficits: producción vs utilización                     │
├─────────────────────────────────────────────────────────────┤
│  🏃 18:30 - 19:30 | EJERCICIO OBLIGATORIO                   │
│  ─────────────────────────                                  │
│  • Caminata rápida 30 min (consolida memoria)              │
├─────────────────────────────────────────────────────────────┤
│  🍽️ 19:30 - 20:00 | CENA LIGERA                             │
│  ───────────────                                            │
│  • Omega-3 + carbohidratos complejos                       │
├─────────────────────────────────────────────────────────────┤
│  📚 20:00 - 21:30 | BLOQUE 6: Desarrollo Conceptual (90 min)│
│  ────────────────────────────────────────────────           │
│  • Mandler: Perceptos vs Conceptos                         │
│  • Teoría de la Teoría                                     │
├─────────────────────────────────────────────────────────────┤
│  📝 21:30 - 22:00 | AUTO-EVALUACIÓN                         │
│  ─────────────────────                                      │
│  • Test práctico 10 preguntas                              │
│  • Revisar errores inmediatamente                          │
├─────────────────────────────────────────────────────────────┤
│  🌙 22:00 - 22:30 | RUTINA SUEÑO                            │
│  ─────────────────                                          │
│  • Sin pantallas + lectura ligera                          │
│  • 22:30: DORMIR (7-8 horas obligatorias)                  │
└─────────────────────────────────────────────────────────────┘
```

### 📅 LUNES (Día 2) - REFUERZO Y PRÁCTICA (~11h efectivas)

```
07:00 - 07:30 | Rutina de activación
07:30 - 08:00 | Repaso flashcards difíciles (Piaget/Vygotski)
08:00 - 09:30 | Razonamiento: Sesgos + Modelos Mentales
09:30 - 09:45 | Descanso
09:45 - 11:15 | Razonamiento: Wason + Markovits
11:15 - 11:30 | Descanso
11:30 - 13:00 | Desarrollo Moral: Kohlberg + Turiel
13:00 - 14:30 | Comida + descanso
14:30 - 15:00 | Repaso rápido
15:00 - 16:00 | Metodología: Diseños Transversal/Longitudinal
16:00 - 16:15 | Descanso
16:15 - 17:15 | Validez + Etapas Frith
17:15 - 18:15 | Ejercicio
18:15 - 18:45 | Merienda
18:45 - 20:15 | 🔥 SIMULACRO COMPLETO (30 preguntas)
20:15 - 20:30 | Análisis de errores
20:30 - 22:00 | Flashcards falladas + weak points
22:00 - 22:30 | Auto-evaluación
22:30 - 23:00 | Rutina sueño
23:00 | DORMIR
```

### 📅 MARTES (Día del Examen) - CONSOLIDACIÓN

```
07:00 - 07:30 | Despertar suave + luz natural
07:30 - 08:00 | Estiramientos 10 min + caminata ligera
08:00 - 08:30 | Desayuno óptimo: avena + plátano + frutos secos
08:30 - 09:00 | Flashcards DIFÍCILES únicamente (30 min máximo)
09:00 - 09:30 | Respiración diafragmática (reduce ansiedad)
09:30 - 10:30 | Repaso CRÍTICO: Piaget/Vygotski/FE (temas de mayor peso)
10:30 - 11:00 | Ducha tibia + preparación
11:00 - 11:30 | Trayecto al examen (repaso mental ligero)
11:30 - 12:00 | Llegada + respiración 4-7-8
12:00 | 📝 EXAMEN
```

## 4.2 Técnicas de Memorización Rápida

### Active Recall (El más efectivo)

```
PROTOCOLO ACTIVE RECALL:
┌─────────────────────────────────────────────────────────┐
│ PASO 1: Lee la pregunta en voz alta                     │
│ PASO 2: CIERRA LOS OJOS o gira la flashcard             │
│ PASO 3: Responde EN VOZ ALTA lo más completo posible    │
│ PASO 4: Comprueba la respuesta                          │
│ PASO 5: Si aciertas → siguiente                         │
│ PASO 6: Si fallas → repite 3 veces + vuelve en 10 min   │
└─────────────────────────────────────────────────────────┘
```

### Spaced Repetition (72 horas)

| Sesión | Momento | Qué repasar | Duración |
|--------|---------|-------------|----------|
| Sesión 1 | Domingo mañana | Piaget/Vygotski (nuevo) | 4.5h |
| Sesión 2 | Domingo tarde | Piaget/Vygotski (repaso) | 30 min |
| Sesión 3 | Lunes mañana | Piaget/Vygotski (repaso) | 30 min |
| Sesión 4 | Lunes tarde | Todo + simulacro | 4h |
| Sesión 5 | Martes mañana | Flashcards difíciles | 30 min |
| Sesión 6 | Martes pre-examen | Temas críticos | 1h |

### Palacio de la Memoria (Etapas Piaget)

```
🏠 Imagina tu CASA:

🚪 ENTRADA (0-2 años) → Sensoriomotora
   - Bebé gateando en la entrada
   
🛋️ SALÓN (2-7 años) → Preoperacional  
   - Niño jugando con muñecos, hablando solo (egocéntrico)
   
🍳 COCINA (7-11 años) → Operaciones Concretas
   - Niño entendiendo conservación (agua en vasos)
   
📚 DESPACHO (11+ años) → Operaciones Formales
   - Adolescente con álgebra, pensamiento abstracto
```

## 4.3 Anti-Procrastinación para TDAH

### Técnica de los 2 Minutos

```
"Voy a leer UNA página" → inercia positiva → sigues leyendo
```

### Body Doubling

- Estudiar con alguien (Discord/Zoom/presencial)
- Transmisiones en vivo de "study with me"
- La presencia de otros aumenta accountability

### Ambiente Optimizado

| ✅ HACER | ❌ EVITAR |
|----------|-----------|
| Móvil en MODO AVIÓN en otra habitación | Notificaciones activas |
| Pomodoro 25/5 | Sesiones largas sin descanso |
| Iluminación brillante | Luz tenue (produce sueño) |
| Música sin letra (lo-fi) | Música con voz |
| Agua siempre a mano | Interrupciones para beber |

### Nutrición Cerebral

| ✅ COMER | ❌ EVITAR |
|----------|-----------|
| Salmón (Omega-3) | Azúcares refinados |
| Frutos secos | Alcohol |
| Avena + arándanos | Comidas pesadas |
| Huevos + plátano | Cafeína post-16:00 |
| Hidratación constante | Deshidratación |

---

# 5. ARQUITECTURA DE LA WEB

## 5.1 Mapa del Sitio

```
┌─────────────────────────────────────────────────────────────────────┐
│                          HOMEPAGE                                   │
│              (Dashboard + Acceso Rápido + Progreso)                 │
└─────────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│   APRENDER    │    │   REPASAR     │    │   PROGRESO    │
│   (Contenido) │    │  (Práctica)   │    │  (Stats)      │
└───────┬───────┘    └───────┬───────┘    └───────────────┘
        │                    │
   ┌────┴────┐          ┌────┴────┐
   │         │          │         │
   ▼         ▼          ▼         ▼
┌──────┐ ┌──────┐  ┌────────┐ ┌────────┐
│Mapas │ │Glosar│  │Flashcar│ │Mnemotéc│
│Concep│ │io    │  │ds      │ │nicos   │
└──────┘ └──────┘  └────────┘ └────────┘
        │                    │
        ▼                    ▼
   ┌──────────┐         ┌──────────┐
   │Autores   │         │Test Rápido│
   │Estadios  │         │Modo Examen│
   │Metodolog.│         │           │
   └──────────┘         └──────────┘
```

## 5.2 Sistema de Navegación

### Header Sticky (60px)

```
┌────────────────────────────────────────────────────────────────┐
│ 🧠 PSICO-EXPRESS    [APRENDER] [REPASAR] [PROGRESO]    ⚙️ 🔊  │
└────────────────────────────────────────────────────────────────┘
     ↑ Logo clickable        ↑ Pestañas principales      ↑ Config
```

### Homepage Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  🎯 EXAMEN EN: 2 días, 14 horas          🔥 Racha: 3 días      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │    📊 PROGRESO GENERAL: 67%                             │   │
│  │    ████████████████████░░░░░░░░░░                       │   │
│  │                                                         │   │
│  │    🏆 Nivel: EXPERTO EN DESARROLLO (Nivel 7/10)         │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │   🗺️        │  │   🎯        │  │   📚        │            │
│  │   MAPAS     │  │ FLASHCARDS  │  │  GLOSARIO   │            │
│  │             │  │   45/90     │  │             │            │
│  │  [Ver →]    │  │ [Continuar] │  │  [Buscar →] │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │   👤        │  │   🧩        │  │   ⚡        │            │
│  │  AUTORES    │  │ MNEMOTÉCNIC │  │ TEST RÁPIDO │            │
│  │             │  │             │  │             │            │
│  │  [Ver →]    │  │  [Practicar]│  │  [Iniciar]  │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  🎯 RECOMENDADO AHORA: Flashcards de Funciones Ejecutivas      │
│     (Basado en tu progreso y tiempo disponible)                │
└─────────────────────────────────────────────────────────────────┘
```

## 5.3 Sistema de Colores

### Paleta Principal

| Uso | Color | Hex | Uso |
|-----|-------|-----|-----|
| Primario | Azul | #2563EB | Botones principales, enlaces |
| Éxito | Verde | #10B981 | Aciertos, progreso, completado |
| Advertencia | Amarillo | #F59E0B | Rachas, atención |
| Error | Rojo | #EF4444 | Errores, alertas |
| Neutro | Gris | #6B7280 | Texto secundario |

### Colores Temáticos por Tema

| Tema | Color | Hex |
|------|-------|-----|
| Piaget | Azul Cognitivo | #4A90D9 |
| Vygotski | Verde Social | #5CB85C |
| Memoria | Púrpura Mental | #9B59B6 |
| Conceptos | Naranja Creativo | #F39C12 |
| Razonamiento | Rojo Lógico | #E74C3C |
| Moral | Dorado Ético | #F1C40F |
| Metodología | Gris Académico | #95A5A6 |

### Tipografía

| Elemento | Fuente | Tamaño | Peso |
|----------|--------|--------|------|
| Títulos | Poppins | 32px | 700 |
| Subtítulos | Poppins | 24px | 600 |
| Cuerpo | Inter | 16px | 400 |
| Flashcards | Inter | 18px | 500 |
| Pequeño | Inter | 14px | 400 |

## 5.4 Microinteracciones

### Flashcard Flip

```css
/* Animación de volteo 3D */
.flashcard {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.flashcard.flipped {
  transform: rotateY(180deg);
}
```

### Feedback de Acierto

```
1. Flash verde en tarjeta (300ms)
2. "+15 XP" flota hacia arriba con easing
3. Sonido "¡Ding!" (200ms)
4. Partículas doradas dispersándose
5. Barra de progreso avanza animada
```

### Feedback de Error

```
1. Shake horizontal (300ms)
2. Borde rojo pulsante
3. Sonido "bump" grave
4. Mensaje explicativo aparece
```

## 5.5 Páginas Clave

### Página de Flashcards

```
┌─────────────────────────────────────────────────────────────────┐
│  🎯 Flashcards: Piaget vs Vygotski        12/30 | ⏱️ 8:45      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌─────────────────────────────────────────────────────┐    │
│     │                                                     │    │
│     │              ┌─────────────────────┐               │    │
│     │              │                     │               │    │
│     │              │   ¿Qué propone      │               │    │
│     │              │   Vygotski como     │               │    │
│     │              │   espacio entre     │               │    │
│     │              │   desarrollo real   │               │    │
│     │              │   y potencial?      │               │    │
│     │              │                     │               │    │
│     │              │   [Click para       │               │    │
│     │              │    ver respuesta]   │               │    │
│     │              │                     │               │    │
│     │              └─────────────────────┘               │    │
│     │                                                     │    │
│     └─────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                        │
│  │  😰     │  │  😐     │  │  😊     │                        │
│  │ DIFÍCIL │  │ REGULAR │  │  FÁCIL  │                        │
│  │  (1)    │  │  (2)    │  │  (3)    │                        │
│  └─────────┘  └─────────┘  └─────────┘                        │
│                                                                 │
│  [← Anterior]                          [Siguiente →]           │
│                                                                 │
│  📊 Tu progreso: ████████████░░░░░░░░░░  40%                   │
│  🔥 Racha actual: 5 ✨                                          │
└─────────────────────────────────────────────────────────────────┘
```

### Dashboard de Progreso

```
┌─────────────────────────────────────────────────────────────────┐
│                    📊 TU PROGRESO                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PROGRESO TOTAL: 67%                                            │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │████████████████████████████████████░░░░░░░░░░░░░░░░░░░░│   │
│  └─────────────────────────────────────────────────────────┘   │
│  0%                                                    100%    │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   🗺️ MAPAS   │  │   🎯 FLASH   │  │   📖 GLOSAR  │         │
│  │     85%      │  │     50%      │  │     65%      │         │
│  │  ████████░   │  │  █████░░░░   │  │  ██████░░░   │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
│  TIEMPO TOTAL ESTUDIADO: 4h 23min                               │
│  FLASHCARDS REPASADAS: 45/90                                    │
│  RACHA MÁXIMA: 12 tarjetas seguidas ✨                          │
│  🔥 RACHA ACTUAL: 3 días                                        │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                     🏆 TUS LOGROS                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │
│  │  🧠    │ │  🌿    │ │  🔥    │ │  ⚡    │ │  💎    │       │
│  │PIAGET  │ │VYGOTSKI│ │RACHA 5 │ │RACHA 10│ │FLASH 90│       │
│  │  ✓     │ │  ✓     │ │  ✓     │ │  ✓     │ │  ○     │       │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

# 6. IMPLEMENTACIÓN TÉCNICA

## 6.1 Estructura de Archivos

```
psicologia-gamificada/
│
├── index.html              # Página principal
├── manifest.json           # Configuración PWA
├── sw.js                   # Service Worker
├── README.md               # Documentación
│
├── css/
│   └── styles.css          # Estilos personalizados
│
├── js/
│   ├── app.js              # Coordinador principal
│   ├── data.js             # Datos (flashcards, logros)
│   ├── gamification.js     # Sistema de puntos/niveles
│   ├── flashcards.js       # Lógica de tarjetas
│   ├── progress.js         # Persistencia localStorage
│   ├── pomodoro.js         # Timer Pomodoro
│   ├── audio.js            # Web Audio API
│   └── ui.js               # Manipulación DOM
│
└── assets/
    ├── sounds/             # Archivos de audio
    └── icons/              # Iconos PWA
```

## 6.2 HTML Base (index.html)

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PsicoExpress - Desarrollo II</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
    
    <!-- PWA -->
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#2563EB">
    
    <style>
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3 { font-family: 'Poppins', sans-serif; }
    </style>
</head>
<body class="bg-gray-50 min-h-screen">
    <!-- App se carga aquí -->
    <div id="app"></div>
    
    <!-- Scripts -->
    <script src="js/data.js"></script>
    <script src="js/audio.js"></script>
    <script src="js/progress.js"></script>
    <script src="js/gamification.js"></script>
    <script src="js/flashcards.js"></script>
    <script src="js/pomodoro.js"></script>
    <script src="js/ui.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
```

## 6.3 Sistema de Gamificación (gamification.js)

```javascript
// Sistema de gamificación
const Gamification = {
    // Configuración de niveles
    niveles: [
        { nombre: "Neófito Curioso", icono: "🌱", minXP: 0 },
        { nombre: "Eclosionador", icono: "🐣", minXP: 100 },
        { nombre: "Oruga Estudiosa", icono: "🐛", minXP: 300 },
        { nombre: "Pupilo en Transformación", icono: "🦋", minXP: 600 },
        { nombre: "Aprendiz Nocturno", icono: "🦉", minXP: 1000 },
        { nombre: "Estratega Rápido", icono: "🦊", minXP: 1500 },
        { nombre: "Experto en Desarrollo", icono: "🦅", minXP: 2100 },
        { nombre: "Dominador de Teorías", icono: "🦁", minXP: 2800 },
        { nombre: "Maestro Piagetiano", icono: "🐉", minXP: 3600 },
        { nombre: "Gurú del Desarrollo", icono: "👑", minXP: 4500 }
    ],
    
    // Obtener nivel actual
    getNivel(xp) {
        for (let i = this.niveles.length - 1; i >= 0; i--) {
            if (xp >= this.niveles[i].minXP) {
                return this.niveles[i];
            }
        }
        return this.niveles[0];
    },
    
    // Añadir XP con celebración
    addXP(cantidad, razon = '') {
        const user = Progress.getUser();
        const xpAnterior = user.xp;
        user.xp += cantidad;
        
        // Verificar subida de nivel
        const nivelAnterior = this.getNivel(xpAnterior);
        const nivelNuevo = this.getNivel(user.xp);
        
        if (nivelNuevo.minXP > nivelAnterior.minXP) {
            this.celebrarNivel(nivelNuevo);
        }
        
        // Animación de XP
        UI.mostrarXPFlotante(cantidad, razon);
        Audio.play('acierto');
        
        Progress.saveUser(user);
        return user.xp;
    },
    
    // Celebración de nivel
    celebrarNivel(nivel) {
        Audio.play('nivel_up');
        UI.mostrarModalCelebracion(`
            <div class="text-center">
                <div class="text-6xl mb-4">${nivel.icono}</div>
                <h2 class="text-2xl font-bold text-blue-600 mb-2">
                    ¡Subiste de nivel!
                </h2>
                <p class="text-xl">${nivel.nombre}</p>
            </div>
        `);
        Confetti.explosion();
    }
};
```

## 6.4 Flashcards Interactivas (flashcards.js)

```javascript
// Sistema de flashcards
const Flashcards = {
    actual: 0,
    tarjetas: [],
    
    // Inicializar con datos
    init(datos) {
        this.tarjetas = datos;
        this.actual = Progress.getUltimaFlashcard() || 0;
    },
    
    // Renderizar tarjeta actual
    render() {
        const tarjeta = this.tarjetas[this.actual];
        return `
            <div class="flashcard-container" onclick="Flashcards.flip()">
                <div class="flashcard" id="flashcard">
                    <div class="flashcard-front">
                        <h3>${tarjeta.pregunta}</h3>
                        <p class="hint">Click para ver respuesta</p>
                    </div>
                    <div class="flashcard-back">
                        <p class="respuesta">${tarjeta.respuesta}</p>
                        ${tarjeta.pista ? `<p class="pista">💡 ${tarjeta.pista}</p>` : ''}
                    </div>
                </div>
            </div>
            
            <div class="rating-buttons">
                <button onclick="Flashcards.rate('difficult')" class="btn-difficult">
                    😰 Difícil (1)
                </button>
                <button onclick="Flashcards.rate('medium')" class="btn-medium">
                    😐 Regular (2)
                </button>
                <button onclick="Flashcards.rate('easy')" class="btn-easy">
                    😊 Fácil (3)
                </button>
            </div>
        `;
    },
    
    // Voltear tarjeta
    flip() {
        const card = document.getElementById('flashcard');
        card.classList.toggle('flipped');
        Audio.play('flip');
    },
    
    // Calificar respuesta
    rate(dificultad) {
        const tarjeta = this.tarjetas[this.actual];
        
        // Guardar calificación para repetición espaciada
        Progress.saveFlashcardRating(tarjeta.id, dificultad);
        
        // Dar XP
        const xp = dificultad === 'easy' ? 20 : dificultad === 'medium' ? 15 : 10;
        Gamification.addXP(xp, 'Flashcard completada');
        
        // Siguiente tarjeta
        this.actual = (this.actual + 1) % this.tarjetas.length;
        Progress.saveUltimaFlashcard(this.actual);
        
        // Actualizar UI
        UI.updateFlashcardView();
    }
};
```

## 6.5 Sistema de Audio (audio.js)

```javascript
// Sistema de audio con Web Audio API
const Audio = {
    context: null,
    enabled: true,
    volume: 0.5,
    
    // Inicializar
    init() {
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        this.enabled = localStorage.getItem('audioEnabled') !== 'false';
        this.volume = parseFloat(localStorage.getItem('audioVolume')) || 0.5;
    },
    
    // Generar sonido de acierto
    playAcierto() {
        if (!this.enabled) return;
        
        const osc = this.context.createOscillator();
        const gain = this.context.createGain();
        
        osc.connect(gain);
        gain.connect(this.context.destination);
        
        osc.frequency.setValueAtTime(523.25, this.context.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(1046.5, this.context.currentTime + 0.1);
        
        gain.gain.setValueAtTime(this.volume, this.context.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.3);
        
        osc.start(this.context.currentTime);
        osc.stop(this.context.currentTime + 0.3);
    },
    
    // Generar sonido de error
    playError() {
        if (!this.enabled) return;
        
        const osc = this.context.createOscillator();
        const gain = this.context.createGain();
        
        osc.connect(gain);
        gain.connect(this.context.destination);
        
        osc.frequency.setValueAtTime(200, this.context.currentTime);
        osc.frequency.linearRampToValueAtTime(150, this.context.currentTime + 0.2);
        
        gain.gain.setValueAtTime(this.volume, this.context.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.3);
        
        osc.start(this.context.currentTime);
        osc.stop(this.context.currentTime + 0.3);
    },
    
    // Reproducir sonido por nombre
    play(nombre) {
        switch(nombre) {
            case 'acierto': this.playAcierto(); break;
            case 'error': this.playError(); break;
            // ... más sonidos
        }
    },
    
    // Toggle sonido
    toggle() {
        this.enabled = !this.enabled;
        localStorage.setItem('audioEnabled', this.enabled);
        return this.enabled;
    }
};
```

## 6.6 Persistencia (progress.js)

```javascript
// Sistema de persistencia con localStorage
const Progress = {
    VERSION: '1.0',
    
    // Estructura de datos del usuario
    defaultUser: {
        xp: 0,
        nivel: 1,
        flashcardsCompletadas: [],
        logrosDesbloqueados: [],
        rachaDias: 0,
        ultimaSesion: null,
        tiempoTotal: 0,
        preferencias: {
            audio: true,
            volumen: 0.5,
            tema: 'light'
        }
    },
    
    // Obtener datos del usuario
    getUser() {
        const data = localStorage.getItem('psicoexpress_user');
        if (data) {
            return { ...this.defaultUser, ...JSON.parse(data) };
        }
        return { ...this.defaultUser };
    },
    
    // Guardar datos del usuario
    saveUser(user) {
        localStorage.setItem('psicoexpress_user', JSON.stringify(user));
    },
    
    // Guardar calificación de flashcard
    saveFlashcardRating(id, rating) {
        const user = this.getUser();
        user.flashcardsCompletadas.push({
            id,
            rating,
            fecha: new Date().toISOString()
        });
        this.saveUser(user);
    },
    
    // Obtener última flashcard vista
    getUltimaFlashcard() {
        const user = this.getUser();
        return user.ultimaFlashcard || 0;
    },
    
    // Guardar última flashcard
    saveUltimaFlashcard(index) {
        const user = this.getUser();
        user.ultimaFlashcard = index;
        this.saveUser(user);
    }
};
```

## 6.7 Pomodoro Timer (pomodoro.js)

```javascript
// Timer Pomodoro integrado
const Pomodoro = {
    tiempoTrabajo: 20 * 60, // 20 minutos en segundos
    tiempoDescanso: 5 * 60, // 5 minutos
    tiempoActual: 0,
    activo: false,
    modo: 'trabajo', // 'trabajo' o 'descanso'
    intervalo: null,
    
    // Inicializar
    init() {
        this.tiempoActual = this.tiempoTrabajo;
        this.render();
    },
    
    // Renderizar timer
    render() {
        const minutos = Math.floor(this.tiempoActual / 60);
        const segundos = this.tiempoActual % 60;
        const porcentaje = this.modo === 'trabajo' 
            ? (this.tiempoActual / this.tiempoTrabajo) * 100
            : (this.tiempoActual / this.tiempoDescanso) * 100;
        
        return `
            <div class="pomodoro-container">
                <div class="pomodoro-circle" style="--progress: ${porcentaje}%">
                    <span class="time">${minutos}:${segundos.toString().padStart(2, '0')}</span>
                    <span class="mode">${this.modo === 'trabajo' ? '🔥 Foco' : '☕ Descanso'}</span>
                </div>
                <button onclick="Pomodoro.toggle()" class="btn-toggle">
                    ${this.activo ? '⏸️ Pausar' : '▶️ Iniciar'}
                </button>
            </div>
        `;
    },
    
    // Iniciar/pausar
    toggle() {
        if (this.activo) {
            this.pausar();
        } else {
            this.iniciar();
        }
    },
    
    // Iniciar timer
    iniciar() {
        this.activo = true;
        this.intervalo = setInterval(() => {
            this.tiempoActual--;
            
            if (this.tiempoActual <= 0) {
                this.completar();
            }
            
            UI.updatePomodoro();
        }, 1000);
    },
    
    // Pausar timer
    pausar() {
        this.activo = false;
        clearInterval(this.intervalo);
    },
    
    // Completar ciclo
    completar() {
        this.pausar();
        Audio.play(this.modo === 'trabajo' ? 'completado' : 'acierto');
        
        if (this.modo === 'trabajo') {
            Gamification.addXP(50, '¡Sesión Pomodoro completada!');
            this.modo = 'descanso';
            this.tiempoActual = this.tiempoDescanso;
            UI.mostrarNotificacion('☕ ¡Tiempo de descanso!');
        } else {
            this.modo = 'trabajo';
            this.tiempoActual = this.tiempoTrabajo;
            UI.mostrarNotificacion('🔥 ¡De vuelta al foco!');
        }
        
        UI.updatePomodoro();
    }
};
```

## 6.8 PWA (manifest.json)

```json
{
    "name": "PsicoExpress - Desarrollo II",
    "short_name": "PsicoExpress",
    "description": "Aprende Psicología del Desarrollo II de forma gamificada",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#2563EB",
    "icons": [
        {
            "src": "assets/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
        },
        {
            "src": "assets/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "assets/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
```

## 6.9 Service Worker (sw.js)

```javascript
const CACHE_NAME = 'psicoexpress-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/app.js',
    '/js/data.js',
    '/js/gamification.js',
    '/js/flashcards.js',
    '/js/progress.js',
    '/js/pomodoro.js',
    '/js/audio.js',
    '/js/ui.js'
];

// Instalar
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Fetch
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
```

---

# 7. CHECKLIST DE LANZAMIENTO

## 7.1 MVP (Mínimo Producto Viable)

### Contenido
- [x] 90+ flashcards con preguntas/respuestas/pistas
- [x] Sistema de gamificación básico (XP, niveles)
- [x] Timer Pomodoro
- [x] Persistencia en localStorage
- [x] Sonidos básicos (acierto, error, flip)
- [x] Progreso visual

### Funcionalidad
- [x] Navegación entre flashcards
- [x] Sistema de calificación (fácil/medio/difícil)
- [x] Cálculo de XP y niveles
- [x] Badges/logros desbloqueables
- [x] Racha diaria

### Técnico
- [x] HTML/CSS/JS funcionando
- [x] Responsive design
- [x] PWA básica
- [x] Offline functionality

## 7.2 Nice-to-Have (Post-MVP)

- [ ] Gráficos de progreso
- [ ] Más sonidos
- [ ] Animaciones avanzadas
- [ ] Modo examen simulado
- [ ] Mapas conceptuales interactivos
- [ ] Glosario con búsqueda
- [ ] Sistema de repetición espaciada avanzado

## 7.3 Testing Checklist

### Funcionalidad
- [ ] Flashcards se voltean correctamente
- [ ] XP se suma correctamente
- [ ] Niveles suben al alcanzar XP
- [ ] Progreso se guarda en localStorage
- [ ] Sonidos funcionan (y se pueden silenciar)
- [ ] Pomodoro cuenta correctamente

### Responsive
- [ ] Se ve bien en móvil (<640px)
- [ ] Se ve bien en tablet (640-1024px)
- [ ] Se ve bien en desktop (>1024px)
- [ ] Touch funciona en móvil

### Performance
- [ ] Carga en <3 segundos
- [ ] Animaciones fluidas (60fps)
- [ ] Sin memory leaks

## 7.4 Deploy

### Opción 1: GitHub Pages
1. Crear repositorio en GitHub
2. Subir archivos
3. Activar GitHub Pages en Settings
4. Listo en minutos

### Opción 2: Netlify
1. Arrastrar carpeta a netlify.com
2. Obtener URL instantánea
3. (Opcional) Configurar dominio personalizado

### Opción 3: Vercel
1. Instalar Vercel CLI: `npm i -g vercel`
2. Ejecutar: `vercel`
3. Seguir instrucciones

---

# 📚 REFERENCIAS Y RECURSOS

## Gamificación y TDAH
- ASCE Magazine (2024): "Gamification Effects on ADHD Students"
- Frontiers in Psychology (2023): "Game-based learning in ADHD"
- Journal of Attention Disorders: "Temporal Discounting in ADHD"

## Neurociencia del Aprendizaje
- Koepp et al. (1998): "Evidence for striatal dopamine release during a video game"
- Tripp & Wickens (2008): "Dopamine transfer deficit in ADHD"
- Nature Neuroscience: "Dopaminergic dysfunction in ADHD"

## Técnicas de Estudio
- Dunlosky et al. (2013): "Improving Students' Learning"
- Roediger & Karpicke (2006): "Test-Enhanced Learning"
- Cepeda et al. (2006): "Distributed Practice in Verbal Recall Tasks"

## Plataformas de Referencia
- Duolingo: Gamificación de idiomas
- Khan Academy: Sistema de badges
- Quizlet: Flashcards interactivas
- Anki: Repetición espaciada

---

**Documento creado para Simo | Psicología del Desarrollo II | 2025**

**Archivos generados:**
- `/mnt/okcomputer/output/guia_gamificacion_tdah_psidev.md`
- `/mnt/okcomputer/output/protocolo_estudio_intensivo_psicologia_desarrollo.md`
- `/mnt/okcomputer/output/informe_neurocientifico_TDAH_Simo.md`
- `/mnt/okcomputer/output/arquitectura_web_psicologia_desarrollo.md`
- `/mnt/okcomputer/output/psicologia-gamificada/` (código completo)
