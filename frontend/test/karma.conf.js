'use strict';

module.exports = function(config) {
  config.set({
    autoWatch: true,
    basePath: '../',
    frameworks: ['jasmine', 'karma-jasmine-cucumber'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-route/angular-route.js',
      'app/**/*.js',
      'test/unit/**/*.js'
    ],
    port: 8080,
    browsers: [
      'PhantomJS'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-jasmine-cucumber'
    ],
    singleRun: false,
    colors: true,
    logLevel: config.LOG_INFO
  });
};
