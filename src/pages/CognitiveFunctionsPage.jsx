// File: src/pages/CognitiveFunctionsPage.jsx

import CognitiveFunctions from '../components/CognitiveFunctions';
import Footer from '../components/Footer';
import Header from '../components/Header';

const CognitiveFunctionsPage = () => {
  return (
    <div class="app" id="cognitive-functions-page">
      <Header />
      <main class="main-content">
        <CognitiveFunctions />
      </main>
      <Footer />
    </div>
  );
};

export default CognitiveFunctionsPage;