// File: src/components/Header.jsx (Updated)

import { createSignal } from "solid-js";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = createSignal(false);

  const toggleMenu = () => setMenuOpen(!menuOpen());

  const closeMenu = () => setMenuOpen(false);

  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <a href="/" class={styles.logoLink}>
          <span class={styles.logoText}>
            The school of Carl Gustav Jung - A different view
          </span>
        </a>
      </div>

      <button
        class={styles.menuToggle}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span class={styles.menuIcon}>☰</span>
      </button>

      <nav class={`${styles.nav} ${menuOpen() ? styles.navOpen : ""}`}>
        <ul class={styles.navList}>
          <li class={styles.navItem}>
            <a href="/" class={styles.navLink} onClick={closeMenu}>
              Home
            </a>
          </li>
          <li class={styles.navItem}>
            <a href="#types" class={styles.navLink} onClick={closeMenu}>
              Sister Types
            </a>
          </li>
          <li class={styles.navItem}>
            <a href="#about" class={styles.navLink} onClick={closeMenu}>
              About
            </a>
          </li>
          <li class={styles.navItem}>
            <a
              href="https://github.com/soulwax/sister-mbti-solidjs"
              target="_blank"
              rel="noopener noreferrer"
              class={styles.navLink}
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
