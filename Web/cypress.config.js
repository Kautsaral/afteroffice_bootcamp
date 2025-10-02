const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // require("cypress-mochawesome-reporter")(on);
    },
    supportFile: "cypress/support/e2e.js",
    defaultCommandTimeout: 30000, // dalam milisecond (30 detik)
    baseUrl: "https://www.saucedemo.com/",
    viewportHeight: 720,
    viewportWidth: 1200,
    env: {
      username: "standard_user",
      password: "secret_sauce",
    },
    video: false,
  },
});
