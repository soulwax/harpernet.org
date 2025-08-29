// File: src/components/Header.jsx

import { createSignal } from 'solid-js';
import harperLogo from '../assets/harp.svg';
import solidLogo from '../assets/solid.svg';
import styles from './Header.module.css';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const headerInfo = {
    solidJSHomepage: 'https://solidjs.com',
    githubRepository: 'https://github.com/soulwax/harpernet.org',
    solidJSTitle: 'Built with Solid.JS for the giggles',
    solidJSLogoAlt: 'Solid.JS Logo',
    harperLogoAlt: 'HarperNet.org Logo',
    technology: 'Solid.JS',
    homeUri: '/',
    sisterTypesUri: '/sister-types',
    brotherTypesUri: '/brother-types',
    cognitiveFunctionsUri: '/cognitive-functions',
    cognitiveFunctionsDetailedUri: '/cognitive-functions-detailed',
    relationshipsUri: '/relationships',
    metabolicPrinciplesUri: '/metabolic-principles',
    metabolicGameUri: '/metabolic-game',
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
      <div class={styles.logo}>
        <a href="/" class={styles.logoLink}>
          <img src={harperLogo} alt={headerInfo.harperLogoAlt} class={styles.harperLogo_simple} />
          <span class={styles.logoText}>HarperNet.org</span>
        </a>
      </div>

      <div class={styles.headerControls}>
        <ThemeToggle />

        <button
          class={styles.menuToggle}
          onClick={toggleNav}
          aria-label={headerInfo.menuToggleAriaLabel}
        >
          {isNavOpen() ? '✕' : '☰'}
        </button>
      </div>

      <nav class={`${styles.nav} ${isNavOpen() ? styles.navOpen : ''}`}>
        <ul class={styles.navList}>
          <li class={styles.navItem}>
            <button
              onClick={() => navigateTo(headerInfo.homeUri)}
              class={`${styles.navButton} ${isActive(headerInfo.homeUri) ? styles.activeNav : ''}`}
            >
              🏠 Home
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
    </header>
  );
};

export default Header;
