// File: src/components/Footer.jsx

import styles from "./Footer.module.css";

const Footer = () => {
  // Package information - hard-coded from package.json to avoid file imports
  const packageInfo = {
    name: "Jungian Differential Psychology - aka 'MBTI'",
    version: "1.2.1",
    description: "This page is intended to give you insights into Jungian psychology and the MBTI framework. Maybe something you haven't yet considered.",
    author: "soulwax@github",
    license: "GPL-3.0",
    homepage: "harpernet.org",
    repository: {
      type: "git",
      url: "https://github.com/soulwax/sister-mbti-solidjs.git",
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer class={styles.footer}>
      <div class={styles.footerContent}>
        <div class={styles.footerSection}>
          <h3 class={styles.footerTitle}>{packageInfo.name}</h3>
          <p class={styles.footerDescription}>{packageInfo.description}</p>
          <p class={styles.footerVersion}>Version: {packageInfo.version}</p>
        </div>

        <div class={styles.footerSection}>
          <h3 class={styles.footerTitle}>Links</h3>
          <ul class={styles.footerLinks}>
            <li>
              <a
                href={packageInfo.repository.url.replace(".git", "")}
                target="_blank"
                rel="noopener noreferrer"
                class={styles.footerLink}
              >
                GitHub Repository
              </a>
            </li>
            <li>
              <a
                href={`https://${packageInfo.homepage}`}
                target="_blank"
                rel="noopener noreferrer"
                class={styles.footerLink}
              >
                Homepage
              </a>
            </li>
            <li>
              <a
                href="https://www.gnu.org/licenses/gpl-3.0.en.html"
                target="_blank"
                rel="noopener noreferrer"
                class={styles.footerLink}
              >
                GPL-3.0 License
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class={styles.footerBottom}>
        <p class={styles.copyright}>
          © {currentYear} {
            <a
              href="https://github.com/harpernet.org"
              target="_blank"
              rel="noopener noreferrer"
              class={styles.footerLink}
            >
              {packageInfo.author}
            </a>
          } | Licensed under{" "}
          {packageInfo.license}
        </p>
      </div >
    </footer >
  );
};

export default Footer;