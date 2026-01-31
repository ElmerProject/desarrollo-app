# 🧠 ARQUITECTURA WEB EDUCATIVA GAMIFICADA
## Psicología del Desarrollo II - Examen Express 3 Días
### Diseñado para Simo (TDAH-friendly)

---

# 1. ESTRUCTURA DE NAVEGACIÓN

## 1.1 Mapa del Sitio Completo

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

## 1.2 Jerarquía de Páginas

### Nivel 0: Homepage (Dashboard Principal)
- **Rol**: Punto de entrada y control central
- **Elementos**: Progreso global, accesos rápidos, streak diario, tiempo restante

### Nivel 1: Secciones Principales (3 pestañas/cards grandes)

#### A. "APRENDER" (Teoría)
1. **Mapas Conceptuales** - Visualizaciones interactivas
2. **Glosario/Diccionario** - Términos con búsqueda
3. **Autores & Hits** - Tarjetas de autores
4. **Estadios del Desarrollo** - Tablas comparativas
5. **Metodología** - Resumen de métodos

#### B. "REPASAR" (Práctica Activa)
1. **Flashcards** - 90+ tarjetas interactivas
2. **Mnemotécnicos** - Acrónimos interactivos
3. **Test Rápido** - Preguntas de 2 min
4. **Modo Examen** - Simulacro cronometrado

#### C. "PROGRESO" (Estadísticas)
1. **Dashboard Personal** - Métricas de aprendizaje
2. **Logros** - Badges desbloqueados
3. **Historial** - Sesiones completadas

### Nivel 2: Contenido Específico
- Subsecciones dentro de cada área temática

## 1.3 Sistema de Navegación

### Menú Principal (Sticky Header)
```
┌────────────────────────────────────────────────────────────────┐
│ 🧠 PSICO-EXPRESS    [APRENDER] [REPASAR] [PROGRESO]    ⚙️ 🔊  │
└────────────────────────────────────────────────────────────────┘
     ↑ Logo clickable        ↑ Pestañas principales      ↑ Config
```

**Especificaciones:**
- **Altura**: 60px
- **Fondo**: Blanco con sombra sutil (`box-shadow: 0 2px 10px rgba(0,0,0,0.08)`)
- **Posición**: Fixed top
- **Z-index**: 1000

### Breadcrumbs (Dentro de cada sección)
```
Inicio > Repasar > Flashcards > Piaget (12/30)
```

### Navegación Contextual
- **Botón "Siguiente"**: Verde brillante, siempre visible
- **Botón "Anterior"**: Gris sutil
- **Atajo de teclado**: Flechas ← → para navegar flashcards

### Homepage - Elementos Clave

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

---

# 2. SISTEMA DE GAMIFICACIÓN VISUAL

## 2.1 Dashboard de Progreso General

### Métricas Principales
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
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 2.2 Sistema de Niveles (Nombres Creativos)

| Nivel | Nombre | Icono | Flashcards Requeridas |
|-------|--------|-------|----------------------|
| 1 | 🌱 Neófito Curioso | Planta brotando | 0-9 |
| 2 | 🐣 Eclosionador | Pollito | 10-19 |
| 3 | 🐛 Oruga Estudiosa | Oruga | 20-29 |
| 4 | 🦋 Pupilo en Transformación | Capullo | 30-39 |
| 5 | 🦉 Aprendiz Nocturno | Búho joven | 40-49 |
| 6 | 🦊 Estratega Rápido | Zorro | 50-59 |
| 7 | 🦅 Experto en Desarrollo | Águila | 60-69 |
| 8 | 🦁 Dominador de Teorías | León | 70-79 |
| 9 | 🐉 Maestro Piagetiano | Dragón | 80-89 |
| 10 | 👑 Gurú del Desarrollo | Corona/Diamante | 90+ |

## 2.3 Badges/Logros Visuales

### Badges por Categoría:

```
┌─────────────────────────────────────────────────────────────────┐
│                    🏆 TUS LOGROS                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📚 CONOCIMIENTO:                                               │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │
│  │  🧠    │ │  🧩    │ │  📖    │ │  🔬    │ │  👥    │       │
│  │PIAGET  │ │VYGOTSKI│ │ GLOSAR │ │METODOLO│ │AUTORES │       │
│  │MASTER  │ │PRO     │ │COMPLET │ │EXPERT  │ │SABIO   │       │
│  │  ✓     │ │  ✓     │ │  ○     │ │  ○     │ │  ✓     │       │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘       │
│                                                                 │
│  ⚡ RENDIMIENTO:                                                │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │
│  │  🔥    │ │  ⚡    │ │  🎯    │ │  🚀    │ │  💎    │       │
│  │RACHA 5 │ │RACHA 10│ │RACHA 20│ │FLASH 50│ │FLASH 90│       │
│  │  ✓     │ │  ✓     │ │  ○     │ │  ✓     │ │  ○     │       │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘       │
│                                                                 │
│  🎯 ESPECIALES:                                                 │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │
│  │  🌙    │ │  ⏰    │ │  🏃    │ │  🎓    │ │  🌟    │       │
│  │NOCTURN │ │MARATON │ │EXPRESS │ │APROBAD │ │PERFECT │       │
│  │  ✓     │ │  ○     │ │  ✓     │ │  ○     │ │  ○     │       │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Descripción de Badges:

| Badge | Icono | Condición | Color |
|-------|-------|-----------|-------|
| Piaget Master | 🧠 | Completar todas las flashcards de Piaget | #9B59B6 |
| Vygotski Pro | 🧩 | Completar todas las flashcards de Vygotski | #E74C3C |
| Glosario Completo | 📖 | Revisar 100% del glosario | #3498DB |
| Metodología Expert | 🔬 | Dominar sección de metodología | #2ECC71 |
| Autores Sabio | 👥 | Conocer todos los autores | #F39C12 |
| Racha 5 | 🔥 | 5 flashcards correctas seguidas | #E74C3C |
| Racha 10 | ⚡ | 10 flashcards correctas seguidas | #F39C12 |
| Racha 20 | 🎯 | 20 flashcards correctas seguidas | #9B59B6 |
| Flash 50 | 🚀 | Completar 50 flashcards | #3498DB |
| Flash 90 | 💎 | Completar todas las flashcards | #1ABC9C |
| Nocturno | 🌙 | Estudiar después de las 22:00 | #34495E |
| Maratonista | ⏰ | Sesión de 60+ minutos | #E67E22 |
| Express | 🏃 | Completar 30 flashcards en 15 min | #E74C3C |
| Aprobado | 🎓 | Simular examen con 70%+ | #2ECC71 |
| Perfecto | 🌟 | Simular examen con 90%+ | #F1C40F |

## 2.4 Pantalla de Recompensas

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                      🎉 ¡FELICIDADES! 🎉                        │
│                                                                 │
│              ┌─────────────────────────────┐                   │
│              │                             │                   │
│              │        ╭───────────╮        │                   │
│              │       ╱   🏆    🏆   ╲      │                   │
│              │      │   RACHA 10    │      │                   │
│              │      │    LOGRO      │      │                   │
│              │       ╲   ⚡    ⚡   ╱      │                   │
│              │        ╰───────────╯        │                   │
│              │                             │                   │
│              │   ¡10 flashcards seguidas!  │                   │
│              │                             │                   │
│              └─────────────────────────────┘                   │
│                                                                 │
│         ┌─────────────────────────────────────┐                │
│         │   +50 PUNTOS DE EXPERIENCIA         │                │
│         │   +1 NIVEL: Estratega Rápido 🦊     │                │
│         └─────────────────────────────────────┘                │
│                                                                 │
│              [🎊 Celebrar]        [Continuar →]                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

# 3. DISEÑO DE PÁGINAS CLAVE

## 3.1 HOMEPAGE - Layout Detallado

### Secciones y Especificaciones:

```
┌─────────────────────────────────────────────────────────────────┐
│ HEADER (60px)                                                   │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 🧠  PSICO-EXPRESS      [APRENDER][REPASAR][PROGRESO]   ⚙️ 🔊│ │
│ └─────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ BANNER SUPERIOR (120px)                                         │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  ⏰ EXAMEN EN: 2 días, 14 horas, 35 minutos                 │ │
│ │  🔥 Racha actual: 3 días    🎯 Meta: 90 flashcards hoy      │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ PROGRESO GENERAL (200px)                                        │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                                                             │ │
│ │   📊 PROGRESO TOTAL: 67%                                    │ │
│ │   ┌─────────────────────────────────────────────────────┐  │ │
│ │   │████████████████████████████████████░░░░░░░░░░░░░░░░░│  │ │
│ │   └─────────────────────────────────────────────────────┘  │ │
│ │                                                             │ │
│ │   🏆 Nivel 7: EXPERTO EN DESARROLLO 🦅                      │ │
│ │   2340 / 3000 XP para siguiente nivel                       │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ACCESOS RÁPIDOS (Grid 3x2)                                      │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                │
│ │ 🗺️ MAPAS    │ │ 🎯 FLASH    │ │ 📚 GLOSARIO │                │
│ │             │ │   45/90     │ │             │                │
│ │  85%        │ │   50%       │ │   65%       │                │
│ │ [Ver →]     │ │ [Continuar] │ │ [Buscar →]  │                │
│ └─────────────┘ └─────────────┘ └─────────────┘                │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                │
│ │ 👤 AUTORES  │ │ 🧩 MNEMO    │ │ ⚡ TEST     │                │
│ │             │ │             │ │             │                │
│ │  70%        │ │   40%       │ │   --        │                │
│ │ [Ver →]     │ │ [Practicar] │ │ [Iniciar]   │                │
│ └─────────────┘ └─────────────┘ └─────────────┘                │
│                                                                 │
│ RECOMENDACIÓN PERSONALIZADA (100px)                             │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  💡 BASADO EN TU PROGRESO:                                  │ │
│ │     "Te quedan 45 flashcards de Funciones Ejecutivas.       │ │
│ │      Tiempo estimado: 12 minutos"                           │ │
│ │                      [IR AHORA →]                           │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ LOGROS RECIENTES (80px)                                         │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  🏆 Recientes:  [🧠] [⚡] [🌙]  [Ver todos →]               │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Especificaciones de Cards de Acceso Rápido:
- **Tamaño**: 180px x 160px
- **Border-radius**: 16px
- **Sombra**: `0 4px 15px rgba(0,0,0,0.1)`
- **Hover**: Escala 1.05, sombra más pronunciada
- **Colores por tema**:
  - Mapas: #E8F5E9 (verde muy claro) + borde #4CAF50
  - Flashcards: #FFF3E0 (naranja claro) + borde #FF9800
  - Glosario: #E3F2FD (azul claro) + borde #2196F3
  - Autores: #F3E5F5 (morado claro) + borde #9C27B0
  - Mnemotécnicos: #E0F2F1 (turquesa claro) + borde #009688
  - Test: #FFEBEE (rojo claro) + borde #F44336

## 3.2 PÁGINA DE FLASHCARDS - Interacción Completa

### Layout Principal:

```
┌─────────────────────────────────────────────────────────────────┐
│ HEADER                                                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ BARRA DE PROGRESO DE SESIÓN                                     │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  Funciones Ejecutivas - 12/30    [=========>    ] 40%       │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ TARJETA FLASHCARD (400px x 280px)                               │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                                                             │ │
│ │                    ┌─────────────────────┐                  │ │
│ │                    │                     │                  │ │
│ │                    │   🤔 PREGUNTA       │                  │ │
│ │                    │                     │                  │ │
│ │                    │  ¿Qué función       │                  │ │
│ │                    │  ejecutiva permite  │                  │ │
│ │                    │  inhibir respuestas │                  │ │
│ │                    │  automáticas?       │                  │ │
│ │                    │                     │                  │ │
│ │                    │   [Ver pista 💡]    │                  │ │
│ │                    │                     │                  │ │
│ │                    └─────────────────────┘                  │ │
│ │                                                             │ │
│ │              [Haz clic o presiona ESPACIO para voltear]     │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ CONTROLES DE RESPUESTA (aparecen después de voltear)            │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                                                             │ │
│ │     [❌ NO LA SABÍA]    [🤔 DUDOSA]    [✅ LA SABÍA]        │ │
│ │                                                             │ │
│ │        (1 día)           (3 días)         (7 días)          │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ NAVEGACIÓN                                                      │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  [← Anterior]    12 / 30    [Siguiente →]                   │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ RACHA ACTUAL                                                    │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  🔥 Racha: 8 seguidas    ⭐ Mejor: 15                       │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Especificaciones de Flashcard:

**Dimensiones y Estilo:**
- **Ancho**: 100% (max 500px)
- **Alto**: 320px
- **Border-radius**: 20px
- **Sombra**: `0 10px 40px rgba(0,0,0,0.15)`
- **Perspectiva**: 1000px (para efecto 3D)

**Animación de Volteo (CSS):**
```css
.flashcard {
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.flashcard.flipped {
  transform: rotateY(180deg);
}

.flashcard-front, .flashcard-back {
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
}

.flashcard-back {
  transform: rotateY(180deg);
}
```

**Colores:**
- **Frente (Pregunta)**: #FFFFFF fondo, #2C3E50 texto
- **Reverso (Respuesta)**: #F8F9FA fondo, #27AE60 respuesta correcta
- **Borde**: #3498DB (2px)

**Botones de Dificultad:**
| Botón | Color | Intervalo | Icono |
|-------|-------|-----------|-------|
| No la sabía | #E74C3C | 1 día | ❌ |
| Dudosa | #F39C12 | 3 días | 🤔 |
| La sabía | #27AE60 | 7 días | ✅ |

## 3.3 PÁGINA DE MAPAS CONCEPTUALES

### Layout:

```
┌─────────────────────────────────────────────────────────────────┐
│ HEADER                                                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ TÍTULO Y FILTROS                                                │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  🗺️ MAPAS CONCEPTUALES                    [🔍 Buscar...]   │ │
│ │                                                             │ │
│ │  [Todos] [Piaget] [Vygotski] [Func.Ejec] [Metodología]      │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ GRID DE MAPAS                                                   │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐    │
│ │                 │ │                 │ │                 │    │
│ │  ┌───────────┐  │ │  ┌───────────┐  │ │  ┌───────────┐  │    │
│ │  │  🧠       │  │ │  │  🧩       │  │ │  │  🎯       │  │    │
│ │  │ PIAGET    │  │ │  │ VYGOTSKI  │  │ │  │ FUNCIONES │  │    │
│ │  │ vs        │  │ │  │ ZDP       │  │ │  │EJECUTIVAS │  │    │
│ │  │ VYGOTSKI  │  │ │  │           │  │ │  │           │  │    │
│ │  └───────────┘  │ │  └───────────┘  │ │  └───────────┘  │    │
│ │                 │ │                 │ │                 │    │
│ │  Comparación    │ │  Zona de        │ │  Modelo de      │    │
│ │  teorías        │ │  Desarrollo     │ │  Diamond        │    │
│ │  constructivas  │ │  Proximal       │ │                 │    │
│ │                 │ │                 │ │                 │    │
│ │  [Ver mapa →]   │ │  [Ver mapa →]   │ │  [Ver mapa →]   │    │
│ │                 │ │                 │                 │    │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘    │
│                                                                 │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐    │
│ │                 │ │                 │ │                 │    │
│ │  ┌───────────┐  │ │  ┌───────────┐  │ │  ┌───────────┐  │    │
│ │  │  📊       │  │ │  │  🧬       │  │ │  │  🎭       │  │    │
│ │  │ ESTADIOS  │  │ │  │ ADJUNTO   │  │ │  │ TEORÍA    │  │    │
│ │  │ PIAGET    │  │ │  │ APEGO     │  │ │  │ MENTAL    │  │    │
│ │  └───────────┘  │ │  └───────────┘  │ │  └───────────┘  │    │
│ │                 │ │                 │ │                 │    │
│ │  Tabla de       │ │  Bowlby &       │ │  Teoría de la   │    │
│ │  estadios       │ │  Ainsworth      │ │  Mente de       │    │
│ │                 │ │                 │ │  Leslie         │    │
│ │  [Ver mapa →]   │ │  [Ver mapa →]   │ │  [Ver mapa →]   │    │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Visualización de Mapa Conceptual (Vista Detallada):

```
┌─────────────────────────────────────────────────────────────────┐
│ 🗺️ MAPA: PIAGET vs VYGOTSKI                    [← Volver]      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                                                             │ │
│ │                    ┌─────────────┐                          │ │
│ │                    │ CONSTRUCTI- │                          │ │
│ │                    │  VISMO      │                          │ │
│ │                    └──────┬──────┘                          │ │
│ │                           │                                 │ │
│ │           ┌───────────────┼───────────────┐                 │ │
│ │           │               │               │                 │ │
│ │           ▼               │               ▼                 │ │
│ │    ┌─────────────┐        │      ┌─────────────┐            │ │
│ │    │   PIAGET    │        │      │  VYGOTSKI   │            │ │
│ │    │  (Suiza)    │        │      │  (Rusia)    │            │ │
│ │    └──────┬──────┘        │      └──────┬──────┘            │ │
│ │           │               │               │                 │ │
│ │    ┌──────┴──────┐        │      ┌──────┴──────┐            │ │
│ │    │• Adaptación │        │      │• ZDP        │            │ │
│ │    │• Asimilación│        │      │• Andamiaje  │            │ │
│ │    │• Acomodación│        │      │• MKO        │            │ │
│ │    │• Estadios   │        │      │• Intern.    │            │ │
│ │    │  evolutivos │        │      │  social     │            │ │
│ │    └─────────────┘        │      └─────────────┘            │ │
│ │                           │                                 │ │
│ │                    ┌──────┴──────┐                          │ │
│ │                    │ DIFERENCIAS │                          │ │
│ │                    │ CLAVE       │                          │ │
│ │                    │             │                          │ │
│ │                    │• Indiv. vs  │                          │ │
│ │                    │  Social     │                          │ │
│ │                    │• Universal   │                          │ │
│ │                    │  vs Cultural│                          │ │
│ │                    └─────────────┘                          │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ PANEL DE INFORMACIÓN (hover sobre elementos)                    │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  📖 ZDP (Zona de Desarrollo Proximal)                       │ │
│ │                                                             │ │
│ │  "Distancia entre lo que el niño puede hacer solo y lo que  │ │
│ │   puede hacer con ayuda de un adulto o compañero más        │ │
│ │   capaz (MKO)."                                             │ │
│ │                                                             │ │
│ │  💡 EJEMPLO: Un niño que solo puede contar hasta 10, con    │ │
│ │     ayuda puede llegar hasta 20.                            │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 3.4 PÁGINA DE GLOSARIO

### Layout:

```
┌─────────────────────────────────────────────────────────────────┐
│ HEADER                                                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ BARRA DE BÚSQUEDA Y FILTROS                                     │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  📚 DICCIONARIO DE TÉRMINOS                                 │ │
│ │                                                             │ │
│ │  ┌─────────────────────────────────────────────────────┐   │ │
│ │  │  🔍 Buscar término...                               │   │ │
│ │  └─────────────────────────────────────────────────────┘   │ │
│ │                                                             │ │
│ │  [A] [B] [C] [D] [E] [F] [G] [H] [I] [J] [K] [L] [M]       │ │
│ │  [N] [O] [P] [Q] [R] [S] [T] [U] [V] [W] [X] [Y] [Z]       │ │
│ │                                                             │ │
│ │  [Todos] [Piaget] [Vygotski] [Func.Ejec] [Metodología]      │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ LISTA DE TÉRMINOS                                               │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                                                             │ │
│ │  ┌─────────────────────────────────────────────────────┐   │ │
│ │  │  A                                                  │   │ │
│ │  │  ─────────────────────────────────────────────────  │   │ │
│ │  │                                                     │   │ │
│ │  │  📖 Acomodación                                     │   │ │
│ │  │     Modificación de los esquemas cognitivos ante  │   │ │
│ │  │     nueva información. Piaget.                      │   │ │
│ │  │     [Ver más →]                                     │   │ │
│ │  │                                                     │   │ │
│ │  │  📖 Adaptación                                      │   │ │
│ │  │     Proceso de equilibrio entre asimilación y     │   │ │
│ │  │     acomodación. Piaget.                            │   │ │
│ │  │     [Ver más →]                                     │   │ │
│ │  │                                                     │   │ │
│ │  │  📖 Andamiaje (Scaffolding)                         │   │ │
│ │  │     Apoyo temporal que da el adulto para que el   │   │ │
│ │  │     niño alcance su ZDP. Vygotski.                  │   │ │
│ │  │     [Ver más →]                                     │   │ │
│ │  │                                                     │   │ │
│ │  └─────────────────────────────────────────────────────┘   │ │
│ │                                                             │ │
│ │  ┌─────────────────────────────────────────────────────┐   │ │
│ │  │  Z                                                  │   │ │
│ │  │  ─────────────────────────────────────────────────  │   │ │
│ │  │                                                     │   │ │
│ │  │  📖 ZDP (Zona de Desarrollo Proximal)               │   │ │
│ │  │     Distancia entre lo que el niño puede hacer    │   │ │
│ │  │     solo y con ayuda. Vygotski.                     │   │ │
│ │  │     [Ver más →]                                     │   │ │
│ │  │                                                     │   │ │
│ │  └─────────────────────────────────────────────────────┘   │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ PROGRESO DEL GLOSARIO                                           │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  📊 Has revisado 45/89 términos (51%)                       │ │
│ │  ██████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 3.5 DASHBOARD DE PROGRESO

### Layout:

```
┌─────────────────────────────────────────────────────────────────┐
│ HEADER                                                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ RESUMEN EJECUTIVO                                               │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                                                             │ │
│ │  🏆 NIVEL 7: EXPERTO EN DESARROLLO 🦅                       │ │
│ │  2340 / 3000 XP                                             │ │
│ │  ████████████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░  │ │
│ │                                                             │ │
│ │  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌──────────┐ │ │
│ │  │   ⏱️       │ │   📚       │ │   🎯       │ │   🔥     │ │ │
│ │  │  4h 23min  │ │  45/90     │ │   67%      │ │   8      │ │ │
│ │  │  estudiado │ │  términos  │ │  progreso  │ │  racha   │ │ │
│ │  └────────────┘ └────────────┘ └────────────┘ └──────────┘ │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ GRÁFICO DE PROGRESO SEMANAL                                     │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                                                             │ │
│ │   Flashcards por día                                        │ │
│ │   │                                                         │ │
│ │ 30┤                    ┌───┐                                │ │
│ │   │            ┌───┐   │25 │                                │ │
│ │ 20┤    ┌───┐   │18 │   │   │        ┌───┐                  │ │
│ │   │    │12 │   │   │   │   │        │30 │                  │ │
│ │ 10┤    │   │   │   │   │   │  ┌───┐ │   │                  │ │
│ │   │    │   │   │   │   │   │  │15 │ │   │                  │ │
│ │  0┼────┴───┴───┴───┴───┴───┴──┴───┴─┴───┴────              │ │
│ │       L    M    X    J    V    S    D                      │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ PROGRESO POR TEMA                                               │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                                                             │ │
│ │  🧠 PIAGET                    85% ████████████████░░░      │ │
│ │     25/30 flashcards • 12/15 términos                       │ │
│ │                                                             │ │
│ │  🧩 VYGOTSKI                  60% ████████████░░░░░░░      │ │
│ │     18/30 flashcards • 8/15 términos                        │ │
│ │                                                             │ │
│ │  🎯 FUNCIONES EJECUTIVAS      40% ████████░░░░░░░░░░░      │ │
│ │     12/30 flashcards • 5/10 términos                        │ │
│ │                                                             │ │
│ │  📊 METODOLOGÍA               70% ██████████████░░░░░      │ │
│ │     14/20 flashcards • 10/15 términos                       │ │
│ │                                                             │ │
│ │  👥 AUTORES                   75% ███████████████░░░░      │ │
│ │     15/20 flashcards • 12/15 términos                       │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ LOGROS DESBLOQUEADOS                                            │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                                                             │ │
│ │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐    │ │
│ │  │  🧠    │ │  🧩    │ │  🔥    │ │  ⚡    │ │  🌙    │    │ │
│ │  │PIAGET  │ │VYGOTSKI│ │RACHA 5 │ │RACHA 10│ │NOCTURN │    │ │
│ │  │MASTER  │ │PRO     │ │        │ │        │ │        │    │ │
│ │  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘    │ │
│ │                                                             │ │
│ │  [Ver todos los logros →]                                   │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

# 4. SISTEMA DE COLORES Y TIPOGRAFÍA

## 4.1 Paleta de Colores Primaria

### Colores Principales (Brand):

| Nombre | Hex | Uso | Razón TDAH |
|--------|-----|-----|------------|
| **Azul Energía** | `#2563EB` | Primario, botones principales, enlaces | Estimula concentración sin agobio |
| **Verde Éxito** | `#10B981` | Aciertos, progreso, completado | Asociado con logro, calma dopaminérgica |
| **Naranja Alerta** | `#F59E0B` | Advertencias, elementos importantes | Atracción atencional moderada |
| **Rojo Error** | `#EF4444` | Errores, urgencia mínima | Solo para feedback negativo |

### Colores Secundarios (Temáticos):

| Nombre | Hex | Uso |
|--------|-----|-----|
| **Púrpura Piaget** | `#8B5CF6` | Sección Piaget, teoría constructivista |
| **Coral Vygotski** | `#F97316` | Sección Vygotski, sociocultural |
| **Turquesa Funciones** | `#06B6D4` | Funciones ejecutivas, claridad mental |
| **Rosa Metodología** | `#EC4899` | Sección metodológica |

### Colores Neutros:

| Nombre | Hex | Uso |
|--------|-----|-----|
| **Negro Texto** | `#1F2937` | Texto principal |
| **Gris Oscuro** | `#4B5563` | Subtítulos, secundario |
| **Gris Medio** | `#9CA3AF` | Placeholders, deshabilitado |
| **Gris Claro** | `#E5E7EB` | Bordes, separadores |
| **Gris Fondo** | `#F3F4F6` | Fondos de sección |
| **Blanco** | `#FFFFFF` | Fondo principal, tarjetas |

### Fondos Especiales:

| Nombre | Hex | Uso |
|--------|-----|-----|
| **Fondo App** | `#FAFBFC` | Fondo general de la aplicación |
| **Fondo Card** | `#FFFFFF` | Tarjetas y contenedores |
| **Fondo Hover** | `#F9FAFB` | Estado hover sutil |

## 4.2 Paleta Extendida (Para Gamificación)

```
┌─────────────────────────────────────────────────────────────────┐
│                    PALETA COMPLETA                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PRIMARIOS:                                                     │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                   │
│  │        │ │        │ │        │ │        │                   │
│  │ #2563EB│ │ #10B981│ │ #F59E0B│ │ #EF4444│                   │
│  │  🔵    │ │  🟢    │ │  🟠    │ │  🔴    │                   │
│  │  AZUL  │ │  VERDE │ │ NARANJA│ │  ROJO  │                   │
│  │        │ │        │ │        │ │        │                   │
│  └────────┘ └────────┘ └────────┘ └────────┘                   │
│                                                                 │
│  TEMÁTICOS:                                                     │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                   │
│  │        │ │        │ │        │ │        │                   │
│  │ #8B5CF6│ │ #F97316│ │ #06B6D4│ │ #EC4899│                   │
│  │  🟣    │ │  🟠    │ │  🔵    │ │  🩷    │                   │
│  │ PIAGET │ │VYGOTSKI│ │ FUNC.EJ│ │ METODO │                   │
│  │        │ │        │ │        │ │        │                   │
│  └────────┘ └────────┘ └────────┘ └────────┘                   │
│                                                                 │
│  NEUTROS:                                                       │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │
│  │ #1F2937│ │ #4B5563│ │ #9CA3AF│ │ #E5E7EB│ │ #F3F4F6│       │
│  │  ⬛    │ │  ⬜    │ │  ⬜    │ │  ⬜    │ │  ⬜    │       │
│  │ TEXTO  │ │SUBTITU │ │PLACEHOL│ │ BORDES │ │ FONDOS │       │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘       │
│                                                                 │
│  GRADIENTES:                                                    │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)      │   │
│  │  (Para hero y elementos destacados)                     │   │
│  └─────────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  linear-gradient(135deg, #10B981 0%, #06B6D4 100%)      │   │
│  │  (Para progreso y logros)                               │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 4.3 Tipografía

### Fuentes Principales:

| Uso | Fuente | Fallback | Razón |
|-----|--------|----------|-------|
| **Títulos** | Poppins | sans-serif | Moderna, amigable, buena legibilidad |
| **Cuerpo** | Inter | sans-serif | Altísima legibilidad en pantalla |
| **Código/Notas** | JetBrains Mono | monospace | Diferenciación clara |

### Jerarquía Tipográfica:

| Elemento | Fuente | Tamaño | Peso | Line-height | Uso |
|----------|--------|--------|------|-------------|-----|
| H1 | Poppins | 48px | 700 | 1.2 | Título página |
| H2 | Poppins | 36px | 600 | 1.3 | Secciones |
| H3 | Poppins | 28px | 600 | 1.3 | Subsecciones |
| H4 | Poppins | 22px | 500 | 1.4 | Cards |
| Body Large | Inter | 18px | 400 | 1.6 | Texto destacado |
| Body | Inter | 16px | 400 | 1.6 | Texto normal |
| Body Small | Inter | 14px | 400 | 1.5 | Descripciones |
| Caption | Inter | 12px | 500 | 1.4 | Labels, hints |
| Button | Poppins | 16px | 600 | 1 | Botones |

### Importación (Google Fonts):
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet">
```

### CSS Variables:
```css
:root {
  /* Tipografía */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
  
  /* Tamaños */
  --text-h1: 3rem;      /* 48px */
  --text-h2: 2.25rem;   /* 36px */
  --text-h3: 1.75rem;   /* 28px */
  --text-h4: 1.375rem;  /* 22px */
  --text-body-lg: 1.125rem; /* 18px */
  --text-body: 1rem;    /* 16px */
  --text-sm: 0.875rem;  /* 14px */
  --text-xs: 0.75rem;   /* 12px */
}
```

## 4.4 Accesibilidad (WCAG 2.1 AA)

### Contraste Mínimo:

| Combinación | Ratio | Cumple |
|-------------|-------|--------|
| `#1F2937` sobre `#FFFFFF` | 10.5:1 | ✅ AAA |
| `#2563EB` sobre `#FFFFFF` | 5.2:1 | ✅ AA |
| `#FFFFFF` sobre `#2563EB` | 5.2:1 | ✅ AA |
| `#10B981` sobre `#FFFFFF` | 3.2:1 | ✅ AA (grandes) |
| `#F59E0B` sobre `#FFFFFF` | 2.1:1 | ⚠️ Solo fondos |

### Tamaños Mínimos:

- **Texto normal**: 16px (nunca menos)
- **Texto grande** (bold 14px+): Puede tener menos contraste
- **Botones**: Mínimo 44x44px (área táctil)
- **Espaciado**: Mínimo 8px entre elementos clicables

### Consideraciones TDAH:

- **Líneas de texto**: Máximo 75 caracteres por línea
- **Párrafos**: Máximo 3-4 líneas antes de break visual
- **Espaciado**: Generoso entre secciones (mínimo 32px)
- **Animaciones**: Respetar `prefers-reduced-motion`

---

# 5. MICROINTERACCIONES Y ANIMACIONES

## 5.1 Lista de Animaciones Necesarias

### Animaciones de Hover:

| Elemento | Efecto | Duración | Easing |
|----------|--------|----------|--------|
| Cards | Scale 1.03 + sombra | 200ms | ease-out |
| Botones | Scale 1.02 + brillo | 150ms | ease-out |
| Enlaces | Color + underline slide | 200ms | ease-in-out |
| Iconos | Rotate 10° + scale | 200ms | ease-out |

### Animaciones de Click:

| Elemento | Efecto | Duración | Easing |
|----------|--------|----------|--------|
| Botones | Scale 0.98 (press) | 100ms | ease-in |
| Flashcard | RotateY 180° (flip) | 600ms | cubic-bezier(0.4, 0.0, 0.2, 1) |
| Opciones | Scale 1.1 + color | 200ms | ease-out |

### Transiciones de Página:

| Tipo | Efecto | Duración |
|------|--------|----------|
| Cambio sección | Fade + slide up 20px | 300ms |
| Carga contenido | Fade in + stagger 50ms | 400ms |
| Modal/Overlay | Fade + scale 0.95→1 | 250ms |

## 5.2 Feedback Visual para Acierto/Error

### Acierto (Flashcard correcta):

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    ✅ ¡CORRECTO!                                │
│                                                                 │
│   Efectos:                                                      │
│   • Flashcard: Borde verde #10B981 (3px) + glow                 │
│   • Partículas: 8-12 confetis pequeños desde centro             │
│   • Badge "+10 XP" flotando hacia arriba                        │
│   • Barra de racha: Pulso verde                                 │
│                                                                 │
│   Animación:                                                    │
│   1. 0-100ms: Flash verde en tarjeta                            │
│   2. 100-400ms: Partículas explotan                             │
│   3. 200-800ms: XP flota y desaparece                           │
│   4. 400-600ms: Tarjeta sale (slide left), nueva entra          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**CSS para feedback de acierto:**
```css
@keyframes success-flash {
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { box-shadow: 0 0 0 20px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

@keyframes float-up {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-30px); opacity: 0; }
}

@keyframes confetti-pop {
  0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  100% { transform: translate(var(--x), var(--y)) rotate(720deg); opacity: 0; }
}
```

### Error (Flashcard incorrecta):

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    ❌ ¡REPASAR!                                 │
│                                                                 │
│   Efectos:                                                      │
│   • Flashcard: Shake horizontal (3 ciclos)                      │
│   • Borde: Rojo #EF4444 (2px)                                   │
│   • Texto: "Esta tarjeta volverá mañana"                        │
│   • Racha: Se reinicia con animación de "break"                 │
│                                                                 │
│   Animación:                                                    │
│   1. 0-300ms: Shake (translateX: -5px, 5px, -5px, 5px, 0)      │
│   2. 0-200ms: Borde rojo aparece                                │
│   3. 300-600ms: Mensaje aparece con fade                        │
│   4. 800ms+: Botón "Continuar" se activa                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**CSS para feedback de error:**
```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@keyframes error-pulse {
  0%, 100% { border-color: #EF4444; }
  50% { border-color: #FCA5A5; }
}
```

## 5.3 Animaciones de Progreso

### Barra de Progreso:

```css
@keyframes progress-fill {
  0% { width: 0%; }
  100% { width: var(--progress); }
}

.progress-bar {
  animation: progress-fill 800ms cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
}
```

### Números Contadores:

```css
@keyframes count-up {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.counter {
  animation: count-up 400ms ease-out;
}
```

### Circular Progress (para niveles):

```css
@keyframes circle-progress {
  0% { stroke-dashoffset: 283; } /* 2πr where r=45 */
  100% { stroke-dashoffset: var(--offset); }
}

.circle-progress {
  stroke-dasharray: 283;
  animation: circle-progress 1000ms cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
}
```

## 5.4 Efectos de Celebración

### Nivel Completado:

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   EFECTOS:                                                      │
│   • Pantalla: Overlay oscuro semitransparente                   │
│   • Modal: Scale 0.8→1 con bounce                               │
│   • Confetti: 50-100 partículas desde arriba                    │
│   • Badge: Giro 360° + glow dorado                              │
│   • XP: Contador animado hasta valor final                      │
│                                                                 │
│   DURACIÓN TOTAL: 3-4 segundos                                  │
│                                                                 │
│   SONIDO: Fanfarria de victoria (2 segundos)                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Implementación de confetti (JavaScript/CSS):**
```javascript
function createConfetti() {
  const colors = ['#2563EB', '#10B981', '#F59E0B', '#8B5CF6', '#F97316'];
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(confetti);
  }
}
```

```css
.confetti {
  position: fixed;
  width: 10px;
  height: 10px;
  top: -10px;
  animation: confetti-fall 3s ease-out forwards;
}

@keyframes confetti-fall {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
```

### Racha Lograda:

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   EFECTOS:                                                      │
│   • Número de racha: Scale 1.5 + glow naranja                   │
│   • Fuego: Animación de llama (CSS/SVG)                         │
│   • Texto: "¡Racha de X!" aparece con bounce                    │
│   • Barra: Pulso cada segundo mientras dura racha               │
│                                                                 │
│   ANIMACIÓN DE FUEGO (SVG):                                     │
│   • Path morphing de llama                                      │
│   • Color: Degradado #F59E0B → #EF4444                          │
│   • Duración: 500ms loop                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

# 6. ELEMENTOS DE AUDIO

## 6.1 Sonidos a Incluir

### Sonidos de Feedback:

| Sonido | Archivo | Trigger | Volumen | Duración |
|--------|---------|---------|---------|----------|
| **Acierto** | success-pop.mp3 | Flashcard correcta | 40% | 0.3s |
| **Error** | soft-thud.mp3 | Flashcard incorrecta | 35% | 0.2s |
| **Nivel Up** | level-up-fanfare.mp3 | Subir de nivel | 50% | 2s |
| **Badge** | achievement-chime.mp3 | Desbloquear badge | 45% | 1.5s |
| **Racha 5** | streak-small.mp3 | Racha de 5 | 40% | 0.8s |
| **Racha 10** | streak-medium.mp3 | Racha de 10 | 45% | 1s |
| **Racha 20** | streak-epic.mp3 | Racha de 20 | 50% | 1.5s |
| **Progreso** | progress-ding.mp3 | Completar sección | 40% | 0.5s |
| **Flip Card** | card-flip.mp3 | Voltear flashcard | 25% | 0.2s |
| **Hover** | subtle-hover.mp3 | Hover en elementos | 15% | 0.1s |

### Sonidos Ambientales (Opcionales):

| Sonido | Uso | Volumen |
|--------|-----|---------|
| **Focus music** | Modo concentración (loop) | 10% |
| **White noise** | Fondo para TDAH (opcional) | 8% |

## 6.2 Cuándo Reproducir (Reglas Anti-Saturación)

### Reglas de Throttling:

```javascript
const audioRules = {
  // Máximo 1 sonido cada 500ms
  minInterval: 500,
  
  // Sonidos de hover: Solo si no hay sonido reciente
  hoverCooldown: 2000,
  
  // Racha: Solo cada 5 (5, 10, 15, 20...)
  streakInterval: 5,
  
  // Prioridad: Nivel > Badge > Racha > Acierto > Error > Hover
  priority: ['levelUp', 'badge', 'streak', 'success', 'error', 'hover']
};
```

### Lógica de Reproducción:

```javascript
class AudioManager {
  constructor() {
    this.lastPlayTime = 0;
    this.soundEnabled = true;
    this.volume = 0.4;
  }
  
  canPlay(priority) {
    const now = Date.now();
    const timeSinceLast = now - this.lastPlayTime;
    return this.soundEnabled && timeSinceLast >= audioRules.minInterval;
  }
  
  play(soundName, priority = 'normal') {
    if (!this.canPlay(priority)) return;
    
    const audio = new Audio(`/sounds/${soundName}.mp3`);
    audio.volume = this.volume;
    audio.play();
    this.lastPlayTime = Date.now();
  }
}
```

## 6.3 Opción de Silencio

### UI de Control de Audio:

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  CONTROLES DE AUDIO (en header o settings)                      │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│ │                                                         │   │
│  │  🔊 Sonidos:  [ON ● / ○ OFF]                            │   │
│ │                                                         │   │
│  │  Volumen:     [━━━━━●━━━━━━━]  50%                      │   │
│ │                                                         │   │
│  │  🎵 Música focus: [○ ON / ● OFF]                        │   │
│ │                                                         │   │
│  │  Modo silencioso: [○ ON / ● OFF]                        │   │
│  │  (Solo vibración en móvil)                              │   │
│ │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Persistencia:

```javascript
// Guardar preferencias en localStorage
const audioSettings = {
  enabled: true,
  volume: 0.4,
  musicEnabled: false,
  silentMode: false
};

localStorage.setItem('psico-audio-settings', JSON.stringify(audioSettings));
```

### Vibration API (Móvil):

```javascript
// Vibración para feedback táctil
if (navigator.vibrate && audioSettings.silentMode) {
  // Acierto: Vibración corta
  navigator.vibrate(50);
  
  // Error: Doble vibración
  navigator.vibrate([50, 100, 50]);
  
  // Nivel up: Patrón de celebración
  navigator.vibrate([100, 50, 100, 50, 200]);
}
```

---

# 7. WIREFRAMES DESCRITIVOS

## 7.1 Página: Homepage (Dashboard)

### Descripción Detallada:

**Sección 1: Header (60px)**
- Logo "🧠 PSICO-EXPRESS" a la izquierda (clickable, vuelve a home)
- Navegación central: APRENDER | REPASAR | PROGRESO
- Iconos derecha: Configuración (⚙️), Audio (🔊)
- Fondo: Blanco (#FFFFFF) con sombra sutil
- Posición: Fixed al top

**Sección 2: Banner Countdown (120px)**
- Fondo: Gradiente azul (#2563EB → #1D4ED8)
- Texto: "⏰ EXAMEN EN: X días, X horas" (blanco, 24px, Poppins 600)
- Subtexto: "🔥 Racha: X días | 🎯 Meta: 90 flashcards"
- Altura fija, siempre visible

**Sección 3: Progreso General (200px)**
- Card blanca con sombra
- Título: "📊 PROGRESO TOTAL: XX%"
- Barra de progreso: 100% ancho, 20px alto, bordes redondeados
- Color: Gradiente verde (#10B981 → #059669)
- Nivel actual con icono de animal correspondiente
- XP: "XXXX / XXXX XP para siguiente nivel"

**Sección 4: Accesos Rápidos (Grid 3x2)**
- 6 cards cuadradas (180x160px cada una)
- Grid gap: 20px
- Cada card contiene:
  - Icono grande (48px) centrado arriba
  - Título (18px, Poppins 600)
  - Progreso (14px, Inter 400)
  - Botón de acción
- Hover: Scale 1.03, sombra aumentada

**Sección 5: Recomendación (100px)**
- Card con borde izquierdo azul (4px)
- Icono bombilla (💡)
- Texto personalizado basado en progreso
- Botón CTA destacado

**Sección 6: Logos Recientes (80px)**
- Fila horizontal de badges desbloqueados
- Máximo 5 badges visibles
- Link "Ver todos"

### Flujo de Usuario Típico:

```
1. Usuario entra a Homepage
   ↓
2. Ve countdown y siente urgencia positiva
   ↓
3. Revisa progreso general (dopamina de avance)
   ↓
4. Elige actividad según recomendación o interés
   ↓
5. Click en card → Transición a sección
   ↓
6. Comienza sesión de estudio
```

## 7.2 Página: Flashcards

### Descripción Detallada:

**Sección 1: Barra de Progreso (50px)**
- Tema actual + contador "X/Y"
- Barra de progreso horizontal
- Tiempo de sesión (opcional)

**Sección 2: Área de Flashcard (400px)**
- Card central, max-width 500px
- Altura: 320px
- 3D flip animation
- Frente: Pregunta, fondo blanco
- Reverso: Respuesta, fondo verde claro
- Indicador: "Click o ESPACIO para voltear"

**Sección 3: Pista (Opcional)**
- Botón "Ver pista 💡"
- Expande suavemente con fade
- No revela respuesta completamente

**Sección 4: Controles de Dificultad (100px)**
- Tres botones grandes:
  - ❌ No la sabía (rojo, 1 día)
  - 🤔 Dudosa (naranja, 3 días)
  - ✅ La sabía (verde, 7 días)
- Solo visibles después de voltear
- Icono + texto + intervalo

**Sección 5: Navegación (60px)**
- Botón Anterior (izquierda)
- Contador central
- Botón Siguiente (derecha)
- Flechas de teclado funcionan

**Sección 6: Racha (40px)**
- Icono fuego 🔥
- Número actual
- Mejor racha histórica

### Flujo de Interacción:

```
1. Flashcard aparece con pregunta
   ↓
2. Usuario lee y piensa respuesta
   ↓
3. Click/ESPACIO → Voltea (animación 3D)
   ↓
4. Usuario compara su respuesta
   ↓
5. Click en dificultad
   ↓
6. Feedback visual + sonido
   ↓
7. Nueva flashcard entra (slide)
   ↓
8. Repetir
```

## 7.3 Página: Mapas Conceptuales

### Descripción Detallada:

**Sección 1: Header de Página (80px)**
- Título: "🗺️ MAPAS CONCEPTUALES"
- Barra de búsqueda (icono lupa)
- Filtros por tema (chips)

**Sección 2: Grid de Mapas**
- Layout: 3 columnas en desktop, 1 en móvil
- Cards de preview:
  - Miniatura del diagrama
  - Título del mapa
  - Descripción corta
  - Badge de tema (color)
  - Botón "Ver mapa"

**Sección 3: Vista de Mapa (Modal/Página)**
- Diagrama SVG interactivo
- Zoom y pan habilitados
- Tooltips en hover de nodos
- Panel lateral con información
- Leyenda de colores

### Interactividad:

```
Hover en nodo → Tooltip aparece
Click en nodo → Panel lateral se actualiza
Doble click → Zoom al nodo
Scroll → Zoom in/out
Drag → Mover diagrama
```

## 7.4 Página: Glosario

### Descripción Detallada:

**Sección 1: Búsqueda y Filtros (100px)**
- Input de búsqueda grande
- Alfabeto clickable (A-Z)
- Filtros por categoría (chips)

**Sección 2: Lista de Términos**
- Agrupados por letra
- Headers de letra sticky
- Cada término:
  - Icono 📖
  - Término (negrita)
  - Definición corta (2 líneas)
  - Autor/tag
  - Link "Ver más"

**Sección 3: Modal de Término**
- Término completo
- Definición extensa
- Ejemplo/ejercicio
- Relacionados
- Botón "Marcar como aprendido"

### Búsqueda en Tiempo Real:

```
Escribir → Filtra lista instantáneamente
Sin resultados → Mensaje amigable + sugerencias
Click en letra → Scroll a sección
Click en filtro → Muestra solo esa categoría
```

## 7.5 Página: Dashboard de Progreso

### Descripción Detallada:

**Sección 1: Resumen Ejecutivo (200px)**
- Nivel actual grande con icono
- Barra de XP hacia siguiente nivel
- 4 métricas clave en cards:
  - Tiempo total
  - Términos vistos
  - Progreso %
  - Racha actual

**Sección 2: Gráfico Semanal (250px)**
- Gráfico de barras (Chart.js/D3)
- Flashcards por día
- Días de la semana en X
- Meta diaria como línea

**Sección 3: Progreso por Tema (300px)**
- Lista vertical de temas
- Cada uno con:
  - Icono del tema
  - Nombre
  - Porcentaje con barra
  - Detalle (flashcards + términos)

**Sección 4: Logros (200px)**
- Grid de badges
- Badges bloqueados en gris
- Hover muestra condición de desbloqueo
- Click muestra detalle

---

# 8. RESPONSIVE DESIGN

## 8.1 Breakpoints

| Breakpoint | Ancho | Ajustes Principales |
|------------|-------|---------------------|
| **Mobile** | < 640px | 1 columna, navegación hamburguesa |
| **Tablet** | 640-1024px | 2 columnas, navegación compacta |
| **Desktop** | > 1024px | 3 columnas, navegación completa |

## 8.2 Adaptaciones por Dispositivo

### Mobile (< 640px):

```
┌─────────────────────────────────────────┐
│ 🧠 PSICO-EXPRESS              ☰ ⚙️     │  ← Header 50px
├─────────────────────────────────────────┤
│ ⏰ EXAMEN EN: 2 días, 14h    🔥 3 días │  ← Banner 80px
├─────────────────────────────────────────┤
│                                         │
│  📊 PROGRESO: 67%                       │
│  ████████████████████░░░░               │
│  🏆 Nivel 7: EXPERTO 🦅                 │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────┐  ┌─────────────┐      │
│  │   🗺️        │  │   🎯        │      │
│  │   MAPAS     │  │ FLASHCARDS  │      │
│  │   85%       │  │   50%       │      │
│  │  [Ver →]    │  │ [Continuar] │      │
│  └─────────────┘  └─────────────┘      │
│                                         │
│  ┌─────────────┐  ┌─────────────┐      │
│  │   📚        │  │   👤        │      │
│  │  GLOSARIO   │  │  AUTORES    │      │
│  │   65%       │  │   70%       │      │
│  │  [Buscar →] │  │  [Ver →]    │      │
│  └─────────────┘  └─────────────┘      │
│                                         │
│  ┌─────────────┐  ┌─────────────┐      │
│  │   🧩        │  │   ⚡        │      │
│  │  MNEMOTÉC   │  │  TEST       │      │
│  │   40%       │  │   --        │      │
│  │ [Practicar] │  │  [Iniciar]  │      │
│  └─────────────┘  └─────────────┘      │
│                                         │
├─────────────────────────────────────────┤
│  💡 RECOMENDADO: Flashcards Func.Ejec   │
│                 [IR AHORA →]            │
├─────────────────────────────────────────┤
│  🏆 Recientes: [🧠] [⚡] [Ver todos]   │
└─────────────────────────────────────────┘
```

**Cambios Mobile:**
- Header: 50px, menú hamburguesa
- Grid: 2 columnas para accesos
- Flashcard: Pantalla completa
- Navegación inferior fija (opcional)
- Touch targets: Mínimo 44x44px
- Swipe para navegar flashcards

### Tablet (640-1024px):

- Grid: 2-3 columnas según espacio
- Navegación: Pestañas visibles
- Flashcard: Centrada, 80% ancho
- Sidebar opcional para glosario

### Desktop (> 1024px):

- Grid: 3 columnas estándar
- Navegación completa visible
- Flashcard: Max 500px, centrada
- Sidebar permanente en dashboard
- Hover effects activos

## 8.3 Consideraciones Táctiles

### Touch Targets:

```css
/* Mínimo 44x44px para elementos táctiles */
.touch-target {
  min-width: 44px;
  min-height: 44px;
  padding: 12px;
}

/* Espaciado entre elementos táctiles */
.touch-group > * {
  margin: 8px;
}
```

### Gestos:

| Gestos | Acción | Página |
|--------|--------|--------|
| Swipe left | Siguiente flashcard | Flashcards |
| Swipe right | Anterior flashcard | Flashcards |
| Pinch | Zoom en mapa | Mapas |
| Double tap | Voltear card | Flashcards |
| Long press | Mostrar menú contextual | General |

### Input Adaptativo:

```javascript
// Detectar si es touch device
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Adaptar comportamiento
if (isTouch) {
  // Desactivar hover effects
  document.body.classList.add('touch-device');
  
  // Activar gestos
  enableSwipeGestures();
  
  // Aumentar touch targets
  increaseTouchTargets();
}
```

## 8.4 Performance Mobile

### Optimizaciones:

- **Imágenes**: WebP con fallback, lazy loading
- **Animaciones**: `transform` y `opacity` solo
- **JavaScript**: Code splitting por ruta
- **CSS**: Purge unused styles
- **Fuentes**: `font-display: swap`

### Media Queries:

```css
/* Mobile first */
.container {
  padding: 16px;
}

/* Tablet */
@media (min-width: 640px) {
  .container {
    padding: 24px;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 32px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

# 9. COMPONENTES REUTILIZABLES

## 9.1 Sistema de Componentes

### Button System:

```
┌─────────────────────────────────────────────────────────────────┐
│                    BOTONES                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PRIMARY (Azul)          SECONDARY (Blanco)                     │
│  ┌────────────┐          ┌────────────┐                        │
│  │  🎯 Jugar  │          │  Cancelar  │                        │
│  └────────────┘          └────────────┘                        │
│  BG: #2563EB             BG: #FFFFFF                            │
│  Text: #FFFFFF           Text: #374151                          │
│  Border: none            Border: 1px #E5E7EB                    │
│                                                                 │
│  SUCCESS (Verde)         DANGER (Rojo)                          │
│  ┌────────────┐          ┌────────────┐                        │
│  │   ✅ OK    │          │  ❌ Eliminar│                        │
│  └────────────┘          └────────────┘                        │
│  BG: #10B981             BG: #EF4444                            │
│  Text: #FFFFFF           Text: #FFFFFF                          │
│                                                                 │
│  GHOST (Transparente)    ICON BUTTON                            │
│  ┌────────────┐          ┌────┐                                │
│  │  Ver más → │          │ ⚙️ │                                │
│  └────────────┘          └────┘                                │
│  BG: transparent         BG: #F3F4F6                            │
│  Text: #2563EB           Border: none                           │
│  Border: none            Size: 44x44px                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Card System:

```
┌─────────────────────────────────────────────────────────────────┐
│                    CARDS                                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  STANDARD CARD              HOVER STATE                         │
│  ┌─────────────────┐        ┌─────────────────┐                │
│  │                 │        │                 │                │
│  │  [Contenido]    │   →    │  [Contenido]    │                │
│  │                 │        │                 │                │
│  └─────────────────┘        └─────────────────┘                │
│  Border: 1px #E5E7EB        Scale: 1.02                         │
│  Radius: 16px               Shadow: 0 8px 25px rgba(0,0,0,0.1)  │
│  Shadow: 0 2px 8px          Border: 2px #2563EB                 │
│                                                                 │
│  INTERACTIVE CARD           PROGRESS CARD                       │
│  ┌─────────────────┐        ┌─────────────────┐                │
│  │  🎯             │        │  📊 Tema        │                │
│  │  Flashcards     │        │  ████████░░ 80% │                │
│  │  45/90          │        │  24/30 cards    │                │
│  │  [Continuar →]  │        └─────────────────┘                │
│  └─────────────────┘                                           │
│  Clickable entire card                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Progress Components:

```
┌─────────────────────────────────────────────────────────────────┐
│                    PROGRESO                                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  LINEAR PROGRESS            CIRCULAR PROGRESS                   │
│  ┌─────────────────────┐    ┌─────────┐                        │
│  │████████████████░░░░░│    │    75%  │                        │
│  └─────────────────────┘    │  ╭───╮  │                        │
│  Height: 12px               │ ╱     ╲ │                        │
│  Radius: 6px (full)         │ │  🦊  │ │                        │
│  BG: #E5E7EB                │ ╲     ╱ │                        │
│  Fill: gradient             │  ╰───╯  │                        │
│                             └─────────┘                        │
│                                                                 │
│  STEPPER                    SEGMENTED                           │
│  ┌─────────────────────┐    ┌─────────────────────┐            │
│  │ ●───●───●───○───○   │    │████░░░░░░░░░░░░░░░░░│            │
│  │ 1   2   3   4   5   │    │  3/15 completados   │            │
│  └─────────────────────┘    └─────────────────────┘            │
│  Steps: 5-10                Segments: 15-30                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

# 10. IMPLEMENTACIÓN TÉCNICA (RESUMEN)

## Stack Recomendado:

| Capa | Tecnología | Razón |
|------|------------|-------|
| **Framework** | React / Vue / Vanilla JS | Interactividad, componentes |
| **Estilos** | Tailwind CSS | Rapid development, consistente |
| **Animaciones** | Framer Motion / GSAP | Fluidas, performantes |
| **Sonidos** | Howler.js | Control de audio robusto |
| **Gráficos** | SVG + D3.js | Mapas conceptuales interactivos |
| **Storage** | LocalStorage | Persistencia de progreso |
| **Deploy** | Netlify / Vercel | Rápido, gratuito, CI/CD |

## Estructura de Archivos:

```
psico-express/
├── index.html
├── css/
│   ├── main.css
│   ├── components.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── flashcards.js
│   ├── progress.js
│   ├── audio.js
│   └── data.js
├── assets/
│   ├── images/
│   ├── sounds/
│   └── fonts/
└── data/
    ├── flashcards.json
    ├── glossary.json
    └── maps.json
```

---

# CONCLUSIÓN

Esta arquitectura está diseñada específicamente para:

1. **Mantener la atención** de Simo mediante micro-sesiones, feedback inmediato y elementos visuales atractivos
2. **Maximizar el aprendizaje** en 3 días con contenido estructurado y repetición espaciada
3. **Reducir la fricción cognitiva** con navegación intuitiva y diseño limpio
4. **Generar engagement** a través de gamificación bien implementada
5. **Ser accesible** cumpliendo estándares WCAG y consideraciones TDAH

La clave del éxito está en la ejecución impecable de las microinteracciones y el feedback constante que genera dopamina sin distraer del objetivo principal: **aprender y aprobar**.

---

*Documento creado para el proyecto Psico-Express*
*Diseñado para estudiantes con TDAH*
*Enfocado en resultados de aprendizaje*
