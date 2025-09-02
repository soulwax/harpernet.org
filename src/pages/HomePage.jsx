// File: src/pages/HomePage.jsx

import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';

const HomePageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
};

export default HomePageWrapper;
