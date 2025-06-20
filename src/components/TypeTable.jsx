// File: src/components/TypeTable.jsx

import styles from "./TypeTable.module.css";

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
