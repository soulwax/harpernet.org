# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HarperNet.org is a SolidJS-based single-page application (SPA) for MBTI cognitive function analysis, combining Jungian psychology with modern neuroscience research. The site features personality type comparisons, detailed cognitive function analysis, relationship dynamics, and an interactive metabolic exploration game/test.

**Key Principles:**
- Zero external dependencies for routing or state management beyond SolidJS core
- Privacy-first: no cookies, minimal localStorage (theme preference only)
- Lightweight and accessible design optimized for slow connections
- Data-driven architecture with JSON files containing all content

## Tech Stack

- **SolidJS 1.9.9** - Reactive UI framework (NOT React - uses different patterns)
- **Vite 6.3.5** - Build tool and dev server
- **CSS Modules** - Component-scoped styling
- **PM2** - Production process management
- **Port 3890** - Default port (configured in ecosystem.config.js)

## Common Commands

### Development
```bash
npm run dev              # Start dev server on port 3890
npm run debug            # Dev server with debug logging
npm run watch            # Auto-restart on file changes (requires nodemon)
```

### Building & Production
```bash
npm run build            # Production build
npm run rebuild          # Build + restart PM2
npm run preview          # Preview production build locally
npm run serve            # Serve preview (used by PM2)
```

### PM2 Process Management
```bash
npm start                # Start PM2 process "mbti-app"
npm run restart          # Restart PM2 with env updates
npm run stop             # Stop PM2 process
npm run delete           # Delete PM2 process
npm run status           # Check PM2 status
npm run logs             # View PM2 logs
```

### Code Quality
```bash
npm run format           # Format code with Prettier
npm run bump             # Bump patch version
```

### Quiz Balancing Tools
```bash
npm run weights          # Generate weight distribution analysis in weights.txt
npm run weights:out      # Generate and display weights (Unix)
npm run weights:out:win  # Generate and display weights (Windows)
```

The quiz balancing tool (`tools/examine-weights.js`) analyzes `src/data/metabolicGameData.json` to ensure cognitive functions and metabolic principles are evenly represented across questions. Target: each function should be ~8.33% (100% / 12 functions).

## Architecture

### Custom Router Implementation

The app uses a **custom client-side router** in `src/Router.jsx` - NOT a library like solid-router. Key characteristics:

- Path-based routing using `window.location.pathname`
- Manual route definitions in `renderRoute()` function
- Browser history integration via `popstate` events
- Vite proxy configuration in `vite.config.js` rewrites all routes to `/index.html` for SPA behavior

**To add a new route:**
1. Add route to `Router.jsx` `renderRoute()` function
2. Add proxy rewrite in `vite.config.js` under `server.proxy`
3. Create corresponding page component in `src/pages/`

### Page Structure

Each page follows this pattern:
```
src/pages/ExamplePage.jsx → Imports component from src/components/Example.jsx
```

Pages are thin wrappers that import the actual component logic. Components contain the UI implementation and import their data from `src/data/*.json`.

### Theme System

Theme management lives in `src/contexts/ThemeContext.jsx`:
- Provides global theme state via SolidJS Context API
- Persists preference to localStorage (key: 'theme')
- Supports system preference detection via `prefers-color-scheme`
- Applies theme to both `documentElement` and `body` with force refresh
- Theme toggle available via `useTheme()` hook

Theme classes applied: `data-theme="dark|light"` on html/body elements.

### Data-Driven Content

All content lives in JSON files under `src/data/`:
- `brotherTypes.json` - E/I swapped type comparisons
- `sisterTypes.json` - J/P swapped type comparisons
- `cognitiveFunctions.json` - Function summaries
- `cognitiveFunctionsDetailed.json` - In-depth function analysis
- `relationships.json` / `relationshipsEnhanced.json` - Type relationship dynamics
- `metabolicPrinciples.json` - Metabolic framework content
- `metabolicGameData.json` - Quiz questions with weighted choices
- `jungianFramework.json` - Theoretical foundation content
- `curatedSources.json` / `rawSources.json` - Research references

**When modifying content:** Edit the JSON files directly. Components import and render this data.

### Styling Patterns

- Global styles: `src/index.css`, `src/App.css`, `src/Router.css`, `src/styles/theme.css`
- Component styles: CSS Modules (`*.module.css`) imported into components
- Theme variables defined in `src/styles/theme.css` with dark/light variants

### PM2 Ecosystem

Production deployment managed by `ecosystem.config.js`:
- App name: `mbti-app`
- Runs `npm run serve` (Vite preview server)
- Port: 3890 (hardcoded across ecosystem, vite.config, package.json)
- Single instance, auto-restart, 1G memory limit

## SolidJS Patterns (NOT React)

Key differences from React when working with SolidJS:
- Use `createSignal()` instead of `useState()`
- Signals return `[getter, setter]` where getter is a **function**: `const [count, setCount] = createSignal(0); console.log(count()); // not count`
- Use `createEffect()` instead of `useEffect()`
- Use `onMount()` and `onCleanup()` for lifecycle
- Props are accessed directly: `props.children` (not destructured by default)
- JSX uses `class` not `className` (though className works for compatibility)
- No dependency arrays - fine-grained reactivity tracks automatically

## Code Formatting

Prettier configuration (`.prettierrc`):
- Single quotes for JS, double quotes for JSX
- Semicolons required
- 2-space tabs, 100 char line width
- Trailing commas everywhere

## Important Notes

- **No .env dependencies**: The app does NOT require environment variables to run. The only env var actually used is `VITE_SITE_NAME` in `vite.config.js` for preview server allowed hosts (defaults to 'localhost' if not set).
- **Port 3890**: Hardcoded throughout the codebase - changing requires updates in multiple files
- **Privacy commitment**: No logging, no cookies, no analytics by default (Matomo tracking exists in Router.jsx but requires external setup)
- **No test suite**: Project currently has no test framework configured
- **Husky configured**: Git hooks via husky + lint-staged (though .husky directory not present in project structure)
