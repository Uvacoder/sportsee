import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import styleX from "vite-plugin-stylex";
import "vite/client";

const isDev = import.meta.env.DEV;
const apiUrl = isDev ? "http://localhost:3000" : import.meta.env.VITE_API_URL;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), styleX()],
  server: {
    open: true,
    proxy: {
      "/api": {
        target: apiUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    sourcemap: true, // Explicitly enable source maps
  },
});
