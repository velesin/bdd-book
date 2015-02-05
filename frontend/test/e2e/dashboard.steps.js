'use strict';

(function() {
    var featureSteps = require('protractor-jasmine-cucumber').featureSteps;
    featureSteps('Entering the space ship system')
        .when('I enter to the system', function(){
            browser.get('/');
        })
        .then('I should se valid page', function(){
            var body = element(by.css('body'));
            expect(body.isPresent()).toBe(true);
        });
})();