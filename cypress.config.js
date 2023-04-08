const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://api.openweathermap.org/data/2.5/',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
  },
  fixturesFolder: false,
  video: false,
  screenshotOnRunFailure: false,
  },
});