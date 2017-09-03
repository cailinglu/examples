const configuration = {
  basePath: '',
  files: [
    './tests/client/**/*.ts', // Test files glob
    './src/client/**/*.ts', // Source files glob
  ],
  preprocessors: {
    './tests/client/**/*.ts': 'karma-typescript', // Process test files
    './src/client/**/*.ts': 'karma-typescript' // Process source files
  },
  karmaTypescriptConfig: {
    reports: {
      'lcovonly': {
        directory: 'coverage',
        filename: 'lcov.info'
      }
    }
  },
  frameworks: [ 'mocha', 'chai', 'karma-typescript' ],
  plugins: [
    'karma-chai',
    'karma-mocha',
    'karma-chrome-launcher',
    'karma-typescript',
  ],
  mime: {
    "text/x-typescript": [ "ts", "tsx" ]
  },
  reporters: [ 'dots', 'karma-typescript' ],
  port: 8000,
  browsers: [ 'Chrome' ],
  colors: true,
  autoWatch: true,
  customLaunchers: {
    ChromeTravisCI: {
      base: 'Chrome',
      flags: [ '--no-sandbox' ]
    }
  }
};

if (process.env.TRAVIS) {
  configuration.browsers = [ 'ChromeTravisCI' ];
}

module.exports = config => config.set(configuration);
