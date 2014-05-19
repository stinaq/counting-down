'use strict';

angular.module('countingDown.controllers')
.controller('StartCtrl', function ($scope, $timeout, $moment) {

  var tick = function() {
    $scope.date = $moment();
    $timeout(tick, 1000);
  };

  $scope.time = $moment("2010-10-20 4:30", "YYYY-MM-DD HH:mm").format('YYYY-MM-DD');

  $timeout(tick, 1000);

});
