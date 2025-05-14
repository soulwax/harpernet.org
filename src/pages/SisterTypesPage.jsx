// File: src/pages/SisterTypesPage.jsx

import SisterTypes from "../components/SisterTypes";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SisterTypesPage = () => {
  return (
    <div class="app">
      <Header />
      <main class="main-content">
        <SisterTypes />
      </main>
      <Footer />
    </div>
  );
};

export default SisterTypesPage;
