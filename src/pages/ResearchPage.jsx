import { createSignal } from 'solid-js';

// ✅ Clean imports
import Header from '@components/Header';
import Footer from '@components/Footer';
import Research from '@components/Research';
import SEOHead from '@components/SEOHead';
import { config } from '@config/env.js';
import { generateSEOMeta } from '@utils/seo.js';
import curatedSources from '@data/curatedSources.json';
import rawSources from '@data/rawSources.json';

const ResearchPage = () => {
  const seo = generateSEOMeta({
    title: 'Research',
    description: `Research sources and methodology for ${config.siteName}`,
    path: '/research',
  });

  return (
    <>
      <SEOHead {...seo} />
      <div class="app" id="research-page">
        <Header />
        <main class="main-content">
          <Research curatedSources={curatedSources} rawSources={rawSources} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ResearchPage;
