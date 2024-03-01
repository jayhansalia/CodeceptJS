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
      }
    },
    "AssertWrapper": {
      "require": "codeceptjs-assert"
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js'],
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