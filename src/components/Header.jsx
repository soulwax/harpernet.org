// File: src/components/Header.jsx

import { createSignal } from "solid-js";
import styles from "./Header.module.css";
import NavLink from "./NavLink";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = createSignal(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen());
  };

  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <NavLink href="/" class={styles.logoLink}>
          <span class={styles.logoText}>MBTI Typology</span>
        </NavLink>
      </div>

      <button class={styles.menuToggle} onClick={toggleNav}>
        {isNavOpen() ? "✕" : "☰"}
      </button>

      <nav class={`${styles.nav} ${isNavOpen() ? styles.navOpen : ""}`}>
        <ul class={styles.navList}>
          <li class={styles.navItem}>
            <NavLink
              href="/"
              class={styles.navLink}
              activeClass={styles.activeLink}
            >
              Sister Types
            </NavLink>
          </li>
          <li class={styles.navItem}>
            <NavLink
              href="/brother-types"
              class={styles.navLink}
              activeClass={styles.activeLink}
            >
              Brother Types
            </NavLink>
          </li>
          <li class={styles.navItem}>
            <a
              href="#about"
              class={styles.navLink}
              onClick={() => setIsNavOpen(false)}
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
