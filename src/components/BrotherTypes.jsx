// File: src/components/BrotherTypes.jsx

import { createSignal } from "solid-js";
import styles from "./BrotherTypes.module.css";
import TypeTable from "./TypeTable";

// Import the data directly - in a real app this would be a dynamic import
import brotherTypesData from "../data/brotherTypes.json";

const BrotherTypes = () => {
  // Create a signal to toggle showing all comparisons or just the main categories
  const [showDetailed, setShowDetailed] = createSignal(true);

  return (
    <div class={styles.brotherTypesContainer} id="brother-types">
      <div class={styles.introSection}>
        <h1>Brother Types and their respective strategies</h1>
        <h2>A brother type has extraversion and introversion swapped.</h2>
        <h2>
          To clarify: a sister type has judging and perceiving swapped instead
        </h2>

        <div class={styles.explanationBox}>
          <h3>How Brother Types Work</h3>
          <p>
            Brother types in MBTI share the same cognitive functions but with
            opposite orientations (extraverted vs. introverted). This creates
            fascinating differences in how these types interact with the world
            while maintaining core similarities in their approach.
          </p>
          <p>
            For example, ENTP and INTP share the same functions (Ne, Ti, Fe,
            Si), but in different positions and orientations, resulting in
            similar analytical approaches but different levels of external
            engagement.
          </p>
          <p>
            Each comparison below examines brother type pairs across five key
            dimensions:
          </p>
          <ol class={styles.criteriaList}>
            <li>Primary cognitive drivers and their expression</li>
            <li>Characteristic approaches to problem-solving and engagement</li>
            <li>Information processing and communication styles</li>
            <li>Energy management and focus patterns</li>
            <li>Distinctive contributions to teams and communities</li>
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
      {brotherTypesData.brotherTypeComparisons.map((comparison) => (
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

export default BrotherTypes;
