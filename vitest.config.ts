import path from "node:path";
import react from "@vitejs/plugin-react-swc";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    ...configDefaults,
    globals: true,
    environment: "jsdom",
    exclude: ["node_modules", "e2e"],
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
