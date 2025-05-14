# MBTI Sister Type Comparison

<p align="center">
    <img style="box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); border-radius: 8px" src=".github/resources/infjlolcat.gif" alt="INFJ LOLCAT" width="500px" />
</p>

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![SolidJS](https://img.shields.io/badge/SolidJS-1.9.5-blue)](https://www.solidjs.com/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-purple)](https://vitejs.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A side-by-side comparison of MBTI personality types, focusing on the sister type relationships (J/P switch). Built with SolidJS and Vite for optimal performance.

## 📋 Table of Contents

- [MBTI Sister Type Comparison](#mbti-sister-type-comparison)
  - [📋 Table of Contents](#-table-of-contents)
  - [🔍 Overview](#-overview)
  - [🌐 Live Demo](#-live-demo)
  - [✨ Key Features](#-key-features)
  - [🛠 Tech Stack](#-tech-stack)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [📁 Project Structure](#-project-structure)
  - [🧩 Component Architecture](#-component-architecture)
  - [📝 Development Commands](#-development-commands)
  - [🔧 Configuration](#-configuration)
    - [Port Configuration](#port-configuration)
    - [Environment Variables](#environment-variables)
  - [🤝 Contributing](#-contributing)
    - [Development Guidelines](#development-guidelines)
  - [📦 Deployment](#-deployment)
    - [Using PM2 (Recommended for Production)](#using-pm2-recommended-for-production)
    - [Static Deployment](#static-deployment)
  - [📚 How MBTI Sister Types Work](#-how-mbti-sister-types-work)
  - [📄 License](#-license)

## 🔍 Overview

This application provides a comprehensive comparison between MBTI sister types - personality types that have the Judging (J) and Perceiving (P) preferences swapped. For example, INTP vs INTJ, ENFP vs ENFJ, etc. The comparison highlights the core differences in cognitive functions, behaviors, and interaction styles between these closely related personality types.

## 🌐 Live Demo

Check out the live demo at [sistertypes.madtec.org](https://sistertypes.madtec.org)

## ✨ Key Features

- Side-by-side comparison of all eight MBTI sister type pairs
- Detailed breakdown of cognitive functions with emoji symbols
- Responsive design that works on desktop and mobile
- Accessible UI with keyboard navigation support
- Fast loading and rendering with SolidJS

## 🛠 Tech Stack

- **Frontend Framework**: [SolidJS](https://www.solidjs.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Process Manager**: [PM2](https://pm2.keymetrics.io/)
- **CSS**: CSS Modules for component-scoped styling
- **Deployment**: Server-side rendering via Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/soulwax/sister-mbti-solidjs.git
   cd sister-mbti-solidjs
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open your browser and navigate to:

   ```url
   http://localhost:3890
   ```

## 📁 Project Structure

```tree
sister-mbti-solidjs/
├── public/                 # Static files
│   └── vite.svg           # Vite logo
├── src/                    # Source code
│   ├── assets/            # Images and other assets
│   ├── components/        # Reusable components
│   │   ├── Footer.jsx    # Site footer
│   │   ├── Header.jsx    # Site header with navigation
│   │   └── TypeTable.jsx # Component for displaying type comparisons
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   ├── index.jsx         # Entry point
│   └── index.css         # Global CSS
├── .env.sample            # Environment variables template
├── ecosystem.config.js    # PM2 configuration
├── vite.config.js         # Vite configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

## 🧩 Component Architecture

- **App.jsx**: Main container component that holds the application structure and state
- **Header.jsx**: Navigation component with responsive menu
- **TypeTable.jsx**: Reusable component for displaying the comparison between two personality types
- **Footer.jsx**: Component for site footer with links and information

## 📝 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run the server (for production)
npm run serve

# PM2 commands
npm run start     # Start with PM2 (production)
npm run stop      # Stop PM2 instance
npm run restart   # Restart PM2 instance
npm run delete    # Delete PM2 instance
npm run status    # Check PM2 status
npm run logs      # View PM2 logs

# Watch mode (auto-reload on file changes)
npm run watch

# Debug mode
npm run debug
```

## 🔧 Configuration

### Port Configuration

The application runs on port 3890 by default. You can modify this in the following files:

- `vite.config.js` - For development server
- `package.json` - In the serve script
- `ecosystem.config.js` - For PM2 configuration

### Environment Variables

Copy the `.env.sample` file to `.env` and customize any environment variables:

```bash
cp .env.sample .env
```

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and component patterns
- Add comments for complex logic
- Update documentation for significant changes
- Ensure responsive design works across devices
- Test all features before submitting PR

## 📦 Deployment

### Using PM2 (Recommended for Production)

1. Build the application:

   ```bash
   npm run build
   ```

2. Start using PM2:

   ```bash
   npm run start
   ```

3. To check status:

   ```bash
   npm run status
   ```

### Static Deployment

For static hosting platforms (Vercel, Netlify, etc.):

1. Build the application:

   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider.

## 📚 How MBTI Sister Types Work

Sister types in MBTI have the same cognitive functions but in a different order. For example:

- INTP: Ti-Ne-Si-Fe
- INTJ: Ni-Te-Fi-Se

This swap of the J/P preference changes the order and orientation of the cognitive functions, resulting in different behaviors and strategies while maintaining some core similarities.

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [soulwax](https://github.com/soulwax)
