// vite.config.js
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3890, // Match your original port
  },
  build: {
    target: "esnext",
  },
});
