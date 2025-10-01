const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // register the reporter plugin
      const mochawesome = require('cypress-mochawesome-reporter/plugin');
      mochawesome(on);
      return config;
    },
    baseUrl: 'https://example.com',  // replace with your AUT
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    overwrite: false,
    html: true,
    json: true,
  },
});
