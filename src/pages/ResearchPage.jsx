// File: src/pages/ResearchPage.jsx

import Research from '../components/Research';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ResearchPage = () => {
  return (
    <div class="app" id="research-page">
      <Header />
      <main class="main-content">
        <Research />
      </main>
      <Footer />
    </div>
  );
};

export default ResearchPage;