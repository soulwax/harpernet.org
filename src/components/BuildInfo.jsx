// File: src/components/BuildInfo.jsx

import { config } from '@config/env.js';
import styles from './BuildInfo.module.css';

const BuildInfo = () => {
  // Only render in development or staging
  if (config.isProduction && !config.enableDebug) return null;

  return (
    <div class={styles.buildInfo}>
      <h3>Build Information</h3>
      <dl>
        <dt>Environment:</dt>
        <dd>{config.environment}</dd>
        
        <dt>Version:</dt>
        <dd>{config.version}</dd>
        
        <dt>Build Date:</dt>
        <dd>{new Date(config.buildDate).toLocaleString()}</dd>
        
        <dt>Commit:</dt>
        <dd>{config.commitHash}</dd>
        
        <dt>Site Name:</dt>
        <dd>{config.fullSiteName}</dd>
        
        <dt>Site URL:</dt>
        <dd>{config.siteUrl}</dd>
        
        {config.isVercel && (
          <>
            <dt>Deployment:</dt>
            <dd>Vercel</dd>
          </>
        )}
      </dl>
    </div>
  );
};

export default BuildInfo;