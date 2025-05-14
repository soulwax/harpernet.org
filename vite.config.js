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
      historyApiFallback: true, // This is the key for SPA routing
    },
    build: {
      target: "esnext",
      minify: isProduction,
      sourcemap: !isProduction,
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    base: "/",
  };
});
gg;
