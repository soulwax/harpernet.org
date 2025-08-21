// File: src/components/Relationships.jsx

import { createMemo, createSignal, For, Show } from "solid-js";
import relationshipsData from "../data/relationshipsEnhanced.json";
import styles from "./Relationships.module.css";

const Relationships = () => {
    const [selectedType1, setSelectedType1] = createSignal("");
    const [selectedType2, setSelectedType2] = createSignal("");
    const [selectedRelationshipType, setSelectedRelationshipType] =
        createSignal("");
    const [viewMode, setViewMode] = createSignal("analyzer"); // analyzer, browser, matrix, quadras

    // Get all types sorted alphabetically
    const allTypes = Object.keys(relationshipsData.types).sort();

  // Get all relationships for a specific type
  const getTypeRelationships = (type) => {
    const relationships = {};

    for (const [relType, relData] of Object.entries(
      relationshipsData.relationship_types
    )) {
      const partner = relData.pairs.find(
        (pair) => pair[0] === type || pair[1] === type
      );

        // Check each relationship type for the pair
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

    // Get compatibility color
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

    // Get all relationships for a specific type
    const getTypeRelationships = (type) => {
        const relationships = {};

        for (const [relType, relData] of Object.entries(
            relationshipsData.relationship_types
        )) {
            const partner = relData.pairs.find(
                (pair) => pair[0] === type || pair[1] === type
            );

            if (partner) {
                const otherType = partner[0] === type ? partner[1] : partner[0];
                relationships[relType] = {
                    partner: otherType,
                    name: relData.name,
                    compatibility: relData.compatibility,
                };
            }
        }

        return relationships;
    };

    // Create relationship matrix
    const createMatrix = () => {
        const matrix = {};

        for (const type1 of allTypes) {
            matrix[type1] = {};
            for (const type2 of allTypes) {
                // Find relationship type
                for (const [relType, relData] of Object.entries(
                    relationshipsData.relationship_types
                )) {
                    const found = relData.pairs.find(
                        (pair) =>
                            (pair[0] === type1 && pair[1] === type2) ||
                            (pair[1] === type1 && pair[0] === type2)
                    );

                    if (found) {
                        matrix[type1][type2] = {
                            type: relType,
                            compatibility: relData.compatibility,
                        };
                        break;
                    }
                }
            }
        }

        return matrix;
    };

    const relationshipMatrix = createMemo(() => createMatrix());

    return (
        <div class={styles.relationshipsContainer}>
            <div class={styles.introSection}>
                <h1>MBTI Type Relationships - Complete Analysis</h1>

                <div class={styles.explanationBox}>
                    <h3>Understanding Intertype Relations</h3>
                    <p>
                        Based on Socionics theory, intertype relations describe the
                        psychological dynamics between different personality types. Each
                        relationship has unique characteristics affecting communication,
                        compatibility, and mutual growth potential.
                    </p>
                    <p>
                        Explore relationships through multiple lenses: analyze specific
                        pairs, browse by relationship type, view the complete compatibility
                        matrix, or examine quadra dynamics.
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

            {/* Relationship Analyzer View */}
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
                                                {(strength) => <li>{strength}</li>}
                                            </For>
                                        </ul>
                                    </div>
                                    <div class={styles.dynamicSection}>
                                        <h4>⚠️ Challenges</h4>
                                        <ul>
                                            <For each={getRelationship().dynamics.challenges}>
                                                {(challenge) => <li>{challenge}</li>}
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

            {/* Browse Types View */}
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

            {/* Compatibility Matrix View */}
            <Show when={viewMode() === "matrix"}>
                <div class={styles.matrixView}>
                    <h2>Compatibility Matrix</h2>
                    <p class={styles.matrixDescription}>
                        Hover over cells to see relationship type. Click to analyze the
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
                                    {(type1) => (
                                        <tr>
                                            <th class={styles.matrixRowHeader}>{type1}</th>
                                            <For each={allTypes}>
                                                {(type2) => (
                                                    <td
                                                        class={styles.matrixCell}
                                                        style={{
                                                            "background-color": getCompatibilityColor(
                                                                relationshipMatrix()[type1][type2]
                                                                    ?.compatibility
                                                            ),
                                                            opacity: 0.7,
                                                        }}
                                                        title={relationshipMatrix()[type1][type2]?.type}
                                                        onClick={() => {
                                                            setSelectedType1(type1);
                                                            setSelectedType2(type2);
                                                            setViewMode("analyzer");
                                                        }}
                                                    ></td>
                                                )}
                                            </For>
                                        </tr>
                                    )}
                                </For>
                            </tbody>
                        </table>
                    </div>

                    <div class={styles.matrixLegend}>
                        <h4>Compatibility Legend:</h4>
                        <div class={styles.legendItems}>
                            <For
                                each={Object.entries(
                                    relationshipsData.relationship_compatibility
                                )}
                            >
                                {([level, types]) => (
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
                </div>
            </Show>

            {/* Quadra Analysis View */}
            <Show when={viewMode() === "quadras"}>
                <div class={styles.quadrasView}>
                    <h2>Quadra Analysis</h2>

                    <div class={styles.quadraGrid}>
                        <For each={Object.entries(relationshipsData.quadras)}>
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

                    <div class={styles.interactionStyles}>
                        <h3>Interaction Styles</h3>
                        <div class={styles.stylesGrid}>
                            <For each={Object.entries(relationshipsData.interaction_styles)}>
                                {([styleName, styleData]) => (
                                    <div class={styles.styleCard}>
                                        <h4>{styleName}</h4>
                                        <p class={styles.styleDescription}>
                                            {styleData.description}
                                        </p>
                                        <div class={styles.styleTypes}>
                                            <For each={styleData.types}>
                                                {(type) => <span class={styles.typeBadge}>{type}</span>}
                                            </For>
                                        </div>
                                    </div>
                                )}
                            </For>
                        </div>
                    </div>
                </div>
            </Show>
        </div>
      </div>

      {/* View Mode Selector */}
      <div class={styles.viewSelector}>
        <button
          class={`${styles.viewButton} ${
            viewMode() === "analyzer" ? styles.activeView : ""
          }`}
          onClick={() => setViewMode("analyzer")}
        >
          🔍 Relationship Analyzer
        </button>
        <button
          class={`${styles.viewButton} ${
            viewMode() === "browser" ? styles.activeView : ""
          }`}
          onClick={() => setViewMode("browser")}
        >
          📚 Browse Types
        </button>
        <button
          class={`${styles.viewButton} ${
            viewMode() === "matrix" ? styles.activeView : ""
          }`}
          onClick={() => setViewMode("matrix")}
        >
          📊 Compatibility Matrix
        </button>
        <button
          class={`${styles.viewButton} ${
            viewMode() === "quadras" ? styles.activeView : ""
          }`}
          onClick={() => setViewMode("quadras")}
        >
          🏛️ Quadra Analysis
        </button>
      </div>

      {/* Relationship Analyzer View */}
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
                        {(strength) => <li>{strength}</li>}
                      </For>
                    </ul>
                  </div>
                  <div class={styles.dynamicSection}>
                    <h4>⚠️ Challenges</h4>
                    <ul>
                      <For each={getRelationship().dynamics.challenges}>
                        {(challenge) => <li>{challenge}</li>}
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

      {/* Browse Types View */}
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

      {/* Compatibility Matrix View */}
      <Show when={viewMode() === "matrix"}>
        <div class={styles.matrixView}>
          <h2>Compatibility Matrix</h2>
          <p class={styles.matrixDescription}>
            Hover over cells to see relationship type. Click to analyze the
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
                  {(type1) => (
                    <tr>
                      <th class={styles.matrixRowHeader}>{type1}</th>
                      <For each={allTypes}>
                        {(type2) => (
                          <td
                            class={styles.matrixCell}
                            style={{
                              "background-color": getCompatibilityColor(
                                relationshipMatrix()[type1][type2]
                                  ?.compatibility
                              ),
                              opacity: 0.7,
                            }}
                            title={relationshipMatrix()[type1][type2]?.type}
                            onClick={() => {
                              setSelectedType1(type1);
                              setSelectedType2(type2);
                              setViewMode("analyzer");
                            }}
                          ></td>
                        )}
                      </For>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
          </div>

          <div class={styles.matrixLegend}>
            <h4>Compatibility Legend:</h4>
            <div class={styles.legendItems}>
              <For
                each={Object.entries(
                  relationshipsData.relationship_compatibility
                )}
              >
                {([level, types]) => (
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
        </div>
      </Show>

      {/* Quadra Analysis View */}
      <Show when={viewMode() === "quadras"}>
        <div class={styles.quadrasView}>
          <h2>Quadra Analysis</h2>

          <div class={styles.quadraGrid}>
            <For each={Object.entries(relationshipsData.quadras)}>
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

          <div class={styles.interactionStyles}>
            <h3>Interaction Styles</h3>
            <div class={styles.stylesGrid}>
              <For each={Object.entries(relationshipsData.interaction_styles)}>
                {([styleName, styleData]) => (
                  <div class={styles.styleCard}>
                    <h4>{styleName}</h4>
                    <p class={styles.styleDescription}>
                      {styleData.description}
                    </p>
                    <div class={styles.styleTypes}>
                      <For each={styleData.types}>
                        {(type) => <span class={styles.typeBadge}>{type}</span>}
                      </For>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default Relationships;
