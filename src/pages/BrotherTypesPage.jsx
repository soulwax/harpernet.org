// File: src/pages/BrotherTypesPage.jsx

import BrotherTypes from '../components/BrotherTypes';
import Footer from '../components/Footer';
import Header from '../components/Header';

const BrotherTypesPage = () => {
  return (
    <div class="app" id="brother-types-page">
      <Header />
      <main class="main-content">
        <BrotherTypes />
      </main>
      <Footer />
    </div>
  );
};

export default BrotherTypesPage;