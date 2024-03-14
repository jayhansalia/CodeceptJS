// const { WebDriverIO } = require('@codeceptjs/webdriverio');

exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://aljazeera.com/',
      browser: 'chrome',
      windowSize: "maximize",
      timeouts: {
        "script": 60000,
        "page load": 10000
      },
      user: process.env.BROWSERSTACK_USERNAME,
      key: process.env.BROWSERSTACK_ACCESS_KEY,
      services: [
        ['browserstack', {
          testObservability: true,
          testObservabilityOptions: {
            projectName: "CodeceptJS Project",
            buildName: "Regression"
          },
          browserstackLocal: true
        }]
      ],
    },
    "AssertWrapper": {
      "require": "codeceptjs-assert"
    }
  },
  include: {
    I: './steps_file.js'
  },

  // async bootstrapAll() {
  //   console.log('Run bootstrapAll');
  // },

  // async bootstrap() {
  //   console.log('Run bootstrap');
  // },

  // async teardown() {
  //   console.log('Run teardown');
  // },

  // async teardownAll() {
  //   console.log('Run teardownAll');
  // },

  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/*.js',
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: 'allure-codeceptjs',
      outputDir: './output/allure-raw',
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
    pattern: 'wait.*',
    timeout: 0
  },
  {
    pattern: 'amOnPage',
    timeout: 0
  }
  ],
  tests: './*_test.js',
  name: 'CodeceptJSProject'
}