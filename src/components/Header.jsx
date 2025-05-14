// File: src/components/Header.jsx

import { createSignal } from "solid-js";
import styles from "./Header.module.css";

const Header = () => {
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
          <span class={styles.logoText}>MBTI Typology</span>
        </a>
      </div>

      <button
        class={styles.menuToggle}
        onClick={toggleNav}
        aria-label="Toggle navigation menu"
      >
        {isNavOpen() ? "✕" : "☰"}
      </button>

      <nav class={`${styles.nav} ${isNavOpen() ? styles.navOpen : ""}`}>
        <ul class={styles.navList}>
          <li class={styles.navItem}>
            <button
              onClick={() => navigateTo("/")}
              class={`${styles.navButton} ${
                isActive("/") ? styles.activeNav : ""
              }`}
            >
              Sister Types
            </button>
          </li>
          <li class={styles.navItem}>
            <button
              onClick={() => navigateTo("/brother-types")}
              class={`${styles.navButton} ${
                isActive("/brother-types") ? styles.activeNav : ""
              }`}
            >
              Brother Types
            </button>
          </li>
          <li class={styles.navItem}>
            <button
              onClick={() => navigateTo("/about")}
              class={`${styles.navButton} ${
                isActive("/about") ? styles.activeNav : ""
              }`}
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
