/* eslint-env node */
'use strict';

var baseConfig = require('./karma.conf');

var customLaunchers = {
};

module.exports = function(config) {
  baseConfig(config);

  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    throw new Error('SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are required but are missing');
  }

  config.set({
    singleRun: true,

    browsers: ['PhantomJS'].concat(Object.keys(customLaunchers)),

    browserNoActivityTimeout: 30000, // These tests seem to occasionally stall for a bit, causing it to disconnect

    customLaunchers: customLaunchers,

    sauceLabs: {
      testName: require('./package.json').name
    },

    coverageReporter: {
      reporters: [
        { type: 'lcov' }
      ]
    }
  });
};
