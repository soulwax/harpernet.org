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
    },
    build: {
      target: "esnext",
      minify: isProduction,
      sourcemap: !isProduction,
    },
    resolve: {
      alias: {
        // TODO: Add any path aliases if needed here
      },
    },
  };
});
