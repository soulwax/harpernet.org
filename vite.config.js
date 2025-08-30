// File: vite.config.js

import { defineConfig, loadEnv } from 'vite';
import solid from 'vite-plugin-solid';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  // Load env file based on mode
  const env = loadEnv(mode, process.cwd(), '');

  const isProduction = mode === 'production';
  const isDevelopment = mode === 'development';
  const isStaging = mode === 'staging';

  // Get site name from environment or fallback
  const siteName = env.VITE_SITE_NAME || 'harpernet.org';
  const siteUrl = env.VITE_SITE_URL || 'https://harpernet.org';

  console.log(`🔧 Building for ${mode} mode...`);
  if (isDevelopment) {
    console.log(`📡 Site: ${siteName}`);
    console.log(`🌐 URL: ${siteUrl}`);
  }

  return {
    plugins: [
      solid({
        // SolidJS optimizations
        babel: {
          plugins: isProduction ? [] : [],
        },
      }),
    ],

    // Path aliases for cleaner imports
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@components': resolve(__dirname, 'src/components'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@assets': resolve(__dirname, 'src/assets'),
        '@styles': resolve(__dirname, 'src/styles'),
        '@data': resolve(__dirname, 'src/data'),
        '@utils': resolve(__dirname, 'src/utils'),
        '@config': resolve(__dirname, 'src/config'),
        '@contexts': resolve(__dirname, 'src/contexts'),
      },
    },

    // Global build constants
    define: {
      __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
      __VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0'),
      __ENVIRONMENT__: JSON.stringify(mode),
      __COMMIT_HASH__: JSON.stringify(process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || 'local'),
      __IS_PRODUCTION__: JSON.stringify(isProduction),
      __IS_DEVELOPMENT__: JSON.stringify(isDevelopment),
      __IS_STAGING__: JSON.stringify(isStaging),
    },

    // Development server (keeping your preferences)
    server: {
      port: parseInt(env.VITE_DEV_PORT) || 3890,
      host: true,
      open: env.VITE_AUTO_OPEN !== 'false',

      // Improved allowed hosts using environment variables
      allowedHosts: [
        'localhost',
        'localhost:3890',
        siteName,
        `www.${siteName}`,
        'harpernet.vercel.app',
        'harpernet.pages.dev',
        ...(env.VITE_ADDITIONAL_HOSTS ? env.VITE_ADDITIONAL_HOSTS.split(',') : []),
      ],

      // Simplified proxy - SPA fallback handles all routes
      proxy: {
        // API proxy if you have a backend
        ...(env.VITE_API_PROXY
          ? {
              '/api': {
                target: env.VITE_API_PROXY,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
              },
            }
          : {}),
        // Note: SPA routing is better handled by historyApiFallback in build
      },

      // Enable HTTPS if needed
      https: env.VITE_HTTPS === 'true' ? {} : false,
    },

    // Preview server (keeping your port preference)
    preview: {
      port: parseInt(env.VITE_PREVIEW_PORT) || 3890,
      host: true,
      open: env.VITE_AUTO_OPEN !== 'false',

      allowedHosts: [
        'localhost',
        'localhost:3890',
        siteName,
        `www.${siteName}`,
        'harpernet.vercel.app',
        'harpernet.pages.dev',
        ...(env.VITE_ADDITIONAL_HOSTS ? env.VITE_ADDITIONAL_HOSTS.split(',') : []),
      ],
    },

    // Build configuration (improved version of yours)
    build: {
      target: 'esnext', // Keeping your preference
      sourcemap: !isProduction || isStaging,
      minify: isProduction ? 'esbuild' : false,

      rollupOptions: {
        output: {
          // Your manual chunks preference (keeping as undefined)
          manualChunks: isProduction
            ? {
                // Optional: enable chunking for production optimization
                'solid-core': ['solid-js'],
                'app-data': [
                  './src/data/sisterTypes.json',
                  './src/data/brotherTypes.json',
                  './src/data/cognitiveFunctions.json',
                  './src/data/cognitiveFunctionsDetailed.json',
                  './src/data/relationships.json',
                  './src/data/metabolicPrinciples.json',
                ],
              }
            : undefined,

          // Your asset naming preferences (keeping original names for assets)
          assetFileNames: (assetInfo) => {
            if (assetInfo.name) {
              const extType = assetInfo.name.split('.').pop();

              // Preserve original names for images, fonts, etc.
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

              // CSS files with cache busting
              if (extType === 'css') {
                return isProduction ? `assets/[name].[hash].css` : `assets/[name].css`;
              }
            }

            // Default with conditional hashing
            return isProduction ? 'assets/[name].[hash].[ext]' : 'assets/[name].[ext]';
          },

          // Entry and chunk files (your preference with conditional hashing)
          chunkFileNames: isProduction ? 'assets/[name].[hash].js' : 'assets/[name].js',
          entryFileNames: isProduction ? 'assets/[name].[hash].js' : 'assets/[name].js',
        },
      },

      // Report compressed size in production
      reportCompressedSize: isProduction,

      // Chunk size warning limit
      chunkSizeWarningLimit: 1000,
    },

    // Your assets include (keeping your preferences)
    assetsInclude: [
      '**/*.gif',
      '**/*.svg',
      '**/*.png',
      '**/*.jpg',
      '**/*.jpeg',
      '**/*.webp',
      '**/*.md',
    ],

    // CSS configuration
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: isProduction ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]',
      },
    },

    // Environment prefix
    envPrefix: 'VITE_',

    // Base path (useful for subdirectory deployments)
    base: env.VITE_BASE_PATH || '/',

    // Optimization
    optimizeDeps: {
      include: ['solid-js', 'solid-js/web'],
    },

    // Esbuild configuration
    esbuild: {
      drop: isProduction ? ['console', 'debugger'] : [],
      target: 'esnext',
    },

    // Log level
    logLevel: isDevelopment ? 'info' : 'warn',
    clearScreen: isDevelopment,
  };
});
