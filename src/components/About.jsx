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
            Apparently that required building a whole website.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>Tech Stack</h3>
          <p>
            SolidJS because it's fast and doesn't get in the way. Vite for builds.
            CSS modules for styling. Dark/light theme because it's Current Year +9 soyjak.jpg.
          </p>
          <p>
            Open source under GPL-3.0. Code's on GitHub if you want to poke around
            or contribute. The data structure makes adding new comparisons pretty
            straightforward.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>Future Plans</h3>
          <p>
            More relationship dynamics, maybe some interactive tools for exploring
            cognitive function development. Or nothing - depends on whether people
            actually find this useful.
          </p>
        </div>
      </div>

      <div className={styles.contactSection}>
        <h3 className={styles.sectionTitle}>Links</h3>
        <p>
          <a
            href="https://github.com/soulwax/harpernet.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://harpernet.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;