const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
            launchOptions.args.push("--incognito");                
            return launchOptions
        }

        if (browser.name === 'electron') {                
            launchOptions.preferences.incognito = true               
            return launchOptions
        }
    })    
      // implement node event listeners here they will run before any test case
    },
    
  },
    env:{
      URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
    },
    viewportHeight:1000,
    viewportWidth:600

});
