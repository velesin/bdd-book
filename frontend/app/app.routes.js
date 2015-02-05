'use strict';

angular
  .module('spaceShipApp')
  .config(function config($routeProvider) {
        $routeProvider
            .when('/', {
              templateUrl: 'layout/dashboard.html',
              controller: 'Dashboard'
            });
    });