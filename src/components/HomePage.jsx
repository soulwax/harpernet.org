// File: src/components/HomePage.jsx

import styles from './HomePage.module.css';
import homeDescriptions from '../data/homeDescriptions.json';
import dotenv from 'dotenv';
dotenv.config();

const HomePage = () => {
  const siteName = process.env.VITE_SITE_NAME || 'localhost';
  const siteUrl = process.env.VITE_SITE_URL || `http://${siteName}:3890`;
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div class={styles.homeContainer}>
      {/* Hero Section */}
      <section class={styles.hero}>
        <div class={styles.heroContent}>
          <h1 class={styles.title}>
            <span class={styles.titleMain}>{siteName}</span>
            <span class={styles.titleSub}>{homeDescriptions.hero.title.sub}</span>
          </h1>

          <p class={styles.heroDescription}>{homeDescriptions.hero.description}</p>

          <div class={styles.heroStats}>
            {homeDescriptions.hero.stats.map((stat) => (
              <div class={styles.stat}>
                <span class={styles.statNumber}>{stat.number}</span>
                <span class={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section class={styles.featuresSection}>
        <h2 class={styles.sectionTitle}>{homeDescriptions.features.title}</h2>
        <div class={styles.featuresGrid}>
          {homeDescriptions.features.items.map((feature) => (
            <div
              class={styles.featureCard}
              style={{ '--feature-color': feature.color }}
              onClick={() => navigateTo(feature.route)}
            >
              <div class={styles.featureIcon}>{feature.icon}</div>
              <h3 class={styles.featureTitle}>{feature.title}</h3>
              <p class={styles.featureDescription}>{feature.description}</p>
              <button class={styles.featureButton}>Explore {feature.title}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section class={styles.methodologySection}>
        <h2 class={styles.sectionTitle}>{homeDescriptions.methodology.title}</h2>
        <div class={styles.methodologyGrid}>
          {homeDescriptions.methodology.items.map((method) => (
            <div class={styles.methodCard}>
              <h3>
                {method.icon} {method.title}
              </h3>
              <p>{method.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sources Section */}
      <section class={styles.sourcesSection}>
        <h2 class={styles.sectionTitle}>{homeDescriptions.sources.title}</h2>
        <div class={styles.sourceCategories}>
          {homeDescriptions.sources.categories.map((category) => (
            <div class={styles.sourceCategory}>
              <h3>{category.title}</h3>
              <ul class={styles.sourceList}>
                {category.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section class={styles.capabilitiesSection}>
        <h2 class={styles.sectionTitle}>{homeDescriptions.capabilities.title}</h2>
        <div class={styles.capabilitiesGrid}>
          {homeDescriptions.capabilities.groups.map((group) => (
            <div class={styles.capabilityGroup}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start Section */}
      <section class={styles.quickStartSection}>
        <h2 class={styles.sectionTitle}>{homeDescriptions.quickStart.title}</h2>
        <div class={styles.quickStartSteps}>
          {homeDescriptions.quickStart.steps.map((step) => (
            <div class={styles.step}>
              <div class={styles.stepNumber}>{step.number}</div>
              <div class={styles.stepContent}>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer Section */}
      <section class={styles.disclaimerSection}>
        <h2 class={styles.disclaimerTitle}>{homeDescriptions.disclaimer.title}</h2>
        <div class={styles.disclaimerContent}>
          {homeDescriptions.disclaimer.content.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
