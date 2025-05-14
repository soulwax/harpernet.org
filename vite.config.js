// File: vite.config.js

import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
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
