// File: src/Router.jsx

import { createSignal, onCleanup, onMount } from "solid-js";
import SisterTypesPage from "./pages/SisterTypesPage";
import BrotherTypesPage from "./pages/BrotherTypesPage";
import AboutPage from "./pages/AboutPage";

const Router = () => {
  const [currentPath, setCurrentPath] = createSignal(window.location.pathname);

  // Handler for custom navigation events
  const handleCustomNavigation = (event) => {
    setCurrentPath(event.detail.path);
  };

  // Handler for popstate (browser back/forward)
  const handlePopState = () => {
    setCurrentPath(window.location.pathname);
    window.scrollTo(0, 0);
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

    if (path === "/" || path === "/index.html") {
      return <SisterTypesPage />;
    } else if (path === "/brother-types") {
      return <BrotherTypesPage />;
    } else if (path === "/about") {
      return <AboutPage />;
    } else {
      // 404 or redirect to home
      return <SisterTypesPage />;
    }
  };

  return renderRoute();
};

export default Router;
