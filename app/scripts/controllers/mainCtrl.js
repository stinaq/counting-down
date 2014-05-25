'use strict';

angular.module('countingDown.controllers')
.controller('MainCtrl', function ($scope, $timeout, $moment, $location) {

  $scope.timeDateInput = '';
  $scope.title = 'hgf';
  $scope.years = 0;
  $scope.days = 0;
  $scope.hours = 0;
  $scope.minutes = 0;
  $scope.seconds = 0;

  $scope.hasValidDate = false;

  $scope.handleStart = function () {
    $scope.hasValidDate = true;
  };

});
