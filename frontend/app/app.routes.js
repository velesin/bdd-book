'use strict';

(function() {
  angular
      .module('spaceShipApp')
      .config(config);

  function config($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'dashboard/dashboard.html',
          controller: 'Dashboard',
          controllerAs: 'vm'
        });
  }
})();
