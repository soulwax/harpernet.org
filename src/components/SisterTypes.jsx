// File: src/components/SisterTypes.jsx

import { createSignal } from "solid-js";
import styles from "./SisterTypes.module.css";
import TypeTable from "./TypeTable";

// Import the data directly
import sisterTypesData from "../data/sisterTypes.json";

const SisterTypes = () => {
  // Create a signal to toggle showing all comparisons or just the main categories
  const [showDetailed, setShowDetailed] = createSignal(true);

  return (
    <div class={styles.sisterTypesContainer} id="sister-types">
      <div class={styles.introSection}>
        <h1>Sister Types and their respective strategies</h1>
        <h2>A sister type has judging and perceiving swapped.</h2>
        <h2>
          To clarify: a brother type has extraversion and introversion swapped
          instead
        </h2>

        <div class={styles.explanationBox}>
          <h3>How Sister Types Work</h3>
          <p>
            Sister types in MBTI have the same cognitive functions but in a
            different order. This creates fascinating differences in how these
            types approach problems and interact with the world, while sharing
            some core similarities.
          </p>
          <p>
            For example, INTP and INTJ share the same middle letters (NT), but
            their different preferences for judging vs. perceiving result in
            entirely different cognitive function stacks.
          </p>
          <p>
            Each comparison below examines sister type pairs across five key
            dimensions:
          </p>
          <ol class={styles.criteriaList}>
            <li>Main driving force</li>
            <li>Early life strategies</li>
            <li>
              Emotional development and expression as well as subjective inner
              nuance
            </li>
            <li>How the type fits within a structure</li>
            <li>The gift of the type to the world</li>
          </ol>
        </div>

        <div class={styles.controlsContainer}>
          <button
            class={styles.toggleButton}
            onClick={() => setShowDetailed(!showDetailed())}
          >
            {showDetailed() ? "Show Summary View" : "Show Detailed View"}
          </button>
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
