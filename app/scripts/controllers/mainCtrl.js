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
  $scope.hasValidTitle = false;

  var secondsPerYear = 31557600;
  var secondsPerDay = 86400;
  var secondsPerHour = 3600;
  var secondsPerMinute = 60;

  $scope.handleStart = function () {
    $scope.hasValidDate = true;
  };

  var validateTitle = function (title) {
    if (title === 'undefined' || title === 'null' || title === '') {
      $scope.hasValidTitle = false;
      $scope.title = '';
    } else {
      $scope.title = title;
    }
  };

});
