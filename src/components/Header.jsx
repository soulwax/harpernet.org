// File: src/components/Header.jsx

import { createSignal, createEffect, onCleanup } from 'solid-js';
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
  const [isAnimating, setIsAnimating] = createSignal(false);

  let navRef;
  let headerRef;

  const toggleNav = () => {
    if (isAnimating()) return; // Prevent rapid toggling during animation

    setIsAnimating(true);
    setIsNavOpen(!isNavOpen());

    // Reset animation lock after transition completes
    setTimeout(() => setIsAnimating(false), 300);
  };

  const closeNav = () => {
    if (isNavOpen() && !isAnimating()) {
      setIsAnimating(true);
      setIsNavOpen(false);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  // Enhanced navigation with smooth transitions
  const navigateTo = (path) => {
    if (isActive(path)) {
      closeNav();
      return;
    }

    // Add visual feedback before navigation
    setIsAnimating(true);

    // Small delay for visual feedback
    setTimeout(() => {
      window.location.href = path;
      setIsNavOpen(false);
      setIsAnimating(false);
    }, 150);
  };

  // Check if current path matches
  const isActive = (path) => {
    return window.location.pathname === path;
  };

  // Close menu when clicking outside
  const handleClickOutside = (event) => {
    if (isNavOpen() && headerRef && !headerRef.contains(event.target)) {
      closeNav();
    }
  };

  // Close menu on escape key
  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && isNavOpen()) {
      closeNav();
    }
  };

  // Close menu on route change (for SPA navigation)
  const handlePopState = () => {
    closeNav();
  };

  // Set up event listeners
  createEffect(() => {
    if (isNavOpen()) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      window.addEventListener('popstate', handlePopState);

      // Prevent body scroll when menu is open on mobile
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

  // Cleanup on component unmount
  onCleanup(() => {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('popstate', handlePopState);
    document.body.style.overflow = '';
  });

  // Navigation items with enhanced accessibility
  const navigationItems = [
    { path: headerInfo.homeUri, label: '🏠 Home', emoji: '🏠' },
    { path: headerInfo.sisterTypesUri, label: 'Sister Types', emoji: '👭' },
    { path: headerInfo.brotherTypesUri, label: 'Brother Types', emoji: '👬' },
    { path: headerInfo.cognitiveFunctionsUri, label: 'Cognitive Functions', emoji: '🧠' },
    { path: headerInfo.cognitiveFunctionsDetailedUri, label: 'Functions In-Depth', emoji: '🔬' },
    { path: headerInfo.relationshipsUri, label: 'Relationships', emoji: '💕' },
    { path: headerInfo.metabolicPrinciplesUri, label: 'Metabolic Principles', emoji: '⚡' },
    { path: headerInfo.metabolicGameUri, label: 'Interactive Game', emoji: '🎮' },
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
          <span class={styles.logoText}>HarperNet.org</span>
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
                  // Stagger animation delays for elegant reveal
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

      {/* Backdrop overlay for mobile */}
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
