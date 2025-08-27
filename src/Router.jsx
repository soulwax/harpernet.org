// File: src/Router.jsx

import { createSignal, onCleanup, onMount } from "solid-js";
import { ThemeProvider } from "./contexts/ThemeContext";
import AboutPage from "./pages/AboutPage";
import BrotherTypesPage from "./pages/BrotherTypesPage";
import CognitiveFunctionsDetailedPage from "./pages/CognitiveFunctionsDetailedPage";
import CognitiveFunctionsPage from "./pages/CognitiveFunctionsPage";
import RelationshipsPage from "./pages/RelationshipsPage";
import SisterTypesPage from "./pages/SisterTypesPage";
import MetabolicPrinciplesPage from "./pages/MetabolicPrinciplesPage";
import "./Router.css";

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

    // Clean up any duplicate elements that might be caused by hot reloading
    setTimeout(() => {
      const allAppElements = document.querySelectorAll(".app");
      if (allAppElements.length > 1) {
        console.warn("Multiple .app elements detected, cleaning up...");
        // Keep the first one, remove others
        for (let i = 1; i < allAppElements.length; i++) {
          allAppElements[i].remove();
        }
      }
    }, 100);
  });

  onCleanup(() => {
    window.removeEventListener("popstate", handlePopState);
  });

  // Render the appropriate page based on the path
  const renderRoute = () => {
    const path = currentPath();
    console.log("Rendering route for path:", path);

    // Completely unmount previous components and only render one
    if (path === "/brother-types") {
      return <BrotherTypesPage key="brother-types" />;
    } else if (path === "/about") {
      return <AboutPage key="about" />;
    } else if (path === "/cognitive-functions") {
      return <CognitiveFunctionsPage key="cognitive-functions" />;
    } else if (path === "/cognitive-functions-detailed") {
      return (
        <CognitiveFunctionsDetailedPage key="cognitive-functions-detailed" />
      );
    } else if (path === "/relationships") {
      return <RelationshipsPage key="relationships" />;
    } else if (path === "/metabolic-principles") {
      return <MetabolicPrinciplesPage key="metabolic-principles" />;
    } else {
      // Default to sister types for any other path (/, /index.html, unknown routes)
      return <SisterTypesPage key="sister-types" />;
    }
  };

  return (
    <ThemeProvider>
      <div className="router-container">{renderRoute()}</div>
    </ThemeProvider>
  );
};

export default Router;