'use strict';

angular.module('countingDown.controllers')
.controller('MainCtrl', function ($scope, $timeout, $moment, $location) {

  $scope.timeDate = '';
  $scope.title = '';

  $scope.hasValidDate = false;

  $scope.handleStart = function () {
    $scope.hasValidDate = true;
  };

});
