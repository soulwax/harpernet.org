// File: src/Router.jsx

import { createSignal, onCleanup, onMount } from "solid-js";
import AboutPage from "./pages/AboutPage";
import BrotherTypesPage from "./pages/BrotherTypesPage";
import SisterTypesPage from "./pages/SisterTypesPage";

/**
 * Router component that handles client-side routing
 * Uses window location pathname to determine which page to render
 * Wraps the rendered page in the AppLayout component
 */
const Router = () => {
  // Get initial path
  const initialPath = window.location.pathname;
  const [currentPath, setCurrentPath] = createSignal(initialPath);

  // Handle popstate (browser back/forward)
  const handlePopState = () => {
    setCurrentPath(window.location.pathname);
  };

  onMount(() => {
    // Listen for browser back/forward
    window.addEventListener("popstate", handlePopState);
    console.log("Router mounted, path:", initialPath);
  });

  onCleanup(() => {
    window.removeEventListener("popstate", handlePopState);
  });

  // Render the appropriate page based on the path
  const renderRoute = () => {
    const path = currentPath();
    console.log("Rendering route for path:", path);

    if (path === "/" || path === "/index.html") {
      return <SisterTypesPage />;
    } else if (path === "/brother-types") {
      return <BrotherTypesPage />;
    } else if (path === "/about") {
      return <AboutPage />;
    } else {
      // Default to sister types for unknown routes
      console.log("Unknown route, defaulting to SisterTypesPage");
      return <SisterTypesPage />;
    }
  };

  return renderRoute();
};

export default Router;
