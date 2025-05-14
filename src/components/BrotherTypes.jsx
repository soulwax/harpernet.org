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
            Brother types in MBTI share the same cognitive functions since a
            swap of extraversion and introversion does not change the functions
            themselves but merely puts the axes upside down. In simplistic MBTI
            terms, this means they share the last three letters (e.g., INTP and
            ENTP). Don't be fooled by it though. As we spend 60% of our time in
            the first cognitive function engagement, even brother types will end
            up having radically different cognitive function stacks. This is the
            underlying framework that shapes how each type perceives and
            interacts with the world and its inner empire.
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
