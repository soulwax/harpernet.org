// File: src/components/NavLink.jsx

import { createSignal, onCleanup, onMount } from "solid-js";

const NavLink = (props) => {
  const [isActive, setIsActive] = createSignal(false);

  // Check if link is active
  const checkActive = () => {
    const path = window.location.pathname;

    // Special case for home page
    if (props.href === "/" && (path === "/" || path === "/index.html")) {
      setIsActive(true);
    }
    // For other pages - exact match
    else if (props.href === path) {
      setIsActive(true);
    }
    // For pages with trailing slash
    else if (props.href + "/" === path || path + "/" === props.href) {
      setIsActive(true);
    }
    // For anchor links
    else if (props.href.includes("#") && path === "/") {
      setIsActive(props.href.split("#")[0] === path);
    } else {
      setIsActive(false);
    }
  };

  // Navigation handler - FIXED VERSION
  const navigate = (e) => {
    e.preventDefault();

    // Handle anchor links (like #about)
    if (props.href.startsWith("#")) {
      window.location.hash = props.href;
      if (props.onClick) props.onClick();
      return;
    }

    // Handle links with anchors (like /#about)
    if (props.href.includes("/#")) {
      window.location.href = props.href;
      if (props.onClick) props.onClick();
      return;
    }

    // Handle brother-types specifically
    if (props.href === "/brother-types") {
      console.log("Navigating to brother-types page");
      window.history.pushState({}, "", props.href);

      // Forcefully update the DOM - this is a direct fix for the brother-types issue
      window.dispatchEvent(
        new CustomEvent("navigation", {
          detail: { path: props.href, forceUpdate: true },
        })
      );

      if (props.onClick) props.onClick();
      window.scrollTo(0, 0);
      return;
    }

    // Handle all other internal page navigation
    console.log("Regular navigation to:", props.href);
    window.history.pushState({}, "", props.href);
    window.dispatchEvent(
      new CustomEvent("navigation", { detail: { path: props.href } })
    );

    if (props.onClick) props.onClick();
    window.scrollTo(0, 0);
  };

  onMount(() => {
    checkActive();

    // Listen for route changes
    const handleRouteChange = () => {
      console.log("Route changed, checking active state for:", props.href);
      checkActive();
    };

    window.addEventListener("navigation", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);

    // Also check on initial render
    setTimeout(checkActive, 100);
  });

  onCleanup(() => {
    window.removeEventListener("navigation", checkActive);
    window.removeEventListener("popstate", checkActive);
  });

  // Return the actual link element
  return (
    <a
      href={props.href}
      onClick={navigate}
      class={`${props.class || ""} ${
        isActive() ? props.activeClass || "active" : ""
      }`}
      target={props.target}
      rel={props.rel}
    >
      {props.children}
    </a>
  );
};

export default NavLink;