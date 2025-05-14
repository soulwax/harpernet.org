// File: src/index.jsx

import { render } from "solid-js/web";
import Router from "./Router";
import "./index.css";

// Wait for DOMContentLoaded for reliable initialization
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing application");

  // Set a flag to indicate router is initialized
  window.routerInitialized = true;

  // Render the application
  render(() => <Router />, document.getElementById("root"));
});

// Fallback initialization in case DOMContentLoaded already fired
if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  if (!window.routerInitialized) {
    console.log("DOM already loaded, initializing application");
    window.routerInitialized = true;
    render(() => <Router />, document.getElementById("root"));
  }
}
