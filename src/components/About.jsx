// File: src/components/About.jsx

import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer} id="about">
      <h2 className={styles.aboutTitle}>About This Thing</h2>

      <div className={styles.aboutContent}>
        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>What This Is</h3>
          <p>
            A side-by-side comparison tool for MBTI types that commonly get mixed up.
            Built because the usual personality type descriptions are either too vague
            or too academic to be useful.
          </p>
          <p>
            Currently covers sister types (J/P swapped), brother types (E/I swapped),
            cognitive functions, in-depth function analysis, and type relationships.
            Each comparison uses specific criteria instead of generic stuff.
          </p>
          <p>
            This tool synthesizes insights from Jung's foundational work on psychological
            types with modern MBTI applications, providing practical comparisons grounded
            in cognitive function theory rather than surface-level behavioral descriptions.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>Theoretical Foundation</h3>
          <p>
            The cognitive function analysis draws from Carl Jung's original research
            on psychological types, particularly his identification of the eight
            cognitive functions and their hierarchical development within personality
            structure. The framework emphasizes Jung's distinction between conscious
            and unconscious mental processes.
          </p>
          <p>
            The developmental perspectives integrate Jung's insights about personality
            maturation across the lifespan, including the individuation process and
            the emergence of inferior functions in midlife. This creates a more
            nuanced understanding of type development beyond static categorization.
          </p>
          <p>
            Type relationship dynamics are informed by both Jungian analytical
            psychology and modern MBTI research on cognitive function interactions,
            particularly how different function stacks create characteristic
            communication patterns and interpersonal dynamics.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>Who Built It</h3>
          <p>
            Some programmer with a neurology background who got tired of MBTI
            resources that either oversimplify everything or disappear into
            theoretical rabbit holes. Goes by "soulwax" online.
          </p>
          <p>
            The goal was making Jung's ideas accessible without dumbing them down.
            Apparently that required building a whole website. The combination of
            technical background and typology interest led to this attempt at
            bridging academic rigor with practical application.
          </p>
          <p>
            Years of working with both personality assessment tools and neurological
            data convinced me that most online typology resources miss the mark
            by focusing on behaviors rather than underlying cognitive processes.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>Sources & References</h3>
          <p>
            The content integrates insights from multiple authoritative sources
            on psychological type theory and cognitive function development:
          </p>
          <ul className={styles.referenceList}>
            <li>
              <strong>Jung, C.G.</strong> <em>Psychological Types (Collected Works, Vol. 6)</em> -
              The foundational text establishing the eight cognitive functions and type theory
            </li>
            <li>
              <strong>Jung, C.G.</strong> <em>Memories, Dreams, Reflections</em> -
              Autobiographical insights into Jung's development of analytical psychology
            </li>
            <li>
              <strong>Routledge's Jung & Analytical Psychology catalog</strong> -
              Contemporary academic research on Jungian theory applications
            </li>
            <li>
              <strong>Sarkinova</strong> -
              Advanced cognitive function assessments and type development research
            </li>
            <li>
              <strong>HumanMetrics.com</strong> -
              Statistical analysis of type distributions and correlations
            </li>
            <li>
              <strong>Myers, I.B. & Briggs, K.C.</strong> <em>Gifts Differing: Understanding Personality Type</em> -
              Practical applications of type theory in everyday contexts
            </li>
          </ul>
          <p>
            Additional insights come from modern research in cognitive psychology,
            neuroscience, and personality development that validates or refines
            Jung's original theoretical framework.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>Methodology</h3>
          <p>
            The comparison framework prioritizes cognitive function analysis over
            behavioral surface traits. Each type pairing examines how different
            function stacks create distinct information processing patterns,
            decision-making approaches, and stress responses.
          </p>
          <p>
            Sister type comparisons focus on how auxiliary vs tertiary function
            development affects the same dominant function expression. Brother
            type comparisons highlight how introversion vs extraversion alters
            the entire cognitive function hierarchy.
          </p>
          <p>
            The detailed function analyses trace each cognitive function through
            its developmental arc from childhood through maturity, including
            shadow manifestations and integration challenges. This provides
            depth beyond simple function descriptions.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>Tech Stack</h3>
          <p>
            SolidJS because it's fast and doesn't get in the way. Vite for builds.
            CSS modules for styling. Dark/light theme because it's Current Year +9.
          </p>
          <p>
            Open source under GPL-3.0. Code's on GitHub if you want to poke around
            or contribute. The data structure makes adding new comparisons pretty
            straightforward.
          </p>
          <p>
            The architecture prioritizes maintainability and extensibility - new
            type comparisons, cognitive function analyses, or relationship dynamics
            can be added through JSON configuration without touching the core
            component logic.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>Future Plans</h3>
          <p>
            More relationship dynamics, maybe some interactive tools for exploring
            cognitive function development. Potential additions include stress
            analysis, communication style mappings, and team dynamics frameworks.
          </p>
          <p>
            Considering integration with modern personality research findings,
            particularly neuroscience studies that validate or challenge traditional
            cognitive function theory. The goal remains practical application
            rather than academic completeness.
          </p>
          <p>
            Or nothing - depends on whether people actually find this useful.
            The current framework already provides more depth than most available
            resources, so future development will respond to actual user needs
            rather than feature creep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;