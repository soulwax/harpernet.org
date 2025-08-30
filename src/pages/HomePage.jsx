// File: src/pages/HomePage.jsx
import { config } from '@config/env.js';
import SEOHead from '@components/SEOHead';
import BuildInfo from '@components/BuildInfo';
import { generateSEOMeta } from '@utils/seo.js';
import homeDescriptions from '@data/homeDescriptions.json';
import styles from './HomePage.module.css';

const HomePage = () => {
  const seo = generateSEOMeta({
    title: 'Home',
    description: `Welcome to ${config.siteName} - your guide to personality psychology`,
    path: '/'
  });

  return (
    <>
      <SEOHead {...seo} />

      <div class={styles.homePage}>
        <section class={styles.hero}>
          <h1>Welcome to {config.siteName}</h1>
          <p class={styles.subtitle}>
            Explore personality types, cognitive functions, and relationships
          </p>

          {config.enableDebug && (
            <p class={styles.envInfo}>
              Running in {config.environment} mode
            </p>
          )}
        </section>

        <section class={styles.features}>
          <h2>Explore Our Content</h2>
          {/* Your existing content using homeDescriptions data */}
        </section>

        {/* Show build info in development/staging */}
        <BuildInfo />
      </div>
    </>
  );
};

export default HomePage;
