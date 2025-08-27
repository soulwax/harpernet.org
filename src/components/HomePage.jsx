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
      description: 'Explore cognitive metabolism through a trippy quiz kind of game',
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
            <span class={styles.titleSub}>C.G.Jung's Frameworks, Impasse and solutions</span>
          </h1>
          
          <p class={styles.heroDescription}>
            Side-by-side comparisons, neuroscience research, and Jung's original framework combined with modern psychological practice and insight.
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
        <h2 class={styles.sectionTitle}>Features at a glance</h2>
        
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
              original conception of cognitive functions as manifestations, and his all-encompassing attempt at psychic energy flow 
              and information processing patterns.
            </p>
          </div>
          
          <div class={styles.methodCard}>
            <h3>🧪 Scientific Integration</h3>
            <p>
              Modern neuroscience research including fMRI studies, EEG research, 
              and brain network analysis that tend to validate Jung's theoretical framework with 
              empirical evidence, which is suprirising, considering these are tests found on bus magazines.
            </p>
          </div>
          
          <div class={styles.methodCard}>
            <h3>🩺 Clinical Applications</h3>
            <p>
              Integrates Kępiński's Information Metabolism Theory and contemporary therapeutic 
              approach possibilities, hoping to provided practical application for personal development and maybe why your relationship is like polishing the brass on the titanic. But we all go down.
            </p>
          </div>
          
          <div class={styles.methodCard}>
            <h3>🔄 Comparative Analysis</h3>
            <p>
              Uses systematic side-by-side comparison, focusing on functional differences 
              rather than surface behaviors, a revelation for underlying cognitive current and architecture of 
              of people and their "types".
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
              <li>Developmental stages of each cognitive function</li>
              <li>Understand shadow manifestations and blind spots which should help with shadow integration.</li>
              <li>Analyze positional dynamics (dominant, auxiliary, etc.)</li>
            </ul>
          </div>
          
          <div class={styles.capabilityGroup}>
            <h3>🧠 Research Integration</h3>
            <ul>
              <li>Access evidence based neuroscientific validations of cognitive functions. They exist as imaging of brains has shown.</li>
              <li>Clinical applications and therapeutic approaches</li>
              <li>Study cross-cultural and longitudinal research results I dug up</li>
            </ul>
          </div>
          
          <div class={styles.capabilityGroup}>
            <h3>💡 Practical Applications</h3>
            <ul>
              <li>Understand relationship dynamics between types</li>
              <li>Learn communication strategies for different types</li>
              <li>Explore career implications of cognitive preferences</li>
              <li>Apply metabolic principles to personal development</li>
            </ul>
          </div>
          
          <div class={styles.capabilityGroup}>
            <h3>🎯 Interactive Features</h3>
            <ul>
              <li>Toggle between detailed and summary view modes</li>
              <li>Navigate between related concepts to gain patterned understanding</li>
              <li>Please just use the dark theme if you are not *that* kind of person. :^)</li>
              <li>Explore your own thought processing with the game. You will not regret it.</li>
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
              <h4>Comparison of Sister or Brother Types</h4>
              <p>Compare types with shared and disparate cognitive function types who, on the surface, seem similar, in order to get the idea about how they see life.</p>
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
              <h4>Relationships</h4>
              <p>How different types interact and communicate effectively</p>
            </div>
          </div>
          
          <div class={styles.step}>
            <div class={styles.stepNumber}>4</div>
            <div class={styles.stepContent}>
              <h4>Into the rabbit hole of Metabolic Principles</h4>
              <p>Attempt at integration of Jung's analytical psychology with evidence based methodologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section class={styles.disclaimerSection}>
        <h2 class={styles.disclaimerTitle}>Important Disclaimer</h2>
        
        <div class={styles.disclaimerContent}>
          <p>
            <strong>Educational Purpose Only:</strong> The stuff provided on here 
            is for educational and research purposes. While based. On established psychological 
            theory and some contemporary research, personality type analysis should not be considered 
            a substitute for professional psychological assessment or counseling. I seriously hope you guys don't do this.
          </p>
          
          <p>
            <strong>No Guarantee of Accuracy:</strong> I make no claims regarding the absolute 
            and infallible accuracy of personality type determination or prediction provided on here. Individual personality 
            is complex and multifaceted, and type theory represents one framework among many 
            for understanding human differential psychology a bit better. It usually correlates well with the evidence based and lexical OCEAN (or "Big5").
          </p>
          
          <p>
            <strong>Personal Responsibility:</strong> You! assume full responsibility for how 
            you interpret and apply this information. I assume 
            no liability for any personal, professional, or interpersonal consequences arising 
            from the use of providing the info on here.
          </p>
          
          <p>
            <strong>Professional Consultation:</strong> For serious psychological concerns, 
            relationship issues or major life decisions, seriously, just consult qualified mental 
            health professionals even though I personally hate most shrinks (opinion, they can help), than relying solely on personality type analysis.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;