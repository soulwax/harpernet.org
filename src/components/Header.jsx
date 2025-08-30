// File: src/components/Header.jsx

import { createSignal, createEffect, onCleanup } from 'solid-js';
import harperLogo from '@assets/harp.svg';
import solidLogo from '@assets/solid.svg';
import styles from './Header.module.css';
import ThemeToggle from '@components/ThemeToggle';
import { config } from '@config/env.js';

const Header = () => {
  const headerInfo = {
    homePageName: config.siteName,
    homePageUrl: config.siteUrl,
    solidJSHomepage: 'https://solidjs.com',
    githubRepository: config.githubRepo,
    solidJSTitle: `Built with Solid.JS${config.isDevelopment ? ' for the giggles' : ''}`,
    solidJSLogoAlt: 'Solid.JS Logo',
    harperLogoAlt: `${config.siteName} Logo`,
    technology: 'Solid.JS',
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
  const [isAnimating, setIsAnimating] = createSignal(false);

  let navRef;
  let headerRef;

  const toggleNav = () => {
    if (isAnimating()) return;
    setIsAnimating(true);
    setIsNavOpen(!isNavOpen());
    setTimeout(() => setIsAnimating(false), 300);
  };

  const closeNav = () => {
    if (isNavOpen() && !isAnimating()) {
      setIsAnimating(true);
      setIsNavOpen(false);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const navigateTo = (path) => {
    if (isActive(path)) {
      closeNav();
      return;
    }
    setIsAnimating(true);
    setTimeout(() => {
      window.location.href = path;
      setIsNavOpen(false);
      setIsAnimating(false);
    }, 150);
  };

  const isActive = (path) => {
    return window.location.pathname === path;
  };

  const handleClickOutside = (event) => {
    if (isNavOpen() && headerRef && !headerRef.contains(event.target)) {
      closeNav();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && isNavOpen()) {
      closeNav();
    }
  };

  const handlePopState = () => {
    closeNav();
  };

  createEffect(() => {
    if (isNavOpen()) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      window.addEventListener('popstate', handlePopState);
      if (window.innerWidth <= 480) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('popstate', handlePopState);
      document.body.style.overflow = '';
    }
  });

  onCleanup(() => {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('popstate', handlePopState);
    document.body.style.overflow = '';
  });

  const navigationItems = [
    { path: headerInfo.homeUri, label: '🏠 Home', emoji: '🏠' },
    { path: headerInfo.sisterTypesUri, label: 'Sister Types', emoji: '👭' },
    { path: headerInfo.brotherTypesUri, label: 'Brother Types', emoji: '👬' },
    { path: headerInfo.cognitiveFunctionsUri, label: 'Cognitive Functions', emoji: '🧠' },
    { path: headerInfo.cognitiveFunctionsDetailedUri, label: 'Functions In-Depth', emoji: '🔬' },
    { path: headerInfo.relationshipsUri, label: 'Relationships', emoji: '💕' },
    { path: headerInfo.metabolicPrinciplesUri, label: 'Metabolic Principles', emoji: '⚡' },
    { path: headerInfo.metabolicGameUri, label: 'Interactive Game', emoji: '🎮' },
    { path: headerInfo.researchUri, label: 'Research', emoji: '🔍' },
    { path: headerInfo.aboutUri, label: 'About', emoji: 'ℹ️' },
  ];

  return (
    <header class={styles.header} ref={headerRef}>
      <div class={styles.logo}>
        <a href="/" class={styles.logoLink}>
          <div class={styles.logoContainer}>
            <img src={harperLogo} alt={headerInfo.harperLogoAlt} class={styles.harperLogo_base} />
            <div class={styles.harperLogo_gradient}></div>
          </div>
          <span class={styles.logoText}>{config.fullSiteName}</span>
          {config.enableDebug && (
            <small class={styles.buildInfo}>
              v{config.version} ({config.commitHash})
            </small>
          )}
        </a>
      </div>

      <div class={styles.headerControls}>
        <ThemeToggle />
        <button
          class={styles.menuToggle}
          onClick={toggleNav}
          aria-label={headerInfo.menuToggleAriaLabel}
          aria-expanded={isNavOpen()}
          aria-controls="main-navigation"
          disabled={isAnimating()}
        >
          <span
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: isNavOpen() ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            {isNavOpen() ? '✕' : '☰'}
          </span>
        </button>
      </div>

      <nav
        id="main-navigation"
        class={`${styles.nav} ${isNavOpen() ? styles.navOpen : ''}`}
        ref={navRef}
        aria-hidden={!isNavOpen()}
        role="navigation"
        aria-label="Main navigation"
      >
        <ul class={styles.navList} role="list">
          {navigationItems.map((item, index) => (
            <li class={styles.navItem} role="listitem">
              <button
                onClick={() => navigateTo(item.path)}
                class={`${styles.navButton} ${isActive(item.path) ? styles.activeNav : ''}`}
                aria-current={isActive(item.path) ? 'page' : undefined}
                disabled={isAnimating()}
                style={{
                  'transition-delay': isNavOpen() ? `${index * 30}ms` : '0ms',
                }}
              >
                <span
                  style={{
                    opacity: item.emoji && window.innerWidth > 480 ? 1 : 0,
                    'margin-right': '0.5rem',
                  }}
                >
                  {item.emoji}
                </span>
                {item.path === headerInfo.homeUri ? 'Home' : item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {isNavOpen() && (
        <div
          class={styles.menuOverlay}
          onClick={closeNav}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.1)',
            'backdrop-filter': 'blur(2px)',
            'z-index': 999,
            opacity: isNavOpen() ? 1 : 0,
            visibility: isNavOpen() ? 'visible' : 'hidden',
            transition: 'all 0.3s ease',
          }}
        />
      )}
    </header>
  );
};

export default Header;