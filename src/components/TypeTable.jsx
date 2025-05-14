// File: src/components/TypeTable.jsx

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
  const detailed = props.detailed !== undefined ? props.detailed : true;

  // Function to create a summarized version of the text
  const summarize = (text) => {
    // Remove HTML tags
    const plainText = text.replace(/<[^>]*>/g, "");
    // Get first sentence or limit to ~80 characters
    const firstSentence = plainText.split(".")[0] + ".";
    return firstSentence.length < 80
      ? firstSentence
      : firstSentence.substring(0, 77) + "...";
  };

  return (
    <section
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
            <tr class={detailed ? "" : styles.summaryRow}>
              <td>
                <span class={styles.symbol}>{row.symbol}</span>
              </td>
              <td innerHTML={detailed ? row.type1 : summarize(row.type1)}></td>
              <td innerHTML={detailed ? row.type2 : summarize(row.type2)}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TypeTable;
