// File: src/components/DetailedCognitiveFunctions.jsx

import { createMemo, createSignal, onMount } from 'solid-js';
import { For, Show } from 'solid-js/web';
import styles from './DetailedCognitiveFunctions.module.css';

// Import the data directly
import cogFunctionsDetailedData from '../data/cognitiveFunctionsDetailed.json';

const sections = [
  { key: 'introduction', label: 'Introduction', icon: '📖' },
  { key: 'dominantExpression', label: 'Dominant Expression', icon: '👑' },
  { key: 'auxiliaryExpression', label: 'Auxiliary Expression', icon: '🤝' },
  { key: 'tertiaryExpression', label: 'Tertiary Expression', icon: '🌱' },
  { key: 'inferiorExpression', label: 'Inferior Expression', icon: '⚠️' },
  { key: 'shadowAspects', label: 'Shadow Aspects', icon: '🌑' },
  { key: 'axisRelationship', label: 'Axis Relationship', icon: '⚖️' },
  { key: 'developmentalJourney', label: 'Developmental Journey', icon: '🚀' },
];

const DetailedCognitiveFunctions = () => {
  // Defensive guard for data shape
  const axes = createMemo(() => cogFunctionsDetailedData?.cognitiveFunctionDetailed ?? []);

  // Flatten functions with axis context for faster lookups/styling
  const allFunctions = createMemo(() =>
    axes().flatMap((axis) =>
      (axis.functions ?? []).map((func) => ({
        ...func,
        axisTitle: axis.title,
        axisName: axis.axis,
      })),
    ),
  );

  const [selectedFunction, setSelectedFunction] = createSignal(null);
  const [selectedSection, setSelectedSection] = createSignal('introduction');

  onMount(() => {
    // Preselect first function for better UX
    if (allFunctions().length > 0) {
      setSelectedFunction(allFunctions()[0]);
      setSelectedSection('introduction');
    }
  });

  const selectFunction = (functionData) => {
    setSelectedFunction(functionData);
    setSelectedSection('introduction');
  };

  // Derived: current section meta and content
  const currentSectionMeta = createMemo(() => sections.find((s) => s.key === selectedSection()));

  const currentEssayText = createMemo(() => {
    const f = selectedFunction();
    const k = selectedSection();
    return f?.essay?.[k] ?? 'Content unavailable for this section.';
  });

  // Render paragraphs safely (no innerHTML)
  const renderParagraphs = (text) =>
    text
      .split(/\n{2,}/)
      .map((para) => para.trim())
      .filter(Boolean);

  // Keyboard navigation for the section tabs
  const onSectionKeyDown = (e) => {
    const idx = sections.findIndex((s) => s.key === selectedSection());
    if (idx < 0) return;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = (idx + 1) % sections.length;
      setSelectedSection(sections[next].key);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = (idx - 1 + sections.length) % sections.length;
      setSelectedSection(sections[prev].key);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSelectedSection(sections[0].key);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSelectedSection(sections[sections.length - 1].key);
    }
  };

  return (
    <div class={styles.detailedContainer} id="detailed-cognitive-functions">
      <div class={styles.introSection}>
        <h1>In-Depth Cognitive Functions Analysis</h1>

        <div class={styles.explanationBox}>
          <h3>Comprehensive Function Exploration</h3>
          <p>
            Explore each axis through concise essays covering positions (dominant → inferior),
            shadow dynamics, and development.
          </p>
          <p>Pick a function to see its sections; use ← → to jump between tabs.</p>
        </div>
      </div>

      <div class={styles.mainContent}>
        {/* Function Axis Selection */}
        <div class={styles.axisSelector}>
          <h2>Cognitive Function Axes</h2>
          <div class={styles.axisGrid}>
            <For each={axes()}>
              {(axis) => (
                <div class={styles.axisCard}>
                  <h3 class={styles.axisTitle}>{axis.title}</h3>
                  <div class={styles.functionsInAxis}>
                    <For each={axis.functions}>
                      {(func) => {
                        const isSelected =
                          selectedFunction()?.shorthand === func.shorthand &&
                          selectedFunction()?.axisName === axis.axis;
                        return (
                          <button
                            type="button"
                            class={`${styles.functionButton} ${
                              isSelected ? styles.selectedFunction : ''
                            }`}
                            style={{ 'background-color': func.color }}
                            aria-pressed={isSelected}
                            onClick={() =>
                              selectFunction({
                                ...func,
                                axisTitle: axis.title,
                                axisName: axis.axis,
                              })
                            }
                          >
                            <span class={styles.functionSymbol}>{func.symbol}</span>
                            <span class={styles.functionName}>
                              {func.name} ({func.shorthand})
                            </span>
                          </button>
                        );
                      }}
                    </For>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

        {/* Function Detail View */}
        <Show
          when={selectedFunction()}
          fallback={
            <div class={styles.defaultState}>
              <div class={styles.welcomeCard}>
                <h2>Welcome to Detailed Cognitive Functions</h2>
                <p>
                  Select a function from the axes above to explore developmental trajectories,
                  shadow patterns, and positional nuances.
                </p>
                <div class={styles.featureHighlights}>
                  <div class={styles.highlight}>
                    <span class={styles.highlightIcon}>🎯</span>
                    <h4>Positional Analysis</h4>
                    <p>Dominant, auxiliary, tertiary, inferior — clear contrasts.</p>
                  </div>
                  <div class={styles.highlight}>
                    <span class={styles.highlightIcon}>🌑</span>
                    <h4>Shadow Exploration</h4>
                    <p>Spot common pitfalls and blind spots.</p>
                  </div>
                  <div class={styles.highlight}>
                    <span class={styles.highlightIcon}>🚀</span>
                    <h4>Development Journey</h4>
                    <p>See how each function matures over time.</p>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <div class={styles.functionDetail}>
            <div class={styles.functionHeader}>
              <h2 style={{ color: selectedFunction().color }}>
                <span class={styles.headerSymbol}>{selectedFunction().symbol}</span>
                {selectedFunction().name} ({selectedFunction().shorthand})
              </h2>
              <div class={styles.oppositeInfo}>
                Axis: <strong>{selectedFunction().axisTitle}</strong> &nbsp;|&nbsp; Opposite:{' '}
                <strong>{selectedFunction().oppositeFunction}</strong>
              </div>
            </div>

            {/* Section Navigation as accessible tabs */}
            <div
              class={styles.sectionNav}
              role="tablist"
              aria-label="Function sections"
              onKeyDown={onSectionKeyDown}
            >
              <For each={sections}>
                {(section) => {
                  const active = selectedSection() === section.key;
                  return (
                    <button
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-controls={`panel-${section.key}`}
                      id={`tab-${section.key}`}
                      tabindex={active ? '0' : '-1'}
                      class={`${styles.sectionButton} ${active ? styles.activeSection : ''}`}
                      onClick={() => setSelectedSection(section.key)}
                    >
                      <span class={styles.sectionIcon}>{section.icon}</span>
                      {section.label}
                    </button>
                  );
                }}
              </For>
            </div>

            {/* Section Content (tabpanel) */}
            <div
              class={styles.sectionContent}
              role="tabpanel"
              id={`panel-${currentSectionMeta()?.key}`}
              aria-labelledby={`tab-${currentSectionMeta()?.key}`}
            >
              <h3 class={styles.contentTitle}>
                {currentSectionMeta()?.icon} {currentSectionMeta()?.label}
              </h3>
              <div class={styles.essayContent}>
                <For each={renderParagraphs(currentEssayText())}>{(p) => <p>{p}</p>}</For>
              </div>
            </div>
          </div>
        </Show>
      </div>
    </div>
  );
};

export default DetailedCognitiveFunctions;