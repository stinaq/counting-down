'use strict';

angular.module('countingDown.controllers')
.controller('TimeLeftCtrl', function ($scope, $timeout, $moment) {

  var testTime = 1400712273;

  var tickDown = function() {
    var now = moment();
    $scope.date = now.diff($moment.unix(testTime), 'seconds');
    $timeout(tickDown, 1000);
  };

  $timeout(tickDown, 1000);

  $scope.a = 'sodfuh';

});
