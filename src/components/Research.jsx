// File: src/components/Research.jsx

import { createSignal, For, Show, createMemo } from 'solid-js';
import styles from './Research.module.css';
import curatedSources from '../data/curatedSources.json';
import rawSources from '../data/rawSources.json';

const Research = () => {
  const [expandedCategory, setExpandedCategory] = createSignal(null);
  const [selectedSource, setSelectedSource] = createSignal(null);
  const [showRawSources, setShowRawSources] = createSignal(false);
  const [rawSourcesFilter, setRawSourcesFilter] = createSignal('');

  // Organize raw sources by domain
  const organizedRawSources = createMemo(() => {
    const domainGroups = {};
    rawSources.forEach((url, index) => {
      try {
        const domain = new URL(url).hostname.replace('www.', '');
        if (!domainGroups[domain]) {
          domainGroups[domain] = [];
        }
        domainGroups[domain].push({ url, id: index + 1 });
      } catch (e) {
        // Handle malformed URLs
        const domain = 'other';
        if (!domainGroups[domain]) {
          domainGroups[domain] = [];
        }
        domainGroups[domain].push({ url, id: index + 1 });
      }
    });

    // Sort domains by number of sources (descending)
    return Object.entries(domainGroups)
      .sort(([, a], [, b]) => b.length - a.length)
      .map(([domain, sources]) => ({ domain, sources, count: sources.length }));
  });

  // Filter raw sources based on search
  const filteredRawSources = createMemo(() => {
    const filter = rawSourcesFilter().toLowerCase();
    if (!filter) return organizedRawSources();

    return organizedRawSources()
      .map(({ domain, sources, count }) => ({
        domain,
        sources: sources.filter(({ url }) => url.toLowerCase().includes(filter)),
        count,
      }))
      .filter(({ sources }) => sources.length > 0);
  });

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory() === categoryId ? null : categoryId);
  };

  const openSource = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const data = curatedSources.researchFoundation;

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

      {/* Raw Sources Section */}
      <section class={styles.rawSourcesSection}>
        <div class={styles.rawSourcesHeader}>
          <h2 class={styles.sectionTitle}>Complete Source Database</h2>
          <p class={styles.rawSourcesDescription}>
            All {rawSources.length} research sources used in this platform, organized by domain and
            available for direct access
          </p>

          <div class={styles.rawSourcesControls}>
            <input
              type="text"
              placeholder="Filter sources..."
              value={rawSourcesFilter()}
              onInput={(e) => setRawSourcesFilter(e.target.value)}
              class={styles.sourceFilter}
            />
            <button
              onClick={() => setShowRawSources(!showRawSources())}
              class={`${styles.toggleButton} ${showRawSources() ? styles.active : ''}`}
            >
              {showRawSources() ? 'Hide Sources' : 'Show All Sources'}
            </button>
          </div>
        </div>

        <Show when={showRawSources()}>
          <div class={styles.rawSourcesGrid}>
            <For each={filteredRawSources()}>
              {(domainGroup) => (
                <div class={styles.domainGroup}>
                  <div class={styles.domainHeader}>
                    <h3 class={styles.domainName}>{domainGroup.domain}</h3>
                    <span class={styles.domainCount}>{domainGroup.sources.length} sources</span>
                  </div>
                  <div class={styles.domainSources}>
                    <For each={domainGroup.sources}>
                      {(source) => (
                        <div class={styles.rawSourceItem}>
                          <span class={styles.sourceId}>#{source.id}</span>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class={styles.rawSourceLink}
                            title={source.url}
                          >
                            {source.url.replace(/^https?:\/\//, '').split('/')[0]}
                            {source.url.length > 50 && '...'}
                          </a>
                        </div>
                      )}
                    </For>
                  </div>
                </div>
              )}
            </For>
          </div>

          <div class={styles.sourcesSummary}>
            <div class={styles.summaryStats}>
              <div class={styles.summaryItem}>
                <span class={styles.summaryNumber}>{rawSources.length}</span>
                <span class={styles.summaryLabel}>Total Sources</span>
              </div>
              <div class={styles.summaryItem}>
                <span class={styles.summaryNumber}>{organizedRawSources().length}</span>
                <span class={styles.summaryLabel}>Unique Domains</span>
              </div>
              <div class={styles.summaryItem}>
                <span class={styles.summaryNumber}>
                  {rawSources.filter((url) => url.includes('pmc.ncbi.nlm.nih.gov')).length}
                </span>
                <span class={styles.summaryLabel}>PubMed Central</span>
              </div>
              <div class={styles.summaryItem}>
                <span class={styles.summaryNumber}>
                  {rawSources.filter((url) => url.includes('nature.com')).length}
                </span>
                <span class={styles.summaryLabel}>Nature Publications</span>
              </div>
            </div>
          </div>
        </Show>
      </section>

      {/* Methodology Section */}
      <section class={styles.methodologySection}>
        <h2 class={styles.sectionTitle}>{curatedSources.methodology.title}</h2>
        <p class={styles.methodologyDescription}>{curatedSources.methodology.description}</p>

        <div class={styles.approachesGrid}>
          <For each={curatedSources.methodology.approaches}>
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
        <h2 class={styles.sectionTitle}>{curatedSources.credibility.title}</h2>
        <p class={styles.credibilityStatement}>{curatedSources.credibility.statement}</p>

        <div class={styles.institutionsSection}>
          <h3 class={styles.institutionsTitle}>Institutional Sources</h3>
          <div class={styles.institutionsList}>
            <For each={curatedSources.credibility.institutionalSources}>
              {(institution) => <span class={styles.institutionTag}>{institution}</span>}
            </For>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
