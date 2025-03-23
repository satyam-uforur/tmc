import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Ensure correct aliasing
    },
  },
  build: {
    outDir: "dist", // Ensure output directory is correct
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"), // Explicitly define entry file
    },
  },
});
