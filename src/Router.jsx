// File: src/Router.jsx

import { createSignal, onCleanup, onMount } from "solid-js";
import AppLayout from "./components/AppLayout";
import BrotherTypesPage from "./pages/BrotherTypesPage";
import HomePage from "./pages/HomePage";

/**
 * Router component that handles client-side routing
 * Uses window location pathname to determine which page to render
 * Wraps the rendered page in the AppLayout component
 */
const Router = () => {
  const [currentPath, setCurrentPath] = createSignal(window.location.pathname);

  // Handler for custom navigation events
  const handleCustomNavigation = (event) => {
    setCurrentPath(event.detail.path);
    window.scrollTo(0, 0);
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

  // Route mapping
  const routes = {
    "/": HomePage,
    "/index.html": HomePage,
    "/brother-types": BrotherTypesPage,
  };

  // Simple route rendering based on current path
  const renderRoute = () => {
    const path = currentPath();
    console.log("Router rendering path:", path); // For debugging

    // Get the component for the current path or default to HomePage
    const RouteComponent = routes[path] || HomePage;

    // Wrap the route component in the AppLayout
    return (
      <AppLayout>
        <RouteComponent />
      </AppLayout>
    );
  };

  return renderRoute();
};

export default Router;
