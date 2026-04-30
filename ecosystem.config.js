// File: ecosystem.config.js

module.exports = {
  apps: [
    {
      name: 'harpernet-org',
      cwd: __dirname,
      script: 'npm',
      args: 'run serve',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      min_uptime: '10s',
      max_restarts: 10,
      kill_timeout: 5000,
      time: true,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
