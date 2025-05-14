// File: src/components/Header.jsx
// Fallback version

import { createSignal } from "solid-js";
import styles from "./Header.module.css";
import NavLink from "./NavLink";

const Header = () => {
  const [menuOpen, setMenuOpen] = createSignal(false);

  const toggleMenu = () => setMenuOpen(!menuOpen());

  const closeMenu = () => setMenuOpen(false);

  // Special handler just for brother types
  const goToBrotherTypes = (e) => {
    e.preventDefault();
    closeMenu();

    // Try two different approaches:

    // 1. First, try the proper SPA way
    try {
      window.history.pushState({}, "", "/brother-types");
      window.dispatchEvent(
        new CustomEvent("navigation", {
          detail: { path: "/brother-types", forceUpdate: true },
        })
      );
      console.log("SPA navigation attempted to /brother-types");
    } catch (error) {
      console.error("SPA navigation failed:", error);
    }

    // 2. Then after a short delay, if the user is still on the same page, do a full page navigation
    setTimeout(() => {
      if (
        window.location.pathname !== "/brother-types" ||
        !document.querySelector("#brother-types")
      ) {
        console.log("Fallback: using direct location change to /brother-types");
        window.location.href = "/brother-types";
      }
    }, 200);
  };

  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <NavLink href="/" class={styles.logoLink} onClick={closeMenu}>
          <span class={styles.logoText}>
            harpernet.org - Jung from a different perspective
          </span>
        </NavLink>
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
            <NavLink
              href="/"
              class={styles.navLink}
              activeClass={styles.activeLink}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li class={styles.navItem}>
            <NavLink
              href="/sister-types"
              class={styles.navLink}
              activeClass={styles.activeLink}
              onClick={closeMenu}
            >
              Sister Types
            </NavLink>
          </li>
          <li class={styles.navItem}>
            {/* Special handling for Brother Types link */}
            <a
              href="/brother-types"
              class={styles.navLink}
              onClick={goToBrotherTypes}
            >
              Brother Types
            </a>
          </li>
          <li class={styles.navItem}>
            <NavLink href="/#about" class={styles.navLink} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li class={styles.navItem}>
            <NavLink
              href="https://github.com/soulwax/sister-mbti-solidjs"
              target="_blank"
              rel="noopener noreferrer"
              class={styles.navLink}
            >
              GitHub
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
