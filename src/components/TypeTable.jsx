// File: src/components/TypeTable.jsx

import { createSignal } from "solid-js";
import styles from "./TypeTable.module.css";

/**
 * TypeTable component for displaying side-by-side personality type comparisons
 *
 * @param {Object} props Component props
 * @param {string} props.title Table title (e.g., "INTP vs INTJ")
 * @param {string} props.type1 First personality type (e.g., "INTP")
 * @param {string} props.type2 Second personality type (e.g., "INTJ")
 * @param {Array} props.rows Array of row data objects
 * @param {boolean} props.detailed Whether to show detailed or summary view
 */
const TypeTable = (props) => {
  // Default to detailed view if not specified
  const [showDetailed, setShowDetailed] = createSignal(
    props.detailed !== undefined ? props.detailed : true
  );

  // Toggle detailed/summary view
  const toggleView = () => {
    setShowDetailed(!showDetailed());
  };

  return (
    <div
      class={styles.typeSection}
      id={props.title.toLowerCase().replace(/\s+/g, "-")}
    >
      <h2>{props.title}</h2>

      <div class={styles.tableControls}>
        <button class={styles.viewToggle} onClick={toggleView}>
          {showDetailed() ? "Show Summary" : "Show Details"}
        </button>
      </div>

      <table class={styles.typeTable}>
        <thead>
          <tr>
            <th></th>
            <th>{props.type1}</th>
            <th>{props.type2}</th>
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row) => (
            <tr class={showDetailed() ? styles.detailedRow : styles.summaryRow}>
              <td>
                <span class={styles.symbol}>{row.symbol}</span>
              </td>
              <td
                innerHTML={showDetailed() ? row.type1 : summarize(row.type1)}
              ></td>
              <td
                innerHTML={showDetailed() ? row.type2 : summarize(row.type2)}
              ></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/**
 * Creates a summary version of the detailed text
 * Extracts the first sentence or first N characters
 *
 * @param {string} text The detailed text to summarize
 * @returns {string} The summarized text
 */
function summarize(text) {
  // Extract the first sentence if possible
  const firstSentence = text.match(/^.*?([.!?]|<\/strong>)/);
  if (firstSentence) {
    return firstSentence[0];
  }

  // Otherwise just take the first N characters
  const maxLength = 100;
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

export default TypeTable;
