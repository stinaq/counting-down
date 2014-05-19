'use strict';

angular.module('countingDown', ['countingDown.controllers', 'ngRoute', 'angular-momentjs'])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/start.html',
      controller: 'StartCtrl'
    })
    .otherwise({
      templateUrl: 'views/start.html',
      controller: 'InputCtrl'
    });
});

angular.module('countingDown.controllers', []);
