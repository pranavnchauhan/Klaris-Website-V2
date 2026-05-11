import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

/**
 * Scoped Vitest config — only runs tests for the contact route.
 * No other files in this repo are tested with Vitest yet.
 */
export default defineConfig({
  test: {
    include: ["src/app/api/contact/**/*.test.ts"],
    environment: "node",
    clearMocks: true,
    restoreMocks: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
