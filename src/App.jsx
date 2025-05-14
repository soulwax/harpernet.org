// File: src/App.jsx (Updated to be a landing page)

import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";

const App = () => {
  return (
    <div class="app">
      <Header />
      <main class="main-content">
        <div class="container">
          <div class="hero-section">
            <h1>Harpernet.ORG</h1>
            <p>
              Differences between personality types with detailed comparisons.
            </p>

            <div class="comparison-options">
              <a href="/sister-types" class="comparison-btn">
                Sister Types
                <span class="description">Compare types with J/P swapped</span>
              </a>
              <a href="/brother-types" class="comparison-btn">
                Brother Types
                <span class="description">Compare types with E/I swapped</span>
              </a>
            </div>

            <div class="about-preview">
              <h2>About This Project</h2>
              <p>
                A detailed exploration of MBTI personality type relationships...
              </p>
              <a href="/#about">Learn more</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
