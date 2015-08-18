(function() {
	'use strict';
	
	module1.config(['$routeProvider', routeProvider]);
	
	function routeProvider($routeProvider) {
		$routeProvider.when('/module1', {
			templateUrl: 'components/module1/module1.html',
			controller: 'Module1Ctrl'
		});
	}
})();