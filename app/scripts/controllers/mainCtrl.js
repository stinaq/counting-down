'use strict';

angular.module('countingDown.controllers')
.controller('MainCtrl', function ($scope, $timeout, $moment, $location) {

  $scope.secondsPerYear = 31557600;
  $scope.secondsPerDay = 86400;
  $scope.secondsPerHour = 3600;
  $scope.secondsPerMinute = 60;
  var unixTime = 0;
  var counterTimeout;

  $scope.$on('$locationChangeStart', function() {
    if (counterTimeout) {
      $timeout.cancel(counterTimeout);
    }

    init();
  });

  var setQueryStringParams = function (title, unixTime) {
    var encodedTitle = encodeURIComponent(title);

    $location.search({
      title: encodedTitle,
      t: unixTime
    });
  };

  var convertTimeToUnix = function (dateTime) {
    var momentTime = $moment(dateTime);
    return momentTime.unix();
  };

  $scope.handleStart = function () {
    console.log($scope.timeDateInput);
    unixTime = convertTimeToUnix($scope.timeDateInput);
    setQueryStringParams($scope.title, unixTime);
    startCountDown();
    $scope.hasValidDate = true;
  };

  $scope.shouldBeDisplayed = function (numberOfSeconds) {
    var temp = $scope.secondsLeft / numberOfSeconds;

    if (temp >= 1 || $scope.showZeros) {
      return true;
    }
    return false;
  };

  $scope.goToRoot = function () {
    console.log($location);
    $location.search('');
  };

  var quotientWithRemainder = function (numerator, denominator) {

    var remainder = numerator % denominator;
    var temp = numerator - remainder;
    var quotient = temp / denominator;

    return {
      quotient: quotient,
      remainder: remainder
    };
  };

  var parseSecondsToPrettyTime = function (seconds) {

    var time = {};

    var tmp = quotientWithRemainder(seconds, $scope.secondsPerYear);
    time.years = tmp.quotient;

    tmp = quotientWithRemainder(tmp.remainder, $scope.secondsPerDay);
    time.days = tmp.quotient;

    tmp = quotientWithRemainder(tmp.remainder, $scope.secondsPerHour);
    time.hours = tmp.quotient;

    tmp = quotientWithRemainder(tmp.remainder, $scope.secondsPerMinute);
    time.minutes = tmp.quotient;

    time.seconds = tmp.remainder;
    return time;
  };

  var countDown = function() {

    var now = $moment();
    var endTime = $moment.unix(unixTime);
    var sumSeconds = endTime.diff(now, 'seconds');

    if (sumSeconds < 0) {
      $scope.timeHasPassed = true;
      $scope.hasValidDate = false;
      $scope.pickNewTime = false;
      return;
    } else {
      $scope.timeHasPassed = false;
      $scope.hasValidDate = true;
      $scope.pickNewTime = false;
      $scope.secondsLeft = sumSeconds;
    }

    var parsedTime = parseSecondsToPrettyTime(sumSeconds);

    $scope.years = parsedTime.years;
    $scope.days = parsedTime.days;
    $scope.hours = parsedTime.hours;
    $scope.minutes = parsedTime.minutes;
    $scope.seconds = parsedTime.seconds;

    counterTimeout = $timeout(countDown, 1000);
  };

  var validateTitle = function (title) {
    if (title === 'undefined' || title === 'null' || title === '') {
      $scope.hasValidTitle = false;
      $scope.title = '';
    } else {
      $scope.title = decodeURIComponent(title);
    }
  };

  var validateQueryStringParams = function (queryStringUnix, queryStringTitle) {
    var parsedString = parseInt(queryStringUnix, 10);
    if (!isNaN(parsedString) && parsedString > 0) {
      validateTitle(queryStringTitle);
      $scope.hasValidDate = true;
      $scope.pickNewTime = false;
      unixTime = parsedString;
      return true;
    }

    return false;
  };

  var resetApp = function () {
    $scope.timeDateInput = undefined;
    $scope.title = '';
    $scope.years = 0;
    $scope.days = 0;
    $scope.hours = 0;
    $scope.minutes = 0;
    $scope.seconds = 0;
    $scope.secondsLeft = 0;

    $scope.showZeros = false;
    $scope.hasValidDate = false;
    $scope.hasValidTitle = false;
    $scope.timeHasPassed = false;
    $scope.pickNewTime = true;
  };

  var startCountDown = function () {
    $scope.endTime = $moment.unix(unixTime).format('dddd, MMMM Do YYYY, h:mm:ss');
    counterTimeout = $timeout(countDown, 1000);
  };

  var init = function () {
    var queryStrings = $location.search();
    if (validateQueryStringParams(queryStrings.t, queryStrings.title)) {
      startCountDown();
    } else {
      resetApp();
    }
  };

  resetApp();
  init();

});
