// File: src/index.jsx

import { render } from 'solid-js/web';
import Router from './Router';
import './index.css';

// Make sure any existing content is removed
const rootElement = document.getElementById('root');
if (rootElement) {
  // Clear any existing content
  rootElement.innerHTML = '';
}

// Render the application
render(() => <Router />, rootElement);
