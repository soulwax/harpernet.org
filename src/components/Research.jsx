// File: src/components/Research.jsx

import { createSignal, For, Show } from 'solid-js';
import styles from './Research.module.css';
import researchData from '../data/researchSources.json';

const Research = () => {
  const [expandedCategory, setExpandedCategory] = createSignal(null);
  const [selectedSource, setSelectedSource] = createSignal(null);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory() === categoryId ? null : categoryId);
  };

  const openSource = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const data = researchData.researchFoundation;

  return (
    <div class={styles.researchContainer}>
      {/* Hero Section */}
      <section class={styles.hero}>
        <div class={styles.heroContent}>
          <h1 class={styles.title}>
            <span class={styles.titleMain}>{data.title}</span>
            <span class={styles.titleSub}>{data.subtitle}</span>
          </h1>

          {/* Research Highlights */}
          <div class={styles.highlightsGrid}>
            <For each={data.researchHighlights}>
              {(highlight) => (
                <div class={styles.highlightCard}>
                  <div class={styles.highlightMetric}>{highlight.metric}</div>
                  <div class={styles.highlightLabel}>{highlight.label}</div>
                  <div class={styles.highlightDescription}>{highlight.description}</div>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* Research Categories */}
      <section class={styles.categoriesSection}>
        <h2 class={styles.sectionTitle}>Research Categories</h2>
        <div class={styles.categoriesGrid}>
          <For each={data.categories}>
            {(category) => (
              <div class={styles.categoryCard}>
                <div
                  class={styles.categoryHeader}
                  onClick={() => toggleCategory(category.id)}
                  style={{ '--category-color': category.color }}
                >
                  <div class={styles.categoryIcon}>{category.icon}</div>
                  <div class={styles.categoryInfo}>
                    <h3 class={styles.categoryTitle}>{category.title}</h3>
                    <p class={styles.categoryDescription}>{category.description}</p>
                    <span class={styles.sourceCount}>{category.sources.length} sources</span>
                  </div>
                  <div class={styles.expandIcon}>
                    {expandedCategory() === category.id ? '−' : '+'}
                  </div>
                </div>

                <Show when={expandedCategory() === category.id}>
                  <div class={styles.sourcesList}>
                    <For each={category.sources}>
                      {(source) => (
                        <div class={styles.sourceItem}>
                          <div class={styles.sourceHeader}>
                            <h4 class={styles.sourceTitle}>{source.title}</h4>
                            <div class={styles.sourceMeta}>
                              <span class={styles.sourceType}>{source.type}</span>
                              <span class={styles.sourceYear}>{source.year}</span>
                            </div>
                          </div>
                          <p class={styles.sourceDescription}>{source.description}</p>
                          <button class={styles.sourceLink} onClick={() => openSource(source.url)}>
                            View Source →
                          </button>
                        </div>
                      )}
                    </For>
                  </div>
                </Show>
              </div>
            )}
          </For>
        </div>
      </section>

      {/* Methodology Section */}
      <section class={styles.methodologySection}>
        <h2 class={styles.sectionTitle}>{researchData.methodology.title}</h2>
        <p class={styles.methodologyDescription}>{researchData.methodology.description}</p>

        <div class={styles.approachesGrid}>
          <For each={researchData.methodology.approaches}>
            {(approach) => (
              <div class={styles.approachCard}>
                <div class={styles.approachIcon}>{approach.icon}</div>
                <h3 class={styles.approachTitle}>{approach.title}</h3>
                <p class={styles.approachDescription}>{approach.description}</p>
              </div>
            )}
          </For>
        </div>
      </section>

      {/* Credibility Section */}
      <section class={styles.credibilitySection}>
        <h2 class={styles.sectionTitle}>{researchData.credibility.title}</h2>
        <p class={styles.credibilityStatement}>{researchData.credibility.statement}</p>

        <div class={styles.institutionsSection}>
          <h3 class={styles.institutionsTitle}>Institutional Sources</h3>
          <div class={styles.institutionsList}>
            <For each={researchData.credibility.institutionalSources}>
              {(institution) => <span class={styles.institutionTag}>{institution}</span>}
            </For>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section class={styles.contactSection}>
        <div class={styles.contactContent}>
          <h2 class={styles.contactTitle}>Research Collaboration</h2>
          <p class={styles.contactDescription}>
            For academic collaboration, research inquiries, or to contribute additional studies to
            our database, please reach out through our research channels.
          </p>
          <div class={styles.contactNote}>
            <p>
              <strong>Note:</strong> This platform is continuously updated with new research
              findings. Response times may vary based on current research activities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
