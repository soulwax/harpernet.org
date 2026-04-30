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
The PM2 process is named `harpernet-org`. All PM2 ops live under the `pm2:` script namespace.
```bash
npm start                # Alias for pm2:start (idiomatic npm entry)
npm run pm2:start        # Start ecosystem in production mode
npm run pm2:stop         # Stop the process
npm run pm2:restart      # Hard restart with --update-env
npm run pm2:reload       # Graceful reload (zero-downtime when in cluster mode)
npm run pm2:delete       # Delete from PM2 process list
npm run pm2:status       # Show status for harpernet-org
npm run pm2:logs         # Tail logs
npm run pm2:flush        # Clear log files
npm run pm2:save         # Persist current PM2 process list (for resurrect on boot)
```

### Code Quality
```bash
npm run format           # Format code with Prettier
npm run bump             # Bump patch version
```

### Asset & Quiz Tools
```bash
npm run make:og          # Generate OG/social preview images (tools/make-og.cjs, uses sharp)
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

**Known drift to watch:** `/research` is registered in `Router.jsx` but missing from the `vite.config.js` proxy list — direct loads of `/research` in dev may not be rewritten to `/index.html`. Production (Vercel/`vercel.json`) handles this via a catch-all rewrite, so the issue is dev-only. When adding routes, keep both files in sync.

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
- `homeDescriptions.json` - Home page section copy
- `curatedSources.json` / `rawSources.json` - Research references

**When modifying content:** Edit the JSON files directly. Components import and render this data.

### Styling Patterns

- Global styles: `src/index.css`, `src/App.css`, `src/Router.css`, `src/styles/theme.css`
- Component styles: CSS Modules (`*.module.css`) imported into components
- Theme variables defined in `src/styles/theme.css` with dark/light variants

### Deployment Targets

The site can be deployed two ways and both are live:

**Self-hosted via PM2** (`ecosystem.config.js`):
- App name: `harpernet-org`
- Runs `npm run serve` (Vite preview server) in fork mode
- Port: 3890 (hardcoded across `vite.config.js`, README; PM2 itself doesn't pin the port)
- Single instance, autorestart, 1G memory cap
- Crash-loop guard: `min_uptime: 10s`, `max_restarts: 10`
- 5s `kill_timeout` for graceful shutdown
- Timestamped logs via `time: true` (PM2's modern flag, replaces `log_date_format`)

**Vercel** (`vercel.json`):
- Output directory: `dist` (Vite build output)
- Catch-all rewrite sends every path to `/index.html` for SPA routing
- `@vercel/analytics` is wired up in `Router.jsx` (`inject()` runs on mount), so page views are reported when deployed on Vercel. There is no opt-out flag — if you want to remove tracking, edit `Router.jsx` directly.
- Allowed preview hosts (`harpernet.vercel.app`, `harpernet.pages.dev`) are listed in `vite.config.js` `preview.allowedHosts`.

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

- **No .env dependencies for app code**: The runtime app does NOT require environment variables. The only env var read at config time is `VITE_SITE_NAME` in `vite.config.js` for preview server allowed hosts (defaults to 'localhost' if not set). `dotenv` is loaded synchronously from `vite.config.js`, so a `.env` is optional.
- **Port 3890**: Hardcoded throughout the codebase (`vite.config.js`, `ecosystem.config.js`, README) — changing requires updates in multiple files.
- **Privacy posture**: No cookies; only `theme` in localStorage. The README's privacy pledge applies to self-hosted `harpernet.org`. The codebase contains both Matomo hooks (`window._paq` in `Router.jsx`, requires external snippet to do anything) and live `@vercel/analytics` (active when deployed on Vercel). Adjust expectations accordingly when working with deployment-related changes.
- **No test suite**: Project has no test framework configured. Don't claim a change is verified via tests — verify by running `npm run dev` and exercising the affected page in a browser.
- **Husky + lint-staged**: Configured via `.husky/` (present) and `prepare` script. Git hooks run on commit.
- **`api/` directory**: An `api/` directory exists at the repo root but the submodule was removed in commit `6d93a51`. Leave it alone unless the user asks — it is not part of the SolidJS app build.
