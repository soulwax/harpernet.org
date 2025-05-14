// File: src/components/Header.jsx (Fixed)

import { createSignal } from "solid-js";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = createSignal(false);

  const toggleMenu = () => setMenuOpen(!menuOpen());

  const closeMenu = () => setMenuOpen(false);

  // Custom navigation handler for internal links
  const navigate = (e, href) => {
    e.preventDefault();
    window.history.pushState({}, "", href);

    // Dispatch a custom event that the Router will listen for
    window.dispatchEvent(
      new CustomEvent("navigation", { detail: { path: href } })
    );

    closeMenu();
    window.scrollTo(0, 0);
  };

  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <a href="/" class={styles.logoLink} onClick={(e) => navigate(e, "/")}>
          <span class={styles.logoText}>Harper Net</span>
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
            <a
              href="/"
              class={styles.navLink}
              onClick={(e) => navigate(e, "/")}
            >
              Home
            </a>
          </li>
          <li class={styles.navItem}>
            <a
              href="/#types"
              class={styles.navLink}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/#types";
                closeMenu();
              }}
            >
              Sister Types
            </a>
          </li>
          <li class={styles.navItem}>
            <a
              href="/brother-types"
              class={styles.navLink}
              onClick={(e) => navigate(e, "/brother-types")}
            >
              Brother Types
            </a>
          </li>
          <li class={styles.navItem}>
            <a
              href="/#about"
              class={styles.navLink}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/#about";
                closeMenu();
              }}
            >
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
