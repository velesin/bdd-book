'use strict';

var cucumber = require('protractor-jasmine-cucumber');
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'firefox'
    },
    baseUrl: "http://localhost:9000",
    suites: {
        suite1 : cucumber.injectFiles('e2e/**/*.spec.js')
    }
}