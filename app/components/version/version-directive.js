'use strict';

angular.module('app.version.version-directive', [])

.directive('app', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);
