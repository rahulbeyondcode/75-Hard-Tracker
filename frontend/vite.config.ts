import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      pages: "/src/pages",
      helpers: "/src/helpers",
      sass: "/src/sass",
    },
  },
});
