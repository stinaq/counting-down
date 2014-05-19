'use strict';

angular.module('countingDown.controllers')
.controller('StartCtrl', function ($scope, $timeout) {

  var tick = function() {
    $scope.date = new Date();
    $timeout(tick, 1000);
  };

  $timeout(tick, 1000);

});
