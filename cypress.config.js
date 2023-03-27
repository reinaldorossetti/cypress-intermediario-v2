const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://192.168.18.4',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
  },
  fixturesFolder: false,
  video: false,
  },
});