// File: src/components/NavLink.jsx

import { createSignal } from "solid-js";

const NavLink = (props) => {
  // Determine if the current link is active
  const isActive = () => window.location.pathname === props.href;

  // Handle click event to navigate without page refresh
  const handleClick = (e) => {
    e.preventDefault();

    // Update the browser history
    window.history.pushState(null, null, props.href);

    // Scroll to top for new page
    window.scrollTo(0, 0);

    // Dispatch a custom navigation event for the Router to detect
    window.dispatchEvent(
      new CustomEvent("navigation", {
        detail: { path: props.href },
      })
    );
  };

  return (
    <a
      href={props.href}
      class={`${props.class} ${
        isActive() ? props.activeClass || "active" : ""
      }`}
      onClick={handleClick}
    >
      {props.children}
    </a>
  );
};

export default NavLink;
