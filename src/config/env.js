// File: src/config/env.js

export const config = {
  // Site Information
  siteName: import.meta.env.VITE_SITE_NAME || 'HarperNet.org',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://harpernet.org',
  environment: import.meta.env.VITE_ENVIRONMENT || __ENVIRONMENT__ || 'development',
  
  // Build Information (from Vite build constants)
  buildDate: __BUILD_DATE__,
  version: __VERSION__,
  commitHash: __COMMIT_HASH__,
  
  // Environment flags (from build constants)
  isProduction: __IS_PRODUCTION__,
  isDevelopment: __IS_DEVELOPMENT__,
  isStaging: __IS_STAGING__,
  
  // External Services
  githubRepo: import.meta.env.VITE_GITHUB_REPO || 'https://github.com/soulwax/harpernet.org',
  analyticsId: import.meta.env.VITE_ANALYTICS_ID || '',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  
  // Feature Flags
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true' && __IS_PRODUCTION__,
  enableDebug: import.meta.env.VITE_ENABLE_DEBUG === 'true' || __IS_DEVELOPMENT__,
  
  // Computed Properties
  get isVercel() {
    return import.meta.env.VERCEL === '1' || this.environment === 'vercel';
  },
  
  get baseUrl() {
    return this.siteUrl.replace(/\/$/, '');
  },
  
  get fullSiteName() {
    if (this.isDevelopment) return `${this.siteName} (Dev)`;
    if (this.isStaging) return `${this.siteName} (Staging)`;
    if (this.isVercel && !this.isProduction) return `${this.siteName} (Preview)`;
    return this.siteName;
  },
  
  get buildInfo() {
    return {
      version: this.version,
      date: this.buildDate,
      commit: this.commitHash,
      environment: this.environment
    };
  }
};

// Log configuration in development
if (__IS_DEVELOPMENT__) {
  console.log('🔧 App Configuration:', config);
}