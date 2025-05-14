// File: src/components/Header.jsx

import { createSignal } from "solid-js";
import styles from "./Header.module.css";
import NavLink from "./NavLink";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen());
  };

  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <NavLink href="/" class={styles.logoLink}>
          <span class={styles.logoText}>Harpernet</span>
        </NavLink>
      </div>

      <button class={styles.menuToggle} onClick={toggleMenu}>
        {isMenuOpen() ? "✕" : "☰"}
      </button>

      <nav class={`${styles.nav} ${isMenuOpen() ? styles.navOpen : ""}`}>
        <ul class={styles.navList}>
          <li class={styles.navItem}>
            <NavLink href="/">Sister Types</NavLink>
          </li>
          <li class={styles.navItem}>
            <NavLink href="/brother-types">Brother Types</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
