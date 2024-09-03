import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://codeit-ci-cd-practice.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
