// File: src/pages/AboutPage.jsx

import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';

const AboutPage = () => {
  return (
    <div class="app" id="about-page">
      <Header />
      <main class="main-content">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
