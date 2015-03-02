'use strict';

(function() {
    describe('dashboard', function () {
        it('should have dashboard container', function () {
            browser.get('/');

            var dashboardContainer = element(by.id('dashboard'));
            expect(dashboardContainer.isPresent()).toBe(true);
        });
    });
})();
