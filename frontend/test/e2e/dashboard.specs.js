'use strict';

(function() {
    var feature = require('protractor-jasmine-cucumber').feature;
    feature('Entering the space ship system')
        .scenario('I should see dashboard panel')
        .when('I enter to the system')
        .then('I should se valid page');
})();
