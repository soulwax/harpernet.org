import { config } from '@config/env.js';
import githubIcon from '@assets/icons/github.svg';
import solidIcon from '@assets/solid.svg';
import styles from './Footer.module.css'; // Same folder = relative OK

const Footer = () => {
  return (
    <footer class={styles.footer}>
      <div class={styles.footerContent}>
        <div class={styles.footerSection}>
          <h4>{config.siteName}</h4>
          <p>Built with SolidJS</p>
          {config.enableDebug && <p>Environment: {config.environment}</p>}
        </div>

        <div class={styles.footerSection}>
          <h4>Links</h4>
          <a href={config.githubRepo} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
            GitHub Repository
          </a>
          <a href="https://solidjs.com" target="_blank" rel="noopener noreferrer">
            <img src={solidIcon} alt="SolidJS" />
            Built with Solid.JS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
