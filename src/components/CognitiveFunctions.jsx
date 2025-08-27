// File: src/components/CognitiveFunctions.jsx

import { createSignal } from 'solid-js';
import styles from './CognitiveFunctions.module.css';

// Import the data directly
import cogFunctionsData from '../data/cognitiveFunctions.json';

const CognitiveFunctions = () => {
  // Create a signal to toggle showing all details or a summary
  const [showDetailed, setShowDetailed] = createSignal(true);

  return (
    <div class={styles.cogFunctionsContainer} id="cognitive-functions">
      <div class={styles.introSection}>
        <h1>Cognitive Functions Explained</h1>

        <div class={styles.explanationBox}>
          <h3>Understanding the Cognitive Functions</h3>
          <p>
            Cognitive functions are the building blocks of personality type in Jungian psychology
            and the MBTI system. Each personality type has a specific "stack" of these functions
            which determines how they perceive information and make decisions. There are eight
            cognitive functions in total – four functions (Sensing, Intuition, Thinking, and
            Feeling), each with two attitudes (Extraverted and Introverted).
          </p>
          <p>
            This guide breaks down each cognitive function in detail, explaining its core
            characteristics, typical behaviors, and which personality types use it in different
            positions in their function stack.
          </p>
        </div>

        {/* Map through each cognitive function and render its details */}
        {cogFunctionsData.cognitiveFunctions.map((funcGroup) => (
          <div class={styles.functionGroup}>
            <h2 class={styles.functionGroupTitle}>{funcGroup.title}</h2>
            <div class={styles.functionsContainer}>
              {funcGroup.functions.map((func) => (
                <div class={styles.functionCard}>
                  <div class={styles.functionHeader} style={{ 'background-color': func.color }}>
                    <h3 class={styles.functionTitle}>
                      <span class={styles.functionSymbol}>{func.symbol}</span>
                      {func.name} ({func.shorthand})
                    </h3>
                  </div>
                  <div class={styles.functionContent}>
                    <p class={styles.functionDescription}>{func.description}</p>

                    <h4 class={styles.sectionTitle}>Characteristics</h4>
                    <ul class={styles.characteristicsList}>
                      {func.characteristics.map((trait) => (
                        <li>{trait}</li>
                      ))}
                    </ul>

                    <h4 class={styles.sectionTitle}>In Different Positions</h4>
                    <div class={styles.positionsGrid}>
                      <div class={styles.positionSection}>
                        <h5>Dominant in:</h5>
                        <p>{func.dominant.join(', ')}</p>
                      </div>
                      <div class={styles.positionSection}>
                        <h5>Auxiliary in:</h5>
                        <p>{func.auxiliary.join(', ')}</p>
                      </div>
                      <div class={styles.positionSection}>
                        <h5>Tertiary in:</h5>
                        <p>{func.tertiary.join(', ')}</p>
                      </div>
                      <div class={styles.positionSection}>
                        <h5>Inferior in:</h5>
                        <p>{func.inferior.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CognitiveFunctions;