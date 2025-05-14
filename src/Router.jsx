// File: src/Router.jsx (Fixed)

import { createEffect, createSignal } from "solid-js";
import App from "./App";
import BrotherTypesPage from "./pages/BrotherTypesPage";

const Router = () => {
  const [currentPath, setCurrentPath] = createSignal(window.location.pathname);

  // This effect will run whenever navigation occurs
  createEffect(() => {
    // Add event listeners for navigation
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    // Handle link clicks
    const handleLinkClick = (e) => {
      const target = e.target.closest("a");
      if (
        !target ||
        !target.href ||
        target.target === "_blank" ||
        target.getAttribute("rel") === "external"
      ) {
        return;
      }

      try {
        const url = new URL(target.href);
        // Only handle links to our own domain
        if (url.origin === window.location.origin) {
          e.preventDefault();
          window.history.pushState({}, "", url.pathname);
          setCurrentPath(url.pathname); // Update the current path immediately
          window.scrollTo(0, 0);
        }
      } catch (error) {
        console.error("Error handling link click:", error);
      }
    };

    // Listen for popstate events (browser back/forward buttons)
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    // Add event listeners
    document.addEventListener("click", handleLinkClick);
    window.addEventListener("popstate", handlePopState);

    // Clean up event listeners when component unmounts
    return () => {
      document.removeEventListener("click", handleLinkClick);
      window.removeEventListener("popstate", handlePopState);
    };
  });

  // Simple route rendering based on current path
  const renderRoute = () => {
    const path = currentPath();
    console.log("Current path:", path); // For debugging

    if (path === "/" || path === "/index.html") {
      return <App />;
    } else if (path === "/brother-types") {
      return <BrotherTypesPage />;
    } else {
      // 404 or redirect to home
      return <App />;
    }
  };

  return renderRoute();
};

export default Router;
