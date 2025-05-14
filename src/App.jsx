// File: src/App.jsx

import { onMount } from "solid-js";

/**
 * App component - legacy entry point that redirects to the home page
 * This is kept for backward compatibility with older code
 */
const App = () => {
  onMount(() => {
    // Redirect to the home page (SisterTypes)
    window.location.href = "/";
  });

  return <div>Redirecting to home page...</div>;
};

export default App;
