// src/components/TypeTable.jsx
import { For } from "solid-js";
import styles from "./TypeTable.module.css";

const TypeTable = (props) => {
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
              <tr>
                <td class={styles.symbol}>{row.symbol}</td>
                <td innerHTML={row.type1}></td>
                <td innerHTML={row.type2}></td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};

export default TypeTable;
