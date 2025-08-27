# HarperNet.org - MBTI Cognitive Function Analysis

<p align="center">
    <img style="box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); border-radius: 8px" src=".github/resources/infjlolcat.gif" alt="INFJ LOLCAT" width="500px" />
</p>

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![SolidJS](https://img.shields.io/badge/SolidJS-1.9.5-blue)](https://www.solidjs.com/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-purple)](https://vitejs.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Side-by-side MBTI type comparisons focusing on cognitive functions rather than surface behaviors. Built with SolidJS for performance and accessibility.

## 🌟 Features

- **Sister Types** - J/P swapped comparisons (INTP vs INTJ, etc.)
- **Brother Types** - E/I swapped comparisons (INTJ vs ENTJ, etc.)
- **Detailed Cognitive Functions** - In-depth function analysis with developmental stages
- **Type Relationships** - Comprehensive relationship dynamics and communication patterns
- **Responsive Design** - Works across all devices with dark/light themes

## 🛠 Tech Stack

- **SolidJS** - Reactive UI framework
- **Vite** - Build tool and dev server
- **CSS Modules** - Component-scoped styling
- **PM2** - Production process management

## 🚀 Quick Start

```bash
git clone https://github.com/soulwax/harpernet.org.git
cd harpernet.org
npm install
npm run dev
```

Navigate to `http://localhost:3890`

## 📁 Project Structure

```sh
src/
├── components/         # Core UI components
│   ├── About.jsx      # Enhanced about section with citations
│   ├── SisterTypes.jsx # Sister type comparisons
│   ├── BrotherTypes.jsx # Brother type comparisons
│   ├── DetailedCognitiveFunctions.jsx # Function deep-dives
│   ├── TypeRelationships.jsx # Relationship dynamics
│   └── TypeTable.jsx  # Reusable comparison table
├── data/              # JSON data files
│   ├── sisterTypes.json
│   ├── brotherTypes.json
│   ├── cognitiveFunctionsDetailed.json
│   └── relationshipsEnhanced.json
├── pages/             # Page wrappers
└── Router.jsx         # Client-side routing
```

## 🎯 Core Concepts

**Sister Types**: Same cognitive functions, different order (J/P swap)

- INTP (Ti-Ne-Si-Fe) vs INTJ (Ni-Te-Fi-Se)

**Brother Types**: Same functions, different orientation (E/I swap)

- INTJ (Ni-Te-Fi-Se) vs ENTJ (Te-Ni-Se-Fi)

**Cognitive Functions**: Eight mental processes underlying all personality types, analyzed through developmental stages and shadow manifestations.

## 📚 Academic Foundation

Built on Jung's _Psychological Types_ and modern MBTI research, integrating insights from:

- Jung's Collected Works (Vol. 6)
- Myers & Briggs' _Gifts Differing_
- Contemporary analytical psychology research
- Neuroscience validation studies

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

_Making Jung's cognitive function theory accessible without dumbing it down._
