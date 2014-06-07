'use strict';

angular.module('countingDown.directives')
  .directive('selectOnFocus', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
        element.mouseup(function (event) {
          event.preventDefault();
        });
        element.focus(function () {
          element.select();
        });
      }
    };
  });
