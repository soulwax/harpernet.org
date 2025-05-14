// File: src/components/Header.jsx

import { createSignal } from "solid-js";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = createSignal(false);

  const toggleMenu = () => setMenuOpen(!menuOpen());

  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <a href="/" class={styles.logoLink}>
          <span class={styles.logoText}>MBTI Sister Types</span>
        </a>
      </div>

      <button class={styles.menuToggle} onClick={toggleMenu}>
        <span class={styles.menuIcon}>☰</span>
      </button>

      <nav class={`${styles.nav} ${menuOpen() ? styles.navOpen : ""}`}>
        <ul class={styles.navList}>
          <li class={styles.navItem}>
            <a href="/" class={styles.navLink}>
              Home
            </a>
          </li>
          <li class={styles.navItem}>
            <a href="#types" class={styles.navLink}>
              Type Comparisons
            </a>
          </li>
          <li class={styles.navItem}>
            <a href="#about" class={styles.navLink}>
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
