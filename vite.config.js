// File: vite.config.js

import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  preview: {
    port: 3890,
    host: true,
    allowedHosts: ["localhost", "localhost:3890", "harpernet.org"],
  },
  plugins: [solidPlugin()],
  server: {
    port: 3890,
    host: true,
    // Simple fallback for SPA routing
    proxy: {
      "/brother-types": {
        target: "http://localhost:3890",
        rewrite: () => "/index.html",
      },
      "/about": {
        target: "http://localhost:3890",
        rewrite: () => "/index.html",
      },
      "/cognitive-functions": {
        target: "http://localhost:3890",
        rewrite: () => "/index.html",
      },
    },
  },
  build: {
    target: "esnext",
    // Generate server-side redirects for production
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
