// File: src/components/About.jsx

import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer} id="about">
      <h2 className={styles.aboutTitle}>About This Thing</h2>

      <div className={styles.aboutContent}>
        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>What This Is</h3>
          <p>
            Side-by-side analysis tool for MBTI types that commonly get confused. Built because
            typical personality descriptions are either too generic or impossibly academic.
          </p>
          <p>
            Covers sister types (J/P swapped), brother types (E/I swapped), detailed cognitive
            functions, metabolic principles, type relationships, and research validation. Plus a
            metabolic exploration game that tries to stump people who've taken every test online.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>Current Features</h3>
          <ul className={styles.featureList}>
            <li>
              <strong>Sister Types:</strong> J/P swapped comparisons with behavioral analysis
            </li>
            <li>
              <strong>Brother Types:</strong> E/I swapped comparisons across five dimensions
            </li>
            <li>
              <strong>Cognitive Functions:</strong> Both overview and detailed developmental
              analysis
            </li>
            <li>
              <strong>Metabolic Framework:</strong> Jung + neuroscience integration
            </li>
            <li>
              <strong>Type Relationships:</strong> Communication patterns between all combinations
            </li>
            <li>
              <strong>Research Section:</strong> Academic validation and curated sources
            </li>
            <li>
              <strong>Metabolic Game:</strong> ~30 questions designed to challenge experienced
              test-takers
            </li>
            <li>
              <strong>Theme Toggle:</strong> Dark/light mode with system preference detection
            </li>
          </ul>
        </div>

        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>Theoretical Foundation</h3>
          <p>
            Based on Jung's initial writing on psychological type and the eight functions of
            cognition, as combined with current MBTI usage and neuroscience studies. Highlights
            function maturation throughout life and unconscious mental functions.
          </p>
          <p>
            The metabolic approach assembles Kępiński's Information Metabolism Theory with existing
            brain imaging studies, constructing practical implementations from both analytical
            psychology as well as modern neuroscience.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>Who Built It</h3>
          <p>
            Some programmer with a neurology background who got tired of MBTI resources that either
            oversimplify everything or disappear into theoretical rabbit holes. Goes by "soulwax"
            online.
          </p>
          <p>
            Goal was making Jung's ideas accessible without dumbing them down. Apparently that
            required building a whole website.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>Technical Stack</h3>
          <p>
            Built with SolidJS for reactive UI, Vite for development, CSS modules for styling, and
            PM2 for production. Client-side routing handles navigation. Designed to work on terrible
            internet connections and be accessible across devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;