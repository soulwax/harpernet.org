// File: src/components/About.jsx

import { createSignal } from 'solid-js';
import sources from '../data/rawSources.json';
import styles from './About.module.css';

const About = () => {
  const [showAllSources, setShowAllSources] = createSignal(false);

  const visibleSources = () => (showAllSources() ? sources : sources.slice(0, 10));

  // Function to extract domain from URL for display
  const getDomainFromUrl = (url) => {
    try {
      const domain = new URL(url).hostname.replace('www.', '');
      return domain;
    } catch {
      return url;
    }
  };

  // Function to get a clean title from URL
  // const getTitleFromUrl = (url) => {
  //   try {
  //     const urlObj = new URL(url);
  //     const pathname = urlObj.pathname;

  //     // Special handling for different domains

  //             const title = pathname.split('/').pop().replace(/_/g, ' ');

  //       return getDomainFromUrl(url);
  //     }
  //   } catch {
  //     return 'Research Source';
  //   }
  // };

  return (
    <div class={styles.aboutContainer}>
      <h2 class={styles.aboutTitle}>About HarperNet.org</h2>

      <div class={styles.aboutContent}>
        <div class={styles.aboutSection}>
          <h3 class={styles.sectionTitle}>Purpose</h3>
          <p>
            This site focuses on cognitive function comparisons between MBTI types, particularly
            exploring how subtle differences in function ordering create dramatically different
            approaches to information processing and decision-making.
          </p>
          <p>
            Rather than surface-level behavioral descriptions, the emphasis is on understanding how
            cognitive functions interact to create consistent patterns of perception and judgment.
            Sister and Brother type comparisons reveal how single-function swaps fundamentally alter
            personality expression.
          </p>
        </div>

        <div class={styles.aboutSection}>
          <h3 class={styles.sectionTitle}>Research Sources</h3>
          <p>
            The following academic sources and research papers inform the cognitive function
            framework and type theory presented on this site. These sources span neuroscience,
            personality psychology, and Jung's original work.
          </p>

          <div class={styles.sourcesContainer}>
            {visibleSources().map((source, index) => (
              <div class={styles.sourceItem}>
                <div class={styles.sourceNumber}></div>
                <div class={styles.sourceContent}>
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    class={styles.sourceLink}
                    // aria-label={`Visit source: ${getTitleFromUrl(source)}`}
                  >
                    {/* <div class={styles.sourceTitle}>
                      {getTitleFromUrl(source)}
                    </div> */}
                    <div class={styles.sourceDomain}>
                      [{index + 1}] {getDomainFromUrl(source)}
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {sources.length > 10 && (
            <div class={styles.sourcesToggle}>
              <button
                class={styles.toggleButton}
                onClick={() => setShowAllSources(!showAllSources())}
              >
                {showAllSources() ? 'Show Fewer Sources' : `Show all sources so far.`}
              </button>
            </div>
          )}

          <div class={styles.sourcesNote}>
            <p>
              <strong>Note:</strong> This collection represents work in progress and even though I
              give my best, some of the items will either disappear or others will join.
            </p>
          </div>
        </div>

        <div class={styles.aboutSection}>
          <h3 class={styles.sectionTitle}>Future Development</h3>
          <p>
            Potential additions include stress analysis, communication style mappings, and team
            dynamics frameworks.
          </p>
          <p>
            Considering integration with modern personality research findings, particularly
            neuroscience studies that validate or challenge traditional cognitive function theory.
            The goal remains practical application rather than academic completeness.
          </p>
          <p>
            Or nothing - depends on whether people actually find this useful. The current framework
            already provides more depth than most available resources, so future development will
            respond to actual user needs rather than feature creep.
          </p>
        </div>

        <div class={styles.aboutSection}>
          <h3 class={styles.sectionTitle}>Contact</h3>
          <p>
            Questions, feedback, or want to discuss cognitive function theory? Multiple ways to
            reach me depending on your preferred level of privacy:
          </p>
          <div class={styles.contactMethods}>
            <div class={styles.contactCategory}>
              <h4>Standard Contact</h4>
              <ul class={styles.contactList}>
                <li>
                  <strong>Alternative Email:</strong>{' '}
                  <a
                    href="mailto:soulwax@cock.li"
                    rel="noopener noreferrer"
                    aria-label="Send email to soulwax@cock.li"
                  >
                    soulwax@cock.li
                  </a>
                </li>
                <li>
                  <strong>Discord:</strong> <code class={styles.contactHandle}>soul.wax</code>
                  <span class={styles.contactNote}> (send friend request)</span>
                </li>
              </ul>
            </div>

            <div class={styles.contactCategory}>
              <h4>Privacy-Focused</h4>
              <ul class={styles.contactList}>
                <li>
                  <strong>Matrix:</strong>{' '}
                  <a
                    href="https://matrix.to/#/@soul.wax:matrix.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact soul.wax on Matrix"
                  >
                    @soul.wax:matrix.org
                  </a>
                </li>
                <li>
                  <strong>Session:</strong>{' '}
                  <code class={styles.contactHandle}>
                    Leave your Session ID in any other contact method
                  </code>
                </li>
                <li>
                  <strong>Signal:</strong>{' '}
                  <span class={styles.contactNote}>
                    Number available on request via other channels
                  </span>
                </li>
                <li>
                  <strong>Briar:</strong>{' '}
                  <span class={styles.contactNote}>
                    Mesh networking contact - ID available on request
                  </span>
                </li>
              </ul>
            </div>

            <div class={styles.contactCategory}>
              <h4>Maximum Anonymity</h4>
              <ul class={styles.contactList}>
                <li>
                  <strong>Disposable Methods:</strong>{' '}
                  <span class={styles.contactNote}>
                    Suggest a throwaway communication method via any above channel
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <p class={styles.contactFooter}>
            <strong>Response Time:</strong> Usually within 24-48 hours. Longer response times
            typically mean I'm just busy with life. Be patient pls.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
