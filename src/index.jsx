// File: src/index.jsx

import { render } from "solid-js/web";
import Router from "./Router";
import "./index.css";

/**
 * Main entry point for the application
 * Renders the Router component which handles page routing and layout
 */
render(() => <Router />, document.getElementById("root"));
