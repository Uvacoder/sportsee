import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import styleX from "vite-plugin-stylex";
// import "vite/client";

// const isDev = import.meta.env.DEV;
// const apiUrl = isDev ? "http://localhost:3000" : import.meta.env.VITE_API_URL;

// Function to load environment variables
const loadEnvVariables = (mode: string) => {
  const env = loadEnv(mode, process.cwd(), "");
  return env;
};

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  // Load environment variables
  const env = loadEnvVariables(mode);

  return defineConfig({
    plugins: [react(), styleX()],
    server: {
      open: true,
      proxy: {
        "/api": {
          target: env.VITE_API_URL || "http://localhost:3000", // Use the environment variable or fallback to default
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    build: {
      sourcemap: true, // Explicitly enable source maps
    },
  });
};
