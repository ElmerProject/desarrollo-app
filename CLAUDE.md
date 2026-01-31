# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Simo Pro" - a gamified educational web application for studying Developmental Psychology II (Psicología del Desarrollo II). It's designed for students with ADHD, emphasizing micro-learning, immediate rewards, and concentration techniques.

## Running the Application

The app is static HTML/CSS/JS with no build step. Serve locally with any static server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Access at: http://localhost:8000

## Architecture

### Module System

The app uses the revealing module pattern with IIFE (Immediately Invoked Function Expressions). Each module exposes a public API through a returned object.

**Script load order matters** - defined in `index.html`:
1. `data.js` - Static data (flashcards, achievements, levels)
2. `audio.js` - Web Audio API sound generation
3. `progress.js` - localStorage persistence
4. `gamification.js` - Points, levels, achievements
5. `flashcards.js` - Card logic and spaced repetition
6. `pomodoro.js` - Timer functionality
7. `ui.js` - Navigation, toasts, modals
8. `app.js` - Main coordinator, initialization

### Global Objects

- `App` - Main application coordinator
- `ProgressManager` - Handles localStorage persistence
- `AudioManager` - Synthesized sounds via Web Audio API
- `Gamification` - Points, levels, achievements system
- `Flashcards` - Card management and display
- `Pomodoro` - Timer with study/break modes
- `UI` - Navigation, toasts, celebrations

### Key Data Structures

**Flashcard:**
```javascript
{ id, category, question, answer, difficulty: 'easy'|'medium'|'hard', tags: [] }
```

**Achievement:**
```javascript
{ id, title, description, icon, points, condition: (stats) => boolean }
```

**Level:**
```javascript
{ level, name, minPoints, icon }
```

### Storage

Data persists in localStorage under key `simopro_progress`. Structure includes:
- `user` - Level, points, streak
- `flashcards` - Card status, review history
- `achievements` - Unlocked achievements
- `pomodoro` - Session statistics
- `stats` - Study metrics

### PWA

- `manifest.json` - PWA configuration
- `sw.js` - Service Worker for offline support (cache-first strategy)
- Icons in `assets/icons/`

## Styling

Uses Tailwind CSS via CDN with custom configuration in `index.html`. Custom CSS variables and animations are in `css/styles.css`.

## Debug

In browser console:
```javascript
App.debug()        // Full debug info
App.getStats()     // User statistics
App.exportProgress() // Download backup JSON
App.resetProgress()  // Clear all data (careful!)
```

## Deployment

- **GitHub Pages**: Push to repo, enable Pages in Settings
- **Netlify**: Drag folder to netlify.com/drop
- **Vercel**: `vercel --prod`
