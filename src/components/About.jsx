// File: src/components/About.jsx

import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer} id="about">
      <h2 className={styles.aboutTitle}>About This Project</h2>

      <div className={styles.aboutContent}>
        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>The Project</h3>
          <p>
            MBTI Sister Types is a passion project designed to explore the
            nuanced differences between Myers-Briggs personality types that
            share the same cognitive functions but in a different order. Sister
            types (those with the same letters except for J/P) offer fascinating
            insights into how slight changes in cognitive function stacking can
            create distinctly different personality expressions.
          </p>
          <p>
            This comparison tool helps enthusiasts understand the subtle
            distinctions between personality types that often get confused with
            one another, providing clarity through side-by-side analysis of
            their approaches, strengths, and characteristic behaviors.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>The Creator</h3>
          <p>
            This project was created by a programmer at heart who prefers to
            remain anonymous online, using the pseudonym "soulwax" – named after
            the influential Belgian electronic band.
          </p>
          <p>
            Like the band known for their innovative remixes and genre-blending
            approach, this project aims to remix our understanding of
            personality type dynamics by highlighting the unique qualities that
            emerge from different cognitive function arrangements.
          </p>
          <p>
            With a background in software engineering and a fascination with
            personality psychology, the creator built this resource to make
            complex psychological concepts more accessible and visually
            comparable.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>Technology</h3>
          <p>
            This application is built with SolidJS for its exceptional
            performance and simplicity, combined with Vite for lightning-fast
            builds. The project uses CSS modules for component-scoped styling
            and a clean, responsive design that works across all devices.
          </p>
          <p>
            The entire project is open-source under the GPL-3.0 license, and
            contributions are welcome on GitHub. Whether you're interested in
            improving the UI, adding new type comparisons, or enhancing
            accessibility, your pull requests are appreciated.
          </p>
        </div>
      </div>

      <div className={styles.contactSection}>
        <h3 className={styles.sectionTitle}>Connect</h3>
        <p>
          Find this project on{" "}
          <a
            href="https://github.com/soulwax/sister-mbti-solidjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          or visit the{" "}
          <a
            href="https://sistertypes.madtec.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            live site
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
