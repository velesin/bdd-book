(function() {
  'use strict';

  angular
      .module('spaceShipApp')
      .config(config);

  function config($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'layout/dashboard.html',
          controller: 'Dashboard',
          controllerAs: 'vm'
        });
  }
})();