// File: src/components/Relationships.jsx

import { createMemo, createSignal, For, Show } from "solid-js";
import relationshipsData from "../data/relationshipsEnhanced.json";
import styles from "./Relationships.module.css";

const Relationships = () => {
  const [selectedType1, setSelectedType1] = createSignal("");
  const [selectedType2, setSelectedType2] = createSignal("");
  const [viewMode, setViewMode] = createSignal("analyzer"); // analyzer | browser | matrix | quadras

  // All MBTI types sorted
  const allTypes = Object.keys(relationshipsData.types).sort();

  // Color map for compatibility levels
  const getCompatibilityColor = (level) => {
    const colors = {
      ideal: "#4CAF50",
      excellent: "#8BC34A",
      good: "#CDDC39",
      neutral: "#FFC107",
      challenging: "#FF9800",
      difficult: "#F44336",
    };
    return colors[level] || "#9E9E9E";
  };

  // Find the intertype relationship between two types
  const getRelationship = createMemo(() => {
    const type1 = selectedType1();
    const type2 = selectedType2();
    if (!type1 || !type2) return null;

    for (const [relType, relData] of Object.entries(
      relationshipsData.relationship_types
    )) {
      const found = relData.pairs.find(
        (pair) =>
          (pair[0] === type1 && pair[1] === type2) ||
          (pair[1] === type1 && pair[0] === type2)
      );
      if (found) {
        return {
          type: relType,
          name: relData.name,
          description: relData.description,
          compatibility: relData.compatibility,
          dynamics: relData.dynamics || null,
        };
      }
    }
    return null;
  });

  // Get all relationships (one partner) for a given type, by relationship bucket
  const getTypeRelationships = (type) => {
    const collected = {};
    if (!type) return collected;

    for (const [relType, relData] of Object.entries(
      relationshipsData.relationship_types
    )) {
      const partner = relData.pairs.find(
        (pair) => pair[0] === type || pair[1] === type
      );
      if (partner) {
        const otherType = partner[0] === type ? partner[1] : partner[0];
        collected[relType] = {
          partner: otherType,
          name: relData.name,
          compatibility: relData.compatibility,
        };
      }
    }
    return collected;
  };

  // Build a type x type matrix of compatibility and relationship kind
  const relationshipMatrix = createMemo(() => {
    const matrix = {};
    for (const t1 of allTypes) {
      matrix[t1] = {};
      for (const t2 of allTypes) {
        let entry = null;
        for (const [relType, relData] of Object.entries(
          relationshipsData.relationship_types
        )) {
          const found = relData.pairs.find(
            (pair) =>
              (pair[0] === t1 && pair[1] === t2) ||
              (pair[1] === t1 && pair[0] === t2)
          );
          if (found) {
            entry = { type: relType, compatibility: relData.compatibility };
            break;
          }
        }
        matrix[t1][t2] = entry;
      }
    }
    return matrix;
  });

  return (
    <div class={styles.relationshipsContainer}>
      <div class={styles.introSection}>
        <h1>MBTI Type Relationships - Complete Analysis</h1>

        <div class={styles.explanationBox}>
          <h3>Understanding Intertype Relations</h3>
          <p>
            Based on Socionics theory, intertype relations describe the
            psychological dynamics between personality types. Each relationship
            has unique effects on communication, compatibility, and growth.
          </p>
          <p>
            Explore pairs in the analyzer, browse by relationship kind, scan the
            full matrix, or look at quadra dynamics.
          </p>
        </div>
      </div>

      {/* View Mode Selector */}
      <div class={styles.viewSelector}>
        <button
          class={`${styles.viewButton} ${viewMode() === "analyzer" ? styles.activeView : ""
            }`}
          onClick={() => setViewMode("analyzer")}
        >
          🔍 Relationship Analyzer
        </button>
        <button
          class={`${styles.viewButton} ${viewMode() === "browser" ? styles.activeView : ""
            }`}
          onClick={() => setViewMode("browser")}
        >
          📚 Browse Types
        </button>
        <button
          class={`${styles.viewButton} ${viewMode() === "matrix" ? styles.activeView : ""
            }`}
          onClick={() => setViewMode("matrix")}
        >
          📊 Compatibility Matrix
        </button>
        <button
          class={`${styles.viewButton} ${viewMode() === "quadras" ? styles.activeView : ""
            }`}
          onClick={() => setViewMode("quadras")}
        >
          🏛️ Quadra Analysis
        </button>
      </div>

      {/* Relationship Analyzer */}
      <Show when={viewMode() === "analyzer"}>
        <div class={styles.analyzerView}>
          <h2>Relationship Analyzer</h2>

          <div class={styles.typeSelectors}>
            <div class={styles.selectorGroup}>
              <label>First Type:</label>
              <select
                value={selectedType1()}
                onChange={(e) => setSelectedType1(e.target.value)}
                class={styles.typeSelect}
              >
                <option value="">Select Type</option>
                <For each={allTypes}>
                  {(type) => <option value={type}>{type}</option>}
                </For>
              </select>
              <Show when={selectedType1()}>
                <div class={styles.typeInfo}>
                  <p class={styles.typeDescription}>
                    {relationshipsData.types[selectedType1()].description}
                  </p>
                  <div class={styles.typeMeta}>
                    <span class={styles.badge}>
                      {relationshipsData.types[selectedType1()].temperament}
                    </span>
                    <span class={styles.badge}>
                      {relationshipsData.types[selectedType1()].quadra}
                    </span>
                  </div>
                </div>
              </Show>
            </div>

            <div class={styles.selectorGroup}>
              <label>Second Type:</label>
              <select
                value={selectedType2()}
                onChange={(e) => setSelectedType2(e.target.value)}
                class={styles.typeSelect}
              >
                <option value="">Select Type</option>
                <For each={allTypes}>
                  {(type) => <option value={type}>{type}</option>}
                </For>
              </select>
              <Show when={selectedType2()}>
                <div class={styles.typeInfo}>
                  <p class={styles.typeDescription}>
                    {relationshipsData.types[selectedType2()].description}
                  </p>
                  <div class={styles.typeMeta}>
                    <span class={styles.badge}>
                      {relationshipsData.types[selectedType2()].temperament}
                    </span>
                    <span class={styles.badge}>
                      {relationshipsData.types[selectedType2()].quadra}
                    </span>
                  </div>
                </div>
              </Show>
            </div>
          </div>

          <Show when={getRelationship()}>
            <div class={styles.relationshipResult}>
              <div class={styles.resultHeader}>
                <h3>
                  {selectedType1()} ↔ {selectedType2()}
                </h3>
                <div
                  class={styles.compatibilityBadge}
                  style={{
                    "background-color": getCompatibilityColor(
                      getRelationship().compatibility
                    ),
                  }}
                >
                  {getRelationship().name}
                </div>
              </div>

              <p class={styles.relationshipDescription}>
                {getRelationship().description}
              </p>

              <Show when={getRelationship().dynamics}>
                <div class={styles.dynamicsGrid}>
                  <div class={styles.dynamicSection}>
                    <h4>✅ Strengths</h4>
                    <ul>
                      <For each={getRelationship().dynamics.strengths}>
                        {(s) => <li>{s}</li>}
                      </For>
                    </ul>
                  </div>
                  <div class={styles.dynamicSection}>
                    <h4>⚠️ Challenges</h4>
                    <ul>
                      <For each={getRelationship().dynamics.challenges}>
                        {(c) => <li>{c}</li>}
                      </For>
                    </ul>
                  </div>
                </div>

                <div class={styles.additionalInfo}>
                  <div class={styles.infoItem}>
                    <strong>Communication Style:</strong>
                    <p>{getRelationship().dynamics.communication_style}</p>
                  </div>
                  <div class={styles.infoItem}>
                    <strong>Conflict Resolution:</strong>
                    <p>{getRelationship().dynamics.conflict_resolution}</p>
                  </div>
                  <div class={styles.infoItem}>
                    <strong>Growth Potential:</strong>
                    <p>{getRelationship().dynamics.growth_potential}</p>
                  </div>
                </div>
              </Show>

              {/* Function Stack Comparison */}
              <div class={styles.functionComparison}>
                <div class={styles.functionStack}>
                  <h4>{selectedType1()} Functions</h4>
                  <For
                    each={relationshipsData.types[selectedType1()].functions}
                  >
                    {(func, index) => (
                      <div class={styles.functionItem}>
                        <span class={styles.functionPosition}>
                          {
                            relationshipsData.function_positions[
                            (index() + 1).toString()
                            ]
                          }
                        </span>
                        <span class={styles.functionName}>
                          {func} - {relationshipsData.cognitive_functions[func]}
                        </span>
                      </div>
                    )}
                  </For>
                </div>

                <div class={styles.functionStack}>
                  <h4>{selectedType2()} Functions</h4>
                  <For
                    each={relationshipsData.types[selectedType2()].functions}
                  >
                    {(func, index) => (
                      <div class={styles.functionItem}>
                        <span class={styles.functionPosition}>
                          {
                            relationshipsData.function_positions[
                            (index() + 1).toString()
                            ]
                          }
                        </span>
                        <span class={styles.functionName}>
                          {func} - {relationshipsData.cognitive_functions[func]}
                        </span>
                      </div>
                    )}
                  </For>
                </div>
              </div>
            </div>
          </Show>
        </div>
      </Show>

      {/* Browse relationship kinds */}
      <Show when={viewMode() === "browser"}>
        <div class={styles.browserView}>
          <h2>Browse Relationship Types</h2>

          <div class={styles.relationshipTypeGrid}>
            <For each={Object.entries(relationshipsData.relationship_types)}>
              {([relType, relData]) => (
                <div
                  class={styles.relationshipTypeCard}
                  style={{
                    "border-left": `4px solid ${getCompatibilityColor(
                      relData.compatibility
                    )}`,
                  }}
                >
                  <h3>{relData.name}</h3>
                  <p class={styles.typeDescription}>{relData.description}</p>

                  <div class={styles.compatibilityIndicator}>
                    <span>Compatibility: </span>
                    <span
                      class={styles.compatibilityLevel}
                      style={{
                        color: getCompatibilityColor(relData.compatibility),
                      }}
                    >
                      {relData.compatibility.toUpperCase()}
                    </span>
                  </div>

                  <Show when={relData.dynamics}>
                    <details class={styles.dynamicsDetails}>
                      <summary>View Dynamics</summary>
                      <div class={styles.dynamicsContent}>
                        <p>
                          <strong>Communication:</strong>{" "}
                          {relData.dynamics.communication_style}
                        </p>
                        <p>
                          <strong>Conflict:</strong>{" "}
                          {relData.dynamics.conflict_resolution}
                        </p>
                        <p>
                          <strong>Growth:</strong>{" "}
                          {relData.dynamics.growth_potential}
                        </p>
                      </div>
                    </details>
                  </Show>

                  <div class={styles.pairsList}>
                    <h4>Example Pairs:</h4>
                    <div class={styles.pairsGrid}>
                      <For each={relData.pairs.slice(0, 4)}>
                        {(pair) => (
                          <button
                            class={styles.pairButton}
                            onClick={() => {
                              setSelectedType1(pair[0]);
                              setSelectedType2(pair[1]);
                              setViewMode("analyzer");
                            }}
                          >
                            {pair[0]} ↔ {pair[1]}
                          </button>
                        )}
                      </For>
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </Show>

      {/* Compatibility Matrix */}
      <Show when={viewMode() === "matrix"}>
        <div class={styles.matrixView}>
          <h2>Compatibility Matrix</h2>
          <p class={styles.matrixDescription}>
            Hover to see the relationship type. Click a cell to analyze that
            pair.
          </p>

          <div class={styles.matrixContainer}>
            <table class={styles.matrix}>
              <thead>
                <tr>
                  <th></th>
                  <For each={allTypes}>
                    {(type) => <th class={styles.matrixHeader}>{type}</th>}
                  </For>
                </tr>
              </thead>
              <tbody>
                <For each={allTypes}>
                  {(t1) => (
                    <tr>
                      <th class={styles.matrixRowHeader}>{t1}</th>
                      <For each={allTypes}>
                        {(t2) => {
                          const cell = relationshipMatrix()[t1][t2];
                          return (
                            <td
                              class={styles.matrixCell}
                              style={{
                                "background-color": getCompatibilityColor(
                                  cell?.compatibility
                                ),
                                opacity: 0.7,
                              }}
                              title={cell?.type || ""}
                              onClick={() => {
                                setSelectedType1(t1);
                                setSelectedType2(t2);
                                setViewMode("analyzer");
                              }}
                            />
                          );
                        }}
                      </For>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
          </div>

          <Show when={relationshipsData.relationship_compatibility}>
            <div class={styles.matrixLegend}>
              <h4>Compatibility Legend:</h4>
              <div class={styles.legendItems}>
                <For
                  each={Object.keys(
                    relationshipsData.relationship_compatibility
                  )}
                >
                  {(level) => (
                    <div class={styles.legendItem}>
                      <div
                        class={styles.legendColor}
                        style={{
                          "background-color": getCompatibilityColor(level),
                        }}
                      />
                      <span>
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </span>
                    </div>
                  )}
                </For>
              </div>
            </div>
          </Show>
        </div>
      </Show>

      {/* Quadra Analysis */}
      <Show when={viewMode() === "quadras" && relationshipsData.quadras}>
        <div class={styles.quadrasView}>
          <h2>Quadra Analysis</h2>

          <div class={styles.quadraGrid}>
            <For each={Object.entries(relationshipsData.quadras || {})}>
              {([quadraName, quadraData]) => (
                <div class={styles.quadraCard}>
                  <h3 class={styles.quadraTitle}>{quadraName} Quadra</h3>

                  <div class={styles.quadraTypes}>
                    <For each={quadraData.types}>
                      {(type) => (
                        <div class={styles.quadraType}>
                          <strong>{type}</strong>
                          <span class={styles.typeDesc}>
                            {
                              relationshipsData.types[type].description.split(
                                " - "
                              )[0]
                            }
                          </span>
                        </div>
                      )}
                    </For>
                  </div>

                  <div class={styles.quadraInfo}>
                    <h4>Shared Functions:</h4>
                    <div class={styles.functionsList}>
                      <For each={quadraData.functions}>
                        {(func) => (
                          <span class={styles.functionBadge}>
                            {func} -{" "}
                            {relationshipsData.cognitive_functions[func]}
                          </span>
                        )}
                      </For>
                    </div>

                    <h4>Core Values:</h4>
                    <ul class={styles.valuesList}>
                      <For each={quadraData.values}>
                        {(value) => <li>{value}</li>}
                      </For>
                    </ul>

                    <h4>Communication Style:</h4>
                    <p class={styles.quadraCommunication}>
                      {quadraData.communication}
                    </p>
                  </div>
                </div>
              )}
            </For>
          </div>

          <Show when={relationshipsData.interaction_styles}>
            <div class={styles.interactionStyles}>
              <h3>Interaction Styles</h3>
              <div class={styles.stylesGrid}>
                <For
                  each={Object.entries(
                    relationshipsData.interaction_styles || {}
                  )}
                >
                  {([styleName, styleData]) => (
                    <div class={styles.styleCard}>
                      <h4>{styleName}</h4>
                      <p class={styles.styleDescription}>
                        {styleData.description}
                      </p>
                      <div class={styles.styleTypes}>
                        <For each={styleData.types}>
                          {(type) => (
                            <span class={styles.typeBadge}>{type}</span>
                          )}
                        </For>
                      </div>
                    </div>
                  )}
                </For>
              </div>
            </div>
          </Show>
        </div>
      </Show>
    </div>
  );
};

export { Relationships };
