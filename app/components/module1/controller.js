(function() {
  'use strict';
  
  module1.controller('Module1Ctrl', ['$scope', Module1Ctrl]);  
  
  function Module1Ctrl($scope) {
    $scope.msg = "Hello world!";
  }
})();

