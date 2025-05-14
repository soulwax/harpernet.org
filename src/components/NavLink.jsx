// File: src/components/NavLink.jsx

import { createSignal, onMount } from "solid-js";
import styles from "./Header.module.css";

/**
 * NavLink component for client-side navigation
 * Uses custom navigation event to update the router without full page reload
 *
 * @param {Object} props Component props
 * @param {string} props.href The link target path
 * @param {string} props.class Additional CSS class names
 * @param {JSX.Element} props.children The content to render inside the link
 */
const NavLink = (props) => {
  const [isActive, setIsActive] = createSignal(false);

  // Check if link is active based on current URL path
  onMount(() => {
    const currentPath = window.location.pathname;
    setIsActive(currentPath === props.href);

    // Listen for route changes
    const handleRouteChange = () => {
      setIsActive(window.location.pathname === props.href);
    };

    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("navigation", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("navigation", handleRouteChange);
    };
  });

  // Handle client-side navigation
  const handleClick = (e) => {
    e.preventDefault();

    // Update browser history
    history.pushState(null, "", props.href);

    // Dispatch custom navigation event for the router
    window.dispatchEvent(
      new CustomEvent("navigation", { detail: { path: props.href } })
    );

    // Scroll to top
    window.scrollTo(0, 0);
  };

  return (
    <a
      href={props.href}
      onClick={handleClick}
      class={`${styles.navLink} ${isActive() ? styles.activeLink : ""} ${
        props.class || ""
      }`}
    >
      {props.children}
    </a>
  );
};

export default NavLink;
