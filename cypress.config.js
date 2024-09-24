const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.setportal.set.or.th/setdd/',
    defaultCommandTimeout: 100000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        // `args` is an array of all the arguments that will be passed to browsers when it launches
        console.log(launchOptions.args) // print all current args
        
        if (browser.name === 'edge') {
          // open edge as inprivate mode
          launchOptions.args.push('--inprivate')
        }

        return launchOptions
      })
    },
    video: true,
  },
});
