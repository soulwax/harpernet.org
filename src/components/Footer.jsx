// File: src/components/Footer.jsx

import styles from "./Footer.module.css";

const Footer = () => {
  // Package information - hard-coded from package.json to avoid file imports
  const packageInfo = {
    name: "mbti-sister-type-strategies",
    version: "1.0.0",
    description: "Side-by-side comparison of MBTI personality types",
    author: "soulwax@github",
    license: "GPL-3.0",
    homepage: "sistertypes.madtec.org",
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
          © {currentYear} {packageInfo.author.split("@")[0]} | Licensed under{" "}
          {packageInfo.license}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
