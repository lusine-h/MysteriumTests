const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://mystnodes.com',
      show: true,
      browser: 'chromium',
      windowSize: '1920x1080'
    },
    AssertWrapper : {
      require: "codeceptjs-assert"
    }
  },
  include: {
    I: './customUtils.js',
    MainLocators: './locators/LoginFragmentLocators.js',
    UserData: './data/users.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'mysteriumNetwork',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}