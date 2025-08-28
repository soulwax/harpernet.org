// File: src/components/Header.jsx

import { createSignal } from 'solid-js';
import harperLogo from '../assets/harp.svg';
import solidLogo from '../assets/solid.svg';
import styles from './Header.module.css';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const headerInfo = {
    solidJSHomepage: 'https://solidjs.com',
    solidJSTitle: 'Built with Solid.JS',
    solidJSLogoAlt: 'Solid.JS Logo',
    harperLogoAlt: 'HarperNet.org Logo',
    homeUri: '/',
    sisterTypesUri: '/sister-types',
    brotherTypesUri: '/brother-types',
    cognitiveFunctionsUri: '/cognitive-functions',
    cognitiveFunctionsDetailedUri: '/cognitive-functions-detailed',
    relationshipsUri: '/relationships',
    metabolicPrinciplesUri: '/metabolic-principles',
    metabolicGameUri: '/metabolic-game',
    researchUri: '/research',
    aboutUri: '/about',
    menuToggleAriaLabel: 'Toggle navigation menu',
  };

  const [isNavOpen, setIsNavOpen] = createSignal(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen());
  };

  // Direct navigation function
  const navigateTo = (path) => {
    window.location.href = path;
    setIsNavOpen(false);
  };

  // Check if current path matches
  const isActive = (path) => {
    return window.location.pathname === path;
  };

  return (
    <header class={styles.header}>
      {/* Logo */}
      <div class={styles.logo}>
        <a href="/" class={styles.logoLink}>
          <img src={harperLogo} alt={headerInfo.harperLogoAlt} class={styles.harperLogo} />
          <span class={styles.logoText}>HarperNet.org</span>
        </a>
      </div>

      {/* Main Navigation - Desktop */}
      <nav class={styles.desktopNav}>
        <ul class={styles.navList}>
          <li class={styles.navItem}>
            <button
              onClick={() => navigateTo(headerInfo.homeUri)}
              class={`${styles.navButton} ${isActive(headerInfo.homeUri) ? styles.activeNav : ''}`}
            >
              Home
            </button>
          </li>
          <li class={styles.navItem}>
            <button
              onClick={() => navigateTo(headerInfo.sisterTypesUri)}
              class={`${styles.navButton} ${isActive(headerInfo.sisterTypesUri) ? styles.activeNav : ''}`}
            >
              Sister Types
            </button>
          </li>
          <li class={styles.navItem}>
            <button
              onClick={() => navigateTo(headerInfo.brotherTypesUri)}
              class={`${styles.navButton} ${isActive(headerInfo.brotherTypesUri) ? styles.activeNav : ''}`}
            >
              Brother Types
            </button>
          </li>
          <li class={styles.navItem}>
            <button
              onClick={() => navigateTo(headerInfo.cognitiveFunctionsUri)}
              class={`${styles.navButton} ${isActive(headerInfo.cognitiveFunctionsUri) ? styles.activeNav : ''}`}
            >
              Cognitive Functions
            </button>
          </li>
          <li class={styles.navItem}>
            <button
              onClick={() => navigateTo(headerInfo.cognitiveFunctionsDetailedUri)}
              class={`${styles.navButton} ${isActive(headerInfo.cognitiveFunctionsDetailedUri) ? styles.activeNav : ''}`}
            >
              Functions In-Depth
            </button>
          </li>
          <li class={styles.navItem}>
            <button
              onClick={() => navigateTo(headerInfo.relationshipsUri)}
              class={`${styles.navButton} ${isActive(headerInfo.relationshipsUri) ? styles.activeNav : ''}`}
            >
              Relationships
            </button>
          </li>
          <li class={styles.navItem}>
            <button
              onClick={() => navigateTo(headerInfo.metabolicPrinciplesUri)}
              class={`${styles.navButton} ${isActive(headerInfo.metabolicPrinciplesUri) ? styles.activeNav : ''}`}
            >
              Metabolic Principles
            </button>
          </li>
          <li class={styles.navItem}>
            <button
              onClick={() => navigateTo(headerInfo.metabolicGameUri)}
              class={`${styles.navButton} ${isActive(headerInfo.metabolicGameUri) ? styles.activeNav : ''}`}
            >
              Interactive Game
            </button>
          </li>
          <li class={styles.navItem}>
            <button
              onClick={() => navigateTo(headerInfo.aboutUri)}
              class={`${styles.navButton} ${isActive(headerInfo.aboutUri) ? styles.activeNav : ''}`}
            >
              About
            </button>
          </li>
        </ul>
      </nav>

      {/* Right Side Controls */}
      <div class={styles.controls}>
        <ThemeToggle />

        <button
          class={styles.menuToggle}
          onClick={toggleNav}
          aria-label={headerInfo.menuToggleAriaLabel}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav class={`${styles.mobileNav} ${isNavOpen() ? styles.mobileNavOpen : ''}`}>
        <ul class={styles.mobileNavList}>
          <li class={styles.mobileNavItem}>
            <button
              onClick={() => navigateTo(headerInfo.homeUri)}
              class={`${styles.mobileNavButton} ${isActive(headerInfo.homeUri) ? styles.activeMobileNav : ''}`}
            >
              🏠 Home
            </button>
          </li>
          <li class={styles.mobileNavItem}>
            <button
              onClick={() => navigateTo(headerInfo.sisterTypesUri)}
              class={`${styles.mobileNavButton} ${isActive(headerInfo.sisterTypesUri) ? styles.activeMobileNav : ''}`}
            >
              👯 Sister Types
            </button>
          </li>
          <li class={styles.mobileNavItem}>
            <button
              onClick={() => navigateTo(headerInfo.brotherTypesUri)}
              class={`${styles.mobileNavButton} ${isActive(headerInfo.brotherTypesUri) ? styles.activeMobileNav : ''}`}
            >
              👬 Brother Types
            </button>
          </li>
          <li class={styles.mobileNavItem}>
            <button
              onClick={() => navigateTo(headerInfo.cognitiveFunctionsUri)}
              class={`${styles.mobileNavButton} ${isActive(headerInfo.cognitiveFunctionsUri) ? styles.activeMobileNav : ''}`}
            >
              🧠 Cognitive Functions
            </button>
          </li>
          <li class={styles.mobileNavItem}>
            <button
              onClick={() => navigateTo(headerInfo.cognitiveFunctionsDetailedUri)}
              class={`${styles.mobileNavButton} ${isActive(headerInfo.cognitiveFunctionsDetailedUri) ? styles.activeMobileNav : ''}`}
            >
              🔬 Functions In-Depth
            </button>
          </li>
          <li class={styles.mobileNavItem}>
            <button
              onClick={() => navigateTo(headerInfo.relationshipsUri)}
              class={`${styles.mobileNavButton} ${isActive(headerInfo.relationshipsUri) ? styles.activeMobileNav : ''}`}
            >
              💕 Relationships
            </button>
          </li>
          <li class={styles.mobileNavItem}>
            <button
              onClick={() => navigateTo(headerInfo.metabolicPrinciplesUri)}
              class={`${styles.mobileNavButton} ${isActive(headerInfo.metabolicPrinciplesUri) ? styles.activeMobileNav : ''}`}
            >
              ⚡ Metabolic Principles
            </button>
          </li>
          <li class={styles.mobileNavItem}>
            <button
              onClick={() => navigateTo(headerInfo.metabolicGameUri)}
              class={`${styles.mobileNavButton} ${isActive(headerInfo.metabolicGameUri) ? styles.activeMobileNav : ''}`}
            >
              🎮 Interactive Game
            </button>
          </li>
          <li class={styles.mobileNavItem}>
            <button
              onClick={() => navigateTo(headerInfo.aboutUri)}
              class={`${styles.mobileNavButton} ${isActive(headerInfo.aboutUri) ? styles.activeMobileNav : ''}`}
            >
              ℹ️ About
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile backdrop */}
      {isNavOpen() && <div class={styles.backdrop} onClick={() => setIsNavOpen(false)}></div>}
    </header>
  );
};

export default Header;
