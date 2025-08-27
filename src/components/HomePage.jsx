// File: src/components/HomePage.jsx

import { createSignal } from 'solid-js';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [currentSection, setCurrentSection] = createSignal('introduction');

  const navigateTo = (path) => {
    window.location.href = path;
  };

  const features = [
    {
      title: 'Sister Types',
      route: '/sister-types',
      description: 'Compare MBTI types with the same cognitive functions but different J/P preferences (e.g., INTP vs INTJ)',
      icon: '👯‍♀️',
      color: '#4CAF50'
    },
    {
      title: 'Brother Types',
      route: '/brother-types', 
      description: 'Compare types with the same functions but different E/I orientations (e.g., INTJ vs ENTJ)',
      icon: '🤝',
      color: '#2196F3'
    },
    {
      title: 'Cognitive Functions',
      route: '/cognitive-functions',
      description: 'Overview of the eight cognitive functions underlying all personality types',
      icon: '🧠',
      color: '#FF9800'
    },
    {
      title: 'Functions In-Depth',
      route: '/cognitive-functions-detailed',
      description: 'Deep analysis with developmental stages, shadow manifestations, and positional dynamics',
      icon: '🔬',
      color: '#9C27B0'
    },
    {
      title: 'Type Relationships',
      route: '/relationships',
      description: 'Comprehensive relationship dynamics and communication patterns between types',
      icon: '💕',
      color: '#E91E63'
    },
    {
      title: 'Metabolic Principles',
      route: '/metabolic-principles',
      description: 'Information processing framework integrating Jung\'s psychology with modern neuroscience',
      icon: '⚡',
      color: '#607D8B'
    },
    {
      title: 'Interactive Game',
      route: '/metabolic-game',
      description: 'Explore cognitive metabolism through an interactive gaming experience',
      icon: '🎮',
      color: '#795548'
    },
    {
      title: 'About & Research',
      route: '/about',
      description: 'Academic foundation, research validation, and comprehensive source citations',
      icon: '📚',
      color: '#455A64'
    }
  ];

  return (
    <div class={styles.homeContainer}>
      {/* Hero Section */}
      <section class={styles.hero}>
        <div class={styles.heroContent}>
          <h1 class={styles.title}>
            <span class={styles.titleMain}>HarperNet.org</span>
            <span class={styles.titleSub}>MBTI Cognitive Function Analysis</span>
          </h1>
          
          <p class={styles.heroDescription}>
            Deep dive into the cognitive functions underlying personality types through side-by-side comparisons, 
            neuroscience research, and Jung's original framework combined with modern psychological insights.
          </p>

          <div class={styles.heroStats}>
            <div class={styles.stat}>
              <span class={styles.statNumber}>8</span>
              <span class={styles.statLabel}>Cognitive Functions</span>
            </div>
            <div class={styles.stat}>
              <span class={styles.statNumber}>16</span>
              <span class={styles.statLabel}>MBTI Types</span>
            </div>
            <div class={styles.stat}>
              <span class={styles.statNumber}>45+</span>
              <span class={styles.statLabel}>Research Studies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section class={styles.featuresSection}>
        <h2 class={styles.sectionTitle}>Explore All Features</h2>
        
        <div class={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div 
              class={styles.featureCard}
              style={{ '--feature-color': feature.color }}
              onClick={() => navigateTo(feature.route)}
            >
              <div class={styles.featureIcon}>{feature.icon}</div>
              <h3 class={styles.featureTitle}>{feature.title}</h3>
              <p class={styles.featureDescription}>{feature.description}</p>
              <button class={styles.featureButton}>
                Explore {feature.title}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section class={styles.methodologySection}>
        <h2 class={styles.sectionTitle}>Methodology</h2>
        
        <div class={styles.methodologyGrid}>
          <div class={styles.methodCard}>
            <h3>🏛️ Jungian Foundation</h3>
            <p>
              Built directly on Carl Jung's <em>Psychological Types</em> (1921), focusing on the 
              original conception of cognitive functions as manifestations of psychic energy flow 
              and information processing patterns.
            </p>
          </div>
          
          <div class={styles.methodCard}>
            <h3>🧪 Scientific Integration</h3>
            <p>
              Incorporates modern neuroscience research including fMRI studies, EEG research, 
              and brain network analysis that validate Jung's theoretical framework with 
              empirical evidence.
            </p>
          </div>
          
          <div class={styles.methodCard}>
            <h3>🩺 Clinical Applications</h3>
            <p>
              Integrates Kępiński's Information Metabolism Theory and contemporary therapeutic 
              approaches, providing practical applications for personal development and 
              relationship understanding.
            </p>
          </div>
          
          <div class={styles.methodCard}>
            <h3>🔄 Comparative Analysis</h3>
            <p>
              Uses systematic side-by-side comparisons focusing on functional differences 
              rather than surface behaviors, revealing the underlying cognitive architecture 
              of personality types.
            </p>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section class={styles.sourcesSection}>
        <h2 class={styles.sectionTitle}>Academic Sources</h2>
        
        <div class={styles.sourceCategories}>
          <div class={styles.sourceCategory}>
            <h3>Primary Sources</h3>
            <ul class={styles.sourceList}>
              <li>Jung, C.G. - <em>Psychological Types</em> (Collected Works Vol. 6, 1921)</li>
              <li>Jung, C.G. - <em>On Psychic Energy</em> (Collected Works Vol. 8)</li>
              <li>Myers, Isabel Briggs & Briggs, Katherine Cook - <em>Gifts Differing</em></li>
              <li>Kępiński, Antoni - <em>Information Metabolism Theory</em> (1974)</li>
            </ul>
          </div>
          
          <div class={styles.sourceCategory}>
            <h3>Contemporary Research</h3>
            <ul class={styles.sourceList}>
              <li>Meta-analysis of 45+ neuroscience studies (2015-2025)</li>
              <li>fMRI research on cognitive function neural networks</li>
              <li>EEG studies on brainwave patterns by type preference</li>
              <li>Cross-cultural validation studies across 30+ cultures</li>
              <li>Longitudinal research tracking 20-year type stability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What You Can Do Section */}
      <section class={styles.capabilitiesSection}>
        <h2 class={styles.sectionTitle}>What You Can Do Here</h2>
        
        <div class={styles.capabilitiesGrid}>
          <div class={styles.capabilityGroup}>
            <h3>🔍 Deep Analysis</h3>
            <ul>
              <li>Compare types sharing the same cognitive functions</li>
              <li>Explore developmental stages of each function</li>
              <li>Understand shadow manifestations and blind spots</li>
              <li>Analyze positional dynamics (dominant, auxiliary, etc.)</li>
            </ul>
          </div>
          
          <div class={styles.capabilityGroup}>
            <h3>🧠 Research Integration</h3>
            <ul>
              <li>Access neuroscience validation of cognitive functions</li>
              <li>Explore brain imaging studies supporting type theory</li>
              <li>Review clinical applications and therapeutic approaches</li>
              <li>Study cross-cultural and longitudinal research findings</li>
            </ul>
          </div>
          
          <div class={styles.capabilityGroup}>
            <h3>💡 Practical Applications</h3>
            <ul>
              <li>Understand relationship dynamics between different types</li>
              <li>Learn communication strategies for type differences</li>
              <li>Explore career implications of cognitive preferences</li>
              <li>Apply metabolic principles to personal development</li>
            </ul>
          </div>
          
          <div class={styles.capabilityGroup}>
            <h3>🎯 Interactive Features</h3>
            <ul>
              <li>Toggle between detailed and summary view modes</li>
              <li>Navigate seamlessly between related concepts</li>
              <li>Switch between dark and light themes</li>
              <li>Explore through interactive gaming experiences</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section class={styles.quickStartSection}>
        <h2 class={styles.sectionTitle}>Quick Start Guide</h2>
        
        <div class={styles.quickStartSteps}>
          <div class={styles.step}>
            <div class={styles.stepNumber}>1</div>
            <div class={styles.stepContent}>
              <h4>Start with Sister or Brother Types</h4>
              <p>Compare types with shared cognitive functions to understand the core differences</p>
            </div>
          </div>
          
          <div class={styles.step}>
            <div class={styles.stepNumber}>2</div>
            <div class={styles.stepContent}>
              <h4>Dive into Cognitive Functions</h4>
              <p>Explore the eight functions in detail with developmental stages and applications</p>
            </div>
          </div>
          
          <div class={styles.step}>
            <div class={styles.stepNumber}>3</div>
            <div class={styles.stepContent}>
              <h4>Understand Relationships</h4>
              <p>Learn how different types interact and communicate effectively</p>
            </div>
          </div>
          
          <div class={styles.step}>
            <div class={styles.stepNumber}>4</div>
            <div class={styles.stepContent}>
              <h4>Explore Metabolic Principles</h4>
              <p>Integrate Jung's framework with modern neuroscience research</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section class={styles.disclaimerSection}>
        <h2 class={styles.disclaimerTitle}>Important Disclaimer</h2>
        
        <div class={styles.disclaimerContent}>
          <p>
            <strong>Educational Purpose Only:</strong> The information provided on HarperNet.org 
            is for educational and research purposes only. While based on established psychological 
            theory and contemporary research, personality type analysis should not be considered 
            a substitute for professional psychological assessment or counseling.
          </p>
          
          <p>
            <strong>No Guarantee of Accuracy:</strong> We make no claims regarding the absolute 
            accuracy of personality type determinations or predictions. Individual personality 
            is complex and multifaceted, and type theory represents one framework among many 
            for understanding human psychology.
          </p>
          
          <p>
            <strong>Personal Responsibility:</strong> Users assume full responsibility for how 
            they interpret and apply this information. HarperNet.org and its creators assume 
            no liability for any personal, professional, or interpersonal consequences arising 
            from the use of this information.
          </p>
          
          <p>
            <strong>Professional Consultation:</strong> For serious psychological concerns, 
            relationship issues, or major life decisions, please consult qualified mental 
            health professionals rather than relying solely on personality type analysis.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;