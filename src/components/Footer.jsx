// File: src/components/Footer.jsx

import styles from './Footer.module.css';
import packageJson from '../../package.json';
import dotenv from 'dotenv';
const Footer = () => {
  dotenv.config();
  const siteName = process.env.VITE_SITE_NAME || 'localhost';
  const siteUrl = process.env.VITE_SITE_URL || `http://${siteName}:3890`;
  // Package information - hard-coded from package.json to avoid file imports
  const packageInfo = {
    name: siteName,
    version: packageJson.version,
    description: packageJson.description,
    author: packageJson.author,
    license: packageJson.license,
    homepage: siteUrl,
    technology: packageJson.technology,
    technologyHomepage: packageJson.technologyHomepage,
    repository: packageJson.repository,
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
                href={packageInfo.repository.url.replace('.git', '')}
                target="_blank"
                rel="noopener noreferrer"
                class={styles.footerLink}
              >
                GitHub Repository
              </a>
            </li>
            <li>
              <a
                href={`${siteUrl}`}
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
          © {currentYear}{' '}
          {
            <a
              href={packageInfo.repository.url.replace('.git', '')}
              target="_blank"
              rel="noopener noreferrer"
              class={styles.footerLink}
            >
              {packageInfo.author}
            </a>
          }{' '}
          | Licensed under {packageInfo.license}
        </p>
        <br />
        <p class={styles.bottomCitation}>Jung did not walk away unchanged. No one ever does.</p>
      </div>
    </footer>
  );
};

export default Footer;
