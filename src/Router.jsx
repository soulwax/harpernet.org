// File: src/Router.jsx (Further Improved)

import { createSignal, onCleanup, onMount } from "solid-js";
import App from "./App";
import BrotherTypesPage from "./pages/BrotherTypesPage";

const Router = () => {
  const [currentPath, setCurrentPath] = createSignal(window.location.pathname);

  // Handler for custom navigation events
  const handleCustomNavigation = (event) => {
    setCurrentPath(event.detail.path);
  };

  // Handler for popstate (browser back/forward)
  const handlePopState = () => {
    setCurrentPath(window.location.pathname);
    // window.scrollTo(0, 0);
  };

  onMount(() => {
    // Listen for custom navigation events
    window.addEventListener("navigation", handleCustomNavigation);

    // Listen for browser back/forward
    window.addEventListener("popstate", handlePopState);

    // Initial path setting
    setCurrentPath(window.location.pathname);
  });

  onCleanup(() => {
    window.removeEventListener("navigation", handleCustomNavigation);
    window.removeEventListener("popstate", handlePopState);
  });

  // Simple route rendering based on current path
  const renderRoute = () => {
    const path = currentPath();
    console.log("Router rendering path:", path); // For debugging

    if (path === "/" || path === "/index.html") {
      return <App />;
    } else if (path === "/brother-types") {
      return <BrotherTypesPage />;
    } else if (path === "/sister-types") {
      return <SisterTypesPage />;
    } else {
      // 404 or redirect to home
      return <App />;
    }
  };

  return renderRoute();
};

export default Router;
