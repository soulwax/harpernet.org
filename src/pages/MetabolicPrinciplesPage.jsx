// File: src/pages/MetabolicPrinciplesPage.jsx

import Footer from '../components/Footer';
import Header from '../components/Header';
import MetabolicPrinciples from '../components/MetabolicPrinciples';

const MetabolicPrinciplesPage = () => {
  return (
    <div class="app" id="metabolic-principles-page">
      <Header />
      <main class="main-content">
        <MetabolicPrinciples />
      </main>
      <Footer />
    </div>
  );
};

export default MetabolicPrinciplesPage;
