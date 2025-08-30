// File: src/components/Header.jsx

import { createSignal, createEffect, onCleanup } from 'solid-js';
import { useLocation, useNavigate } from '@solidjs/router';
import harperLogo from '@assets/harp.svg';
import styles from './Header.module.css';
import ThemeToggle from '@components/ThemeToggle';
import { config } from '@config/env.js';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  // Use SolidJS Router instead of window.location
  const navigateTo = (path) => {
    if (isActive(path)) {
      closeNav();
      return;
    }
    setIsAnimating(true);
    setTimeout(() => {
      navigate(path);
      setIsNavOpen(false);
      setIsAnimating(false);
    }, 150);
  };

  const isActive = (path) => {
    return location.pathname === path;
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

  createEffect(() => {
    if (isNavOpen()) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      if (window.innerWidth <= 480) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    }
  });

  // Close menu on route change (automatic with SolidJS Router)
  createEffect(() => {
    location.pathname; // Track pathname changes
    closeNav(); // Close menu on route change
  });

  onCleanup(() => {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleKeyDown);
    document.body.style.overflow = '';
  });

  const navigationItems = [
    { path: '/', label: '🏠 Home', emoji: '🏠' },
    { path: '/sister-types', label: 'Sister Types', emoji: '👭' },
    { path: '/brother-types', label: 'Brother Types', emoji: '👬' },
    { path: '/cognitive-functions', label: 'Cognitive Functions', emoji: '🧠' },
    { path: '/cognitive-functions-detailed', label: 'Functions In-Depth', emoji: '🔬' },
    { path: '/relationships', label: 'Relationships', emoji: '💕' },
    { path: '/metabolic-principles', label: 'Metabolic Principles', emoji: '⚡' },
    { path: '/metabolic-game', label: 'Interactive Game', emoji: '🎮' },
    { path: '/research', label: 'Research', emoji: '🔍' },
    { path: '/about', label: 'About', emoji: 'ℹ️' },
  ];

  return (
    <header class={styles.header} ref={headerRef}>
      <div class={styles.logo}>
        <a href="/" class={styles.logoLink}>
          <div class={styles.logoContainer}>
            <img src={harperLogo} alt={`${config.siteName} Logo`} class={styles.harperLogo_base} />
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
          aria-label="Toggle navigation menu"
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
                {item.path === '/' ? 'Home' : item.label}
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
