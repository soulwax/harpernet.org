// File: vite.config.js

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import dotenv from 'dotenv';
export default defineConfig({
  base: '/harpernet.org/',
  preview: {
    port: 3890,
    host: true,
    allowedHosts: [
      'localhost',
      'localhost:3890',
      'harpernet.org',
      'www.harpernet.org',
      'harpernet.vercel.app',
      'harpernet.pages.dev',
      dotenv.config().parsed?.VITE_SITE_NAME || 'localhost',
      `${dotenv.config().parsed?.VITE_SITE_NAME || 'localhost'}:3890`,
    ],
  },
  plugins: [solidPlugin()],
  server: {
    port: 3890,
    host: true,
    allowedHosts: 'harpernet.org',
    proxy: {
      '/brother-types': {
        target: 'http://localhost:3890',
        rewrite: () => '/index.html',
      },
      '/about': {
        target: 'http://localhost:3890',
        rewrite: () => '/index.html',
      },
      '/cognitive-functions': {
        target: 'http://localhost:3890',
        rewrite: () => '/index.html',
      },
      '/cognitive-functions-detailed': {
        target: 'http://localhost:3890',
        rewrite: () => '/index.html',
      },
      '/relationships': {
        target: 'http://localhost:3890',
        rewrite: () => '/index.html',
      },
      '/metabolic-principles': {
        target: 'http://localhost:3890',
        rewrite: () => '/index.html',
      },
      '/sister-types': {
        target: 'http://localhost:3890',
        rewrite: () => '/index.html',
      },
      '/metabolic-game': {
        target: 'http://localhost:3890',
        rewrite: () => '/index.html',
      },
    },
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        // Preserve original asset filenames instead of hashing them
        assetFileNames: (assetInfo) => {
          // Keep original names for specific file types
          if (assetInfo.name) {
            // For images, fonts, and other assets, preserve original names
            const extType = assetInfo.name.split('.').pop();
            if (
              [
                'png',
                'jpg',
                'jpeg',
                'gif',
                'svg',
                'webp',
                'ico',
                'woff',
                'woff2',
                'ttf',
                'eot',
              ].includes(extType)
            ) {
              return `assets/${assetInfo.name}`;
            }
            // For CSS files, preserve names but add content hash for cache busting
            if (extType === 'css') {
              return `assets/[name].[hash].css`;
            }
          }
          // Default hashing for other assets
          return 'assets/[name].[hash].[ext]';
        },
        // Preserve original chunk names
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
  // Ensure assets are properly handled
  assetsInclude: ['**/*.gif', '**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.webp'],
});
