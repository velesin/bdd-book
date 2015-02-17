'use strict';

(function() {
    describe('When I enter the main page of the system', function () {
        it('Then I should see a dashboard', function () {
            browser.get('/');

            var body = element(by.css('body'));
            expect(body.isPresent()).toBe(true);
        });
    });
})();
