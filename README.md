# HarperNet.org - MBTI Cognitive Function Analysis

<!-- Image centered with styling: box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); border-radius: 8px; width: 500px -->

!["INFJ LOLCAT"](.github/resources/infjlolcat.gif)

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![SolidJS](https://img.shields.io/badge/SolidJS-1.9.5-blue)](https://www.solidjs.com/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-purple)](https://vitejs.dev/)
[![PM2](https://img.shields.io/badge/PM2-5.3.0-green)](https://pm2.keymetrics.io/)
[![Made by soulwax](https://img.shields.io/badge/Made%20by-soulwax-orange)](https://github.com/soulwax)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![AI](https://img.shields.io/badge/0%25-AI-lightgrey.svg)](https://noaimovement.com/)

It combines rigorous academic research with practical applications and insights offering detailed cognitive function analysis, type relationships, and a unique metabolic framework rooted in Jungian psychology and modern neuroscience.
You should try the game too.
Site should be accessible for the colour blind, and for different devices across the board.
Site should be lightweight for the shittiest internet available.

## 🌟 Features

- **Sister Types** - J/P swapped comparisons (INTP vs INTJ, etc.) with detailed behavioral analysis
- **Brother Types** - E/I swapped comparisons (INTJ vs ENTJ, etc.) across five key dimensions
- **Cognitive Functions Overview** - Essential function summaries and interactions
- **Detailed Cognitive Functions** - In-depth function analysis with developmental stages, shadow exploration, and interactive navigation
- **Metabolic Principles** - Comprehensive framework integrating Jung's psychological types with neuroscience research
- **Type Relationships** - Comprehensive relationship dynamics and communication patterns between all type combinations
- **Research Validation** - Neuroscience studies, psychological research, and clinical applications with curated sources
- **Metabolic Exploration Game/Test** - Immersive personality assessment determining your main metabolic driver through metaphorical landscapes. Currently ~30 questions (Aug '25), designed to challenge experienced test-takers and reveal authentic cognitive patterns. **I do not guarantee correct results at any moment or place.**
- **Dark/Light Theme Toggle** - Accessible theme switching with system preference detection
- **Responsive Design** - Optimized for mobile, tablet, and desktop experiences
- **Client-Side Routing** - Smooth SPA navigation with proper URL handling

---

## 🛠 Tech Stack

- **SolidJS** - Reactive UI framework
- **Vite** - Build tool and dev server
- **CSS Modules** - Component-scoped styling
- **PM2** - Production process management
- **SPA Router** - Client-side navigation

## 🚀 Quick Start

```bash
git clone https://github.com/soulwax/harpernet.org.git
cd harpernet.org
npm install
npm run dev
```

Navigate to `http://localhost:3890`

### Why port 3890? Wtf?

The pm2 ecosystem this webpage depends on is seen within the `ecosystem.config.js` file, hence the **default port of 3890**. You can change this for your own needs.
The page does not depend on .env files.

## Uncompromising Privacy Pledge

I hereby pledge: No logging where the site is hosted (at the time on a real life friend's Intel NUC) who is a security researcher at the [Fraunhofer IST](https://www.ist.fraunhofer.de/).
For maximum privacy I developed a few very simple principles:

- Nginx access logs simply go to `> /dev/null` which means, in layman terms, the logs are written into a space that discards them immediately.
- Nginx **Critical Errors** go to `> /etc/nginx/logs/critical.log` **whereas your personal data, such as browser fingerprint and IP are expunged**. What is a critical error?
  It happens when:
  1. The server encounters an unrecoverable error (like disk space issues, memory exhaustion, or configuration corruption)
  2. A malicious attack is detected and blocked
  3. SSL/TLS certificate validation fails

  In all three cases: No personal data is collected anyway.

- **No cookies**, period.
- One variable stored in your browser's **Local Storage** (NOT a cookie) to remember whether you prefer dark mode or not. Check by yourself:

  Verify: Press F12, go to the Web Storage Tab.

If the site should be hosted by a third party not on [https://harpernet.org](https://harpernet.org) or on vercel by yourself e.g., that might become a different story, and you should read up on [Vercel's privacy policy](https://vercel.com/legal/privacy-policy).

**Be wary of sites that look similar with a different domain.**

**With [https://harpernet.org](https://harpernet.org) there is no logging, period. SSL/TLS is generously provided by the R10 authority, US legal law applied.**

---

## 📁 Project Structure

```sh
harpernet.org
├───.env.local
├───.env.sample
├───.gitignore
├───.prettierrc
├───CHANGELOG.md
├───ecosystem.config.js
├───index.html
├───LICENSE
├───package-lock.json
├───package.json
├───README.md
├───tree.txt
├───vercel.json
├───vite.config.js
├───.github/
│   └───resources/
│       └───infjlolcat.gif
├───public/
│   ├───.htaccess
│   ├───404.html
│   ├───_redirects
│   ├───harp.svg
│   ├───harperhue.png
│   └───vite.svg
├───src/
│   ├───App.css
│   ├───App.jsx
│   ├───index.css
│   ├───index.jsx
│   ├───Router.css
│   ├───Router.jsx
│   ├───assets/
│   │   ├───harp.svg
│   │   └───solid.svg
│   ├───components/
│   │   ├───About.jsx
│   │   ├───About.module.css
│   │   ├───BrotherTypes.jsx
│   │   ├───BrotherTypes.module.css
│   │   ├───CognitiveFunctions.jsx
│   │   ├───CognitiveFunctions.module.css
│   │   ├───DetailedCognitiveFunctions.jsx
│   │   ├───DetailedCognitiveFunctions.module.css
│   │   ├───Footer.jsx
│   │   ├───Footer.module.css
│   │   ├───Header.jsx
│   │   ├───Header.module.css
│   │   ├───HomePage.jsx
│   │   ├───HomePage.module.css
│   │   ├───MetabolicExplorationGame.jsx
│   │   ├───MetabolicExplorationGame.module.css
│   │   ├───MetabolicPrinciples.jsx
│   │   ├───MetabolicPrinciples.module.css
│   │   ├───NavLink.jsx
│   │   ├───Relationships.jsx
│   │   ├───Relationships.module.css
│   │   ├───Research.jsx
│   │   ├───Research.module.css
│   │   ├───SisterTypes.jsx
│   │   ├───SisterTypes.module.css
│   │   ├───ThemeToggle.jsx
│   │   ├───ThemeToggle.module.css
│   │   ├───TypeTable.jsx
│   │   └───TypeTable.module.css
│   ├───contexts/
│   │   └───ThemeContext.jsx
│   ├───data/
│   │   ├───brotherTypes.json
│   │   ├───cognitiveFunctions.json
│   │   ├───cognitiveFunctionsDetailed.json
│   │   ├───curatedSources.json
│   │   ├───homeDescriptions.json
│   │   ├───jungianFramework.json
│   │   ├───metabolicGameData.json
│   │   ├───metabolicPrinciples.json
│   │   ├───rawSources.json
│   │   ├───relationships.json
│   │   ├───relationshipsEnhanced.json
│   │   └───sisterTypes.json
│   ├───pages/
│   │   ├───AboutPage.jsx
│   │   ├───BrotherTypesPage.jsx
│   │   ├───CognitiveFunctionsDetailedPage.jsx
│   │   ├───CognitiveFunctionsPage.jsx
│   │   ├───HomePage.jsx
│   │   ├───MetabolicGamePage.jsx
│   │   ├───MetabolicPrinciplesPage.jsx
│   │   ├───RelationshipsPage.jsx
│   │   ├───ResearchPage.jsx
│   │   └───SisterTypesPage.jsx
│   └───styles/
│       └───theme.css
└───tools/
    ├───make-og.cjs
    ├───test-quiz-weights.js
    └───update_harpernet.sh
```

---

## 📖 Theoretical Foundation

### Core Sources

- Jung's _Collected Works Volume 6_ (CW 6) - _Psychological Types_
- Jung's _On Psychic Energy_ (CW 8) - Energic conception of functions
- Myers & Briggs' _Gifts Differing_ - MBTI development and applications
- Kępiński's Information Metabolism Theory - Biological framework for cognitive processing
- Contemporary neuroscience research - Brain imaging and neural network studies
- Meta-analysis of 130+ studies (2015-2025) on cognitive function neuroscience

### Research Integration

The framework synthesizes Jung's foundational work on psychological types with modern neuroscience applications, providing practical comparisons grounded in cognitive function theory rather than surface-level behavioral descriptions.

---

## 🔧 Development

```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview build locally
npm start           # PM2 production start
```

## 📄 License

GPL-3.0 - See [LICENSE](LICENSE) for details.

---

_Jung did not walk away unchanged. No one ever does._
