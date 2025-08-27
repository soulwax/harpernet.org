// File: src/components/SisterTypes.jsx

import { createSignal } from 'solid-js';
import styles from './SisterTypes.module.css';
import TypeTable from './TypeTable';

// Import the data directly
import sisterTypesData from '../data/sisterTypes.json';

const SisterTypes = () => {
  // Create a signal to toggle showing all comparisons or just the main categories
  const [showDetailed, setShowDetailed] = createSignal(true);

  return (
    <div class={styles.sisterTypesContainer} id="sister-types">
      <div class={styles.introSection}>
        <h1>Sister Types and their respective strategies and outlooks</h1>

        <div class={styles.explanationBox}>
          <h3>How Sister Types Work</h3>
          <p>
            Sister types in MBTI have Judging and Perceiving swapped. This means that they share the
            same first three "MBTI letters" (e.g., INTP and INTJ), but differ in the last letter (P
            vs. J). This results in dramatically different cognitive function stacks, which are the
            underlying frameworks that shape how each type perceives and interacts with the world
            and its inner empire.
          </p>
          <p>Each comparison below demonstrates sister type pairs across five key dimensions:</p>
          <ol class={styles.criteriaList}>
            <li>Main driving force</li>
            <li>Early life strategies</li>
            <li>Emotional development and expression as well as subjective inner nuance</li>
            <li>How the type fits within a structure</li>
            <li>The gift of the type to the world</li>
          </ol>
        </div>

        <div class={styles.controlsContainer}>
          {/* <button
            class={styles.toggleButton}
            onClick={() => setShowDetailed(!showDetailed())}
          >
            {showDetailed() ? "Show Summary View" : "Show Detailed View"}
          </button> */}
        </div>
      </div>

      {/* Map through each type comparison and render a TypeTable */}
      {sisterTypesData.sisterTypeComparisons.map((comparison) => (
        <TypeTable
          title={comparison.title}
          type1={comparison.type1}
          type2={comparison.type2}
          rows={comparison.rows}
          detailed={showDetailed()}
        />
      ))}
    </div>
  );
};

export default SisterTypes;
