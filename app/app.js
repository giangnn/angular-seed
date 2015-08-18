var app = (function() {
  'use strict';
  
  return angular.module('app', [
    'ngRoute',
    'app.module1',
    'app.version'
  ]).
  
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/module1'});
  }]);
})();