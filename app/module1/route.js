(function() {
	'use strict';
	
	module1.config(['$routeProvider', routeProvider]);
	
	function routeProvider($routeProvider) {
		$routeProvider.when('/module1', {
			templateUrl: 'module1/view.html',
			controller: 'Module1Ctrl'
		});
	}
})();