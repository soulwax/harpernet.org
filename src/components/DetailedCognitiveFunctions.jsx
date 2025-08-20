// File: src/components/DetailedCognitiveFunctions.jsx

import { createSignal } from "solid-js";
import styles from "./DetailedCognitiveFunctions.module.css";

// Import the data directly
import cogFunctionsDetailedData from "../data/cognitiveFunctionsDetailed.json";

const DetailedCognitiveFunctions = () => {
  const [selectedFunction, setSelectedFunction] = createSignal(null);
  const [selectedSection, setSelectedSection] = createSignal("introduction");

  const selectFunction = (functionData) => {
    setSelectedFunction(functionData);
    setSelectedSection("introduction");
  };

  const sections = [
    { key: "introduction", label: "Introduction", icon: "📖" },
    { key: "dominantExpression", label: "Dominant Expression", icon: "👑" },
    { key: "auxiliaryExpression", label: "Auxiliary Expression", icon: "🤝" },
    { key: "tertiaryExpression", label: "Tertiary Expression", icon: "🌱" },
    { key: "inferiorExpression", label: "Inferior Expression", icon: "⚠️" },
    { key: "shadowAspects", label: "Shadow Aspects", icon: "🌑" },
    { key: "axisRelationship", label: "Axis Relationship", icon: "⚖️" },
    { key: "developmentalJourney", label: "Developmental Journey", icon: "🚀" },
  ];

  return (
    <div class={styles.detailedContainer} id="detailed-cognitive-functions">
      <div class={styles.introSection}>
        <h1>In-Depth Cognitive Functions Analysis</h1>

        <div class={styles.explanationBox}>
          <h3>Comprehensive Function Exploration</h3>
          <p>
            This detailed analysis explores each cognitive function axis through
            multiple lenses, examining how these functions manifest across
            different developmental stages and personality positions. Each
            function is presented with its opposite to highlight the dynamic
            tension that shapes personality development.
          </p>
          <p>
            Select a cognitive function axis below to explore detailed essays
            covering everything from basic introduction to shadow manifestations
            and developmental trajectories.
          </p>
        </div>
      </div>

      <div class={styles.mainContent}>
        {/* Function Axis Selection */}
        <div class={styles.axisSelector}>
          <h2>Cognitive Function Axes</h2>
          <div class={styles.axisGrid}>
            {cogFunctionsDetailedData.cognitiveFunctionDetailed.map((axis) => (
              <div class={styles.axisCard}>
                <h3 class={styles.axisTitle}>{axis.title}</h3>
                <div class={styles.functionsInAxis}>
                  {axis.functions.map((func) => (
                    <button
                      class={`${styles.functionButton} ${
                        selectedFunction()?.shorthand === func.shorthand
                          ? styles.selectedFunction
                          : ""
                      }`}
                      style={{ "background-color": func.color }}
                      onClick={() => selectFunction(func)}
                    >
                      <span class={styles.functionSymbol}>{func.symbol}</span>
                      <span class={styles.functionName}>
                        {func.name} ({func.shorthand})
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Function Detail View */}
        {selectedFunction() && (
          <div class={styles.functionDetail}>
            <div class={styles.functionHeader}>
              <h2 style={{ color: selectedFunction().color }}>
                <span class={styles.headerSymbol}>
                  {selectedFunction().symbol}
                </span>
                {selectedFunction().name} ({selectedFunction().shorthand})
              </h2>
              <div class={styles.oppositeInfo}>
                Opposite Function:{" "}
                <strong>{selectedFunction().oppositeFunction}</strong>
              </div>
            </div>

            {/* Section Navigation */}
            <div class={styles.sectionNav}>
              {sections.map((section) => (
                <button
                  class={`${styles.sectionButton} ${
                    selectedSection() === section.key
                      ? styles.activeSection
                      : ""
                  }`}
                  onClick={() => setSelectedSection(section.key)}
                >
                  <span class={styles.sectionIcon}>{section.icon}</span>
                  {section.label}
                </button>
              ))}
            </div>

            {/* Section Content */}
            <div class={styles.sectionContent}>
              <h3 class={styles.contentTitle}>
                {sections.find((s) => s.key === selectedSection())?.icon}{" "}
                {sections.find((s) => s.key === selectedSection())?.label}
              </h3>
              <div class={styles.essayContent}>
                {selectedFunction().essay[selectedSection()]}
              </div>
            </div>
          </div>
        )}

        {/* Default state when no function is selected */}
        {!selectedFunction() && (
          <div class={styles.defaultState}>
            <div class={styles.welcomeCard}>
              <h2>Welcome to Detailed Cognitive Functions</h2>
              <p>
                Select a cognitive function from the axes above to explore
                comprehensive analyses covering developmental stages,
                manifestations, and psychological dynamics.
              </p>
              <div class={styles.featureHighlights}>
                <div class={styles.highlight}>
                  <span class={styles.highlightIcon}>🎯</span>
                  <h4>Positional Analysis</h4>
                  <p>
                    Understand how functions behave in dominant, auxiliary,
                    tertiary, and inferior positions
                  </p>
                </div>
                <div class={styles.highlight}>
                  <span class={styles.highlightIcon}>🌑</span>
                  <h4>Shadow Exploration</h4>
                  <p>
                    Learn about unhealthy manifestations and psychological blind
                    spots
                  </p>
                </div>
                <div class={styles.highlight}>
                  <span class={styles.highlightIcon}>🚀</span>
                  <h4>Development Journey</h4>
                  <p>
                    Track how functions evolve from childhood through mature
                    integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailedCognitiveFunctions;