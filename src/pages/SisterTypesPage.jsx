// File: src/pages/SisterTypesPage.jsx

import Footer from "../components/Footer";
import Header from "../components/Header";
import SisterTypes from "../components/SisterTypes";

const SisterTypesPage = () => {
  return (
    <div class="app" id="sister-types-page">
      <Header />
      <main class="main-content">
        <SisterTypes />
      </main>
      <Footer />
    </div>
  );
};

export default SisterTypesPage;