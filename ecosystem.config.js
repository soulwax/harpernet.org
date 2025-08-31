// File: ecosystem.config.js

module.exports = {
  apps: [
    {
      name: 'mbti-app',
      script: 'npm',
      args: 'run serve',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};