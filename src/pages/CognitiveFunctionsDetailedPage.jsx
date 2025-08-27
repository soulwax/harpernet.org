// File: src/pages/CognitiveFunctionsDetailedPage.jsx

import DetailedCognitiveFunctions from '../components/DetailedCognitiveFunctions';
import Footer from '../components/Footer';
import Header from '../components/Header';

const CognitiveFunctionsDetailedPage = () => {
  return (
    <div class="app" id="cognitive-functions-detailed-page">
      <Header />
      <main class="main-content">
        <DetailedCognitiveFunctions />
      </main>
      <Footer />
    </div>
  );
};

export default CognitiveFunctionsDetailedPage;