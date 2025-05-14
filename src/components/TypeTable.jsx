import { For } from "solid-js";
import styles from "./TypeTable.module.css";

const TypeTable = (props) => {
  // Default to showing detailed view if not specified
  const detailed = props.detailed !== undefined ? props.detailed : true;

  return (
    <div class={styles.typeSection}>
      <h2>{props.title}</h2>
      <table class={styles.typeTable}>
        <thead>
          <tr>
            <th class={styles.symbol}>◎</th>
            <th>{props.type1}</th>
            <th>{props.type2}</th>
          </tr>
        </thead>
        <tbody>
          <For each={props.rows}>
            {(row) => (
              <tr class={detailed ? "" : styles.summaryRow}>
                <td class={styles.symbol}>{row.symbol}</td>
                <td
                  innerHTML={detailed ? row.type1 : summarizeText(row.type1)}
                ></td>
                <td
                  innerHTML={detailed ? row.type2 : summarizeText(row.type2)}
                ></td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};

// Helper function to create summary text
const summarizeText = (text) => {
  // Extract first sentence or first 100 characters if no clear sentence
  const firstSentence = text
    .split(/[.!?]/)
    .filter((s) => s.trim().length > 0)[0];
  if (firstSentence) {
    return firstSentence + ".";
  }

  // Fallback to first 100 chars if no clear sentence
  return text.substring(0, 100) + (text.length > 100 ? "..." : "");
};

export default TypeTable;
