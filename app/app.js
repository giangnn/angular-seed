var app = (function() {
  'use strict';
  
  return angular.module('app', [
    'ngRoute',
    'app.module1'
  ]).
  
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/module1'});
  }]);
})();