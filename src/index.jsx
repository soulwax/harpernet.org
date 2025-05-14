// File: src/index.jsx

import { render } from "solid-js/web";
import Router from "./Router";
import "./index.css";

// Render the router directly (it handles the page layout internally)
render(() => <Router />, document.getElementById("root"));
