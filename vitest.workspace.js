import { defineWorkspace } from "vitest/config";
import react from '@vitejs/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

export default defineWorkspace([
  {
    test: {
      include: ["**/*.node.test.{js,jsx}"],
      exclude: ["**/*.browser.test.{js,jsx}"],
      name: "happy-dom",
      environment: "happy-dom",
    },
    plugins: [tanstackRouter(), react()],
  },
  {
    test: {
      setupFiles: ["vitest-browser-react"],
      include: ["**/*.browser.test.{js,jsx}"],
      name: "browser",
      browser: {
        provider: "playwright",
        enabled: true,
        name: "chromium",
      },
    },
    plugins: [tanstackRouter(), react()],
  },
]);