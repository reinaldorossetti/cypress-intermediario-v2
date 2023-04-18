const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  e2e: {
    specPattern: "cypress/e2e/api/openweathermap/*.spec.js",
    baseUrl: 'http://api.openweathermap.org/data/2.5/',
    
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      allureWriter(on, config);
      return config;
  },
  fixturesFolder: false,
  video: false,
  screenshotOnRunFailure: false,
  },
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: true,
    html: true,
    json: true,
  }
});