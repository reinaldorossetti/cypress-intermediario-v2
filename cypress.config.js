const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://192.168.18.4',
  },
  fixturesFolder: false,
  video: false,
  reporter: 'json',
  reporterOptions: {
    mochaFile: 'cypress/results/my-test-output.json',
    toConsole: true,
  },
})