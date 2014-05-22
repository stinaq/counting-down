'use strict';

angular.module('countingDown.controllers')
.controller('TimeLeftCtrl', function ($scope, $timeout, $moment) {

  var testTime = 1400701273;

  $scope.years = 0;
  $scope.days = 0;
  $scope.months = 0;
  $scope.days = 0;
  $scope.hours = 0;
  $scope.minutes = 0;
  $scope.seconds = 0;

  var secondsPerYear = 31557600;
  var secondsPerDay = 86400;
  var secondsPerHour = 3600;
  var secondsPerMinute = 60;

  var quotientWithRemainder = function (numerator, denominator) {

    var remainder = numerator % denominator;
    var temp = numerator - remainder;
    var quotient = temp / denominator;

    return {
      quotient: quotient,
      remainder: remainder
    };
  };

  var tickDown = function() {
    var now = $moment();
    var endTime = $moment.unix(testTime);

    $scope.days = endTime.diff(now, 'days');
    $scope.hours = endTime.diff(now, 'hours');
    $scope.minutes = endTime.diff(now, 'minutes');
    $scope.seconds = endTime.diff(now, 'seconds');
    $timeout(tickDown, 1000);
  };

  $timeout(tickDown, 1000);

  $scope.a = 'sodfuh';

});
