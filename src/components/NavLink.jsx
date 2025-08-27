// File: src/components/NavLink.jsx

import { createSignal, createEffect } from 'solid-js';

const NavLink = (props) => {
  // Create a signal to track if this link is active
  const [isActive, setIsActive] = createSignal(false);

  // Update active state when pathname changes
  const updateActiveState = () => {
    const currentPath = window.location.pathname;
    setIsActive(currentPath === props.href);
  };

  // Initial update
  createEffect(() => {
    updateActiveState();
  });

  // Listen for navigation and popstate events to update active state
  const handleNavigation = () => {
    updateActiveState();
  };

  // Set up event listeners
  if (typeof window !== 'undefined') {
    window.addEventListener('navigation', handleNavigation);
    window.addEventListener('popstate', handleNavigation);
  }

  // Handle click event to navigate without page refresh
  const handleClick = (e) => {
    e.preventDefault();

    // Don't navigate if we're already on this page
    if (window.location.pathname === props.href) {
      return;
    }

    // Update the browser history
    window.history.pushState(null, null, props.href);

    // Scroll to top for new page
    window.scrollTo(0, 0);

    // Dispatch a custom navigation event for the Router to detect
    window.dispatchEvent(
      new CustomEvent('navigation', {
        detail: { path: props.href },
      }),
    );

    console.log('NavLink clicked, navigating to:', props.href);
  };

  return (
    <a
      href={props.href}
      class={`${props.class} ${isActive() ? props.activeClass || 'active' : ''}`}
      onClick={handleClick}
    >
      {props.children}
    </a>
  );
};

export default NavLink;
