// File: src/components/Header.jsx
// Logo served from public/ folder for consistent access in dev and production

import { createSignal, onMount } from 'solid-js';
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
    aboutUri: '/about',
    menuToggleAriaLabel: 'Toggle navigation menu',
    metabolicGameUri: '/metabolic-game',
  };

  const [isNavOpen, setIsNavOpen] = createSignal(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen());
  };

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    setIsNavOpen(false);
  };

  const isActive = (path) => {
    return window.location.pathname === path;
  };

  onMount(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <button onClick={() => navigateTo(headerInfo.homeUri)} class={styles.logoLink}>
          <img src="/harp.svg" alt={headerInfo.harperLogoAlt} class={styles.harperLogo_simple} />
          <span class={styles.logoText}>HarperNet.org</span>
        </button>
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
              Explore Metabolism through Game
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