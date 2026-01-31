# 🎓 Simo Pro - Psicología del Desarrollo II

Aplicación web educativa gamificada para preparar exámenes de Psicología del Desarrollo II. Diseñada especialmente para estudiantes con TDAH, con enfoque en microaprendizaje, recompensas inmediatas y técnicas de concentración.

## ✨ Características

### 🎴 Flashcards Interactivas
- **90+ tarjetas** organizadas por categorías
- Efecto flip 3D con animaciones suaves
- Sistema de calificación: Fácil / Regular / Difícil
- Algoritmo de repetición espaciada simple
- Progreso persistente por tarjeta

### 🎮 Gamificación
- **Sistema de puntos** por cada acción
- **Niveles** con nombres temáticos (10 niveles)
- **20+ logros** desbloqueables
- **Racha diaria** (streak)
- Celebraciones visuales con confetti

### 🍅 Pomodoro Integrado
- Modo Estudio (25 min)
- Descanso Corto (5 min)
- Descanso Largo (15 min)
- Estadísticas de sesión
- Notificaciones al completar

### 📊 Dashboard
- Progreso visual con barras animadas
- Stats rápidas en navbar
- Próximos logros a desbloquear
- Acceso rápido a funciones principales

### 🔧 Técnicas Adicionales
- Mnemotécnicos para memorizar
- Mapas conceptuales
- Glosario de términos
- Autores clave

## 🚀 Tecnologías

- **HTML5** semántico
- **CSS3** con Tailwind CSS (CDN)
- **JavaScript vanilla** (ES6+)
- **Web Audio API** para sonidos
- **localStorage** para persistencia
- **Service Worker** para PWA

## 📁 Estructura de Archivos

```
psicologia-gamificada/
├── index.html              # Página principal
├── manifest.json           # Configuración PWA
├── sw.js                   # Service Worker
├── README.md               # Este archivo
├── css/
│   └── styles.css          # Estilos personalizados
├── js/
│   ├── data.js             # Flashcards, logros, datos
│   ├── audio.js            # Web Audio API
│   ├── progress.js         # localStorage
│   ├── gamification.js     # Puntos, niveles, logros
│   ├── flashcards.js       # Lógica de tarjetas
│   ├── pomodoro.js         # Timer Pomodoro
│   ├── ui.js               # Utilidades de UI
│   └── app.js              # App principal
└── assets/
    ├── icons/              # Iconos PWA
    ├── sounds/             # Sonidos (opcional)
    └── images/             # Imágenes
```

## 🎯 Cómo Usar

### Desarrollo Local

```bash
# Clonar o descargar el proyecto
cd psicologia-gamificada

# Servir con cualquier servidor estático
# Python 3
python -m http.server 8000

# Node.js (si tienes http-server instalado)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Abrir: http://localhost:8000

### Deploy

#### GitHub Pages
1. Subir a un repositorio de GitHub
2. Ir a Settings > Pages
3. Seleccionar branch "main" y carpeta "/ (root)"
4. Tu app estará en: `https://TU-USUARIO.github.io/NOMBRE-REPO/`

#### Netlify
1. Arrastrar la carpeta a https://app.netlify.com/drop
2. ¡Listo! URL instantánea

#### Vercel
```bash
npm i -g vercel
vercel --prod
```

## ⌨️ Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| `Space` / `Enter` | Voltear flashcard / Toggle Pomodoro |
| `1` | Calificar flashcard: Difícil |
| `2` | Calificar flashcard: Regular |
| `3` | Calificar flashcard: Fácil |
| `Esc` | Cerrar modal / sidebar |
| `Ctrl + 1-4` | Navegar a secciones principales |

## 📊 Sistema de Puntos

| Acción | Puntos |
|--------|--------|
| Ver flashcard | 5 |
| Respuesta correcta | 10 |
| Dominar tarjeta | 25 |
| Completar Pomodoro | 30 |
| Racha x3 | +15 |
| Racha x5 | +30 |
| Racha x10 | +75 |
| Subir de nivel | +100 |

## 🏆 Niveles

| Nivel | Nombre | Puntos Mínimos |
|-------|--------|----------------|
| 1 | Novato Curioso | 0 |
| 2 | Aprendiz Dedicado | 100 |
| 3 | Estudiante Aplicado | 300 |
| 4 | Conocedor Entusiasta | 600 |
| 5 | Experto en Desarrollo | 1000 |
| 6 | Maestro de Teorías | 1500 |
| 7 | Psicólogo en Formación | 2100 |
| 8 | Investigador Crítico | 2800 |
| 9 | Especialista Senior | 3600 |
| 10 | Leyenda de la Psicología | 4500 |

## 🔧 Personalización

### Añadir más flashcards

Editar `js/data.js`:

```javascript
const FLASHCARDS_DATA = [
    // ... tarjetas existentes
    {
        id: 91,
        category: 'teorias',
        question: 'Tu pregunta aquí',
        answer: 'Tu respuesta aquí',
        difficulty: 'easy',
        tags: ['etiqueta1', 'etiqueta2']
    }
];
```

### Añadir logros

```javascript
const ACHIEVEMENTS_DATA = [
    // ... logros existentes
    {
        id: 'mi_logro',
        title: 'Mi Logro',
        description: 'Descripción del logro',
        icon: '🏅',
        points: 100,
        condition: (stats) => stats.cardsStudied >= 100
    }
];
```

### Cambiar colores

Editar `index.html` en la configuración de Tailwind:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    500: '#TU_COLOR',
                    // ...
                }
            }
        }
    }
}
```

## 🌐 Compatibilidad

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Opera 67+

## 📱 PWA

La app funciona como PWA:
- Instalable en dispositivos móviles
- Funciona offline
- Icono en pantalla de inicio
- Notificaciones push (futuro)

Para instalar:
1. Abrir en Chrome/Safari/Edge
2. Menú → "Agregar a pantalla de inicio"
3. ¡Listo!

## 🐛 Debug

Abrir consola y ejecutar:

```javascript
// Ver información de debug
App.debug()

// Ver estadísticas
App.getStats()

// Exportar progreso
App.exportProgress()

// Resetear todo (cuidado!)
App.resetProgress()
```

## 📄 Licencia

MIT License - Libre para uso personal y educativo.

## 🙏 Créditos

- Tailwind CSS - Framework CSS
- Inter Font - Tipografía
- Emojis - Unicode

---

**¡Éxito en tu examen, Simo!** 📚✨
