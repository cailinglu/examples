const WEBPACK_CONFIG = require('./webpack.config');

const configuration = {
  basePath: '',
  files: [
    './tests/client/**/*.spec.ts',
    './src/client/**/*.ts',
  ],
  preprocessors: {
    './tests/client/**/*.ts': [ 'webpack', 'sourcemap' ],
  },
  frameworks: [ 'mocha', 'chai' ],
  plugins: [
    'karma-chai',
    'karma-chrome-launcher',
    'karma-mocha',
    'karma-sourcemap-loader',
    'karma-webpack',
    'karma-coverage'
  ],
  mime: {
    "text/x-typescript": [ "ts", "tsx" ]
  },
  webpack: WEBPACK_CONFIG,
  reporters: 'coverage',
  port: 8000,
  browsers: [ 'Chrome' ],
  colors: true,
  autoWatch: true,
  customLaunchers: {
    ChromeTravisCI: {
      base: 'Chrome',
      flags: [ '--no-sandbox' ]
    }
  },
  coverageReporter: {
    type: 'lcovonly'
  }
};

if (process.env.TRAVIS) {
  configuration.browsers = [ 'ChromeTravisCI' ];
}

module.exports = config => config.set(configuration);
