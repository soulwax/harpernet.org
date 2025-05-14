// File: src/components/AppLayout.jsx

import { children } from "solid-js";
import Footer from "./Footer";
import Header from "./Header";

/**
 * AppLayout component that provides a consistent layout structure
 * for all pages in the application
 *
 * @param {Object} props Component props
 * @param {JSX.Element} props.children The content to render inside the layout
 */
const AppLayout = (props) => {
  const c = children(() => props.children);

  return (
    <div class="app">
      <Header />
      <main class="main-content">{c()}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
