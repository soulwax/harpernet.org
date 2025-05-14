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
            Jungian psychology has long fascinated those interested in the
            discipline of differential psychology within the context of
            personality and behavior. This project tries to explain and explore
            aspects of the Jungian school of thought that wasn't prior done in this
            way.
          </p>
          <p>
            This comparison tool should help you understand the
            distinctions between personality types that often get confused, providing some
            clarity through side-by-side analysis of
            their approaches, strengths, and characteristic behaviors. As of
            March 14th 2025, the focus lies on sister types, where Judging and
            Perceiving preferences are swapped and directly compared using five
            criteria:
          </p>
          <ol>
            <li>Main driving force</li>
            <li>Early life strategies</li>
            <li>
              Emotional development and expression as well as subjective inner
              nuance
            </li>
            <li>How the type fits within a structure</li>
            <li>The gift of the type to the world</li>
          </ol>
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
            approach, this project aims to remix understanding of personality
            type dynamics as per C.G.Jung's differential psychology methods and
            analytical psychology.
          </p>
          <p>
            With a background in neurology and software engineering and a
            fascination with Jung clinical practices, the creator built this
            resource to make complex psychological concepts easy to grasp and
            visually comparable.
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
        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>License</h3>
          <p>
            This project is licensed under the{" "}
            <a
              href="https://opensource.org/licenses/GPL-3.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              GPL-3.0 License
            </a>
            . Feel free to use, modify, and distribute this project as long as
            you adhere to the same license terms.
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
            href="https://harpernet.org"
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
