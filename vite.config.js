// File: vite.config.js

import { resolve } from "path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === "production";

  return {
    plugins: [solidPlugin()],
    server: {
      port: 3890,
      host: true, // Allow connections from network
      strictPort: true, // Do not try another port if 3890 is in use
      // Improved historyApiFallback for development
      historyApiFallback: {
        disableDotRule: true,
        rewrites: [
          { from: /^\/brother-types/, to: "/index.html" },
          { from: /./, to: "/index.html" },
        ],
      },
    },
    build: {
      target: "esnext",
      minify: isProduction,
      sourcemap: !isProduction,
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
        output: {
          manualChunks: undefined,
          inlineDynamicImports: false,
        },
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },

    // Create specialized base path handling
    base: "/",

    // Extra build options for the SPA
    experimental: {
      renderBuiltUrl(filename, { hostType }) {
        return filename;
      },
    },
  };
});