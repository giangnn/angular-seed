(function() {
	'use strict';
	
	followersModule.service('module2Service', [module2Service]);
	
	function module2Service() {
		var foo;
		var bar;
		
		function getFoo() {
			return foo;
		}
		
		function setFoo(value) {
			foo = value;
		}
		
		function getBar() {
			return bar;
		}
		
		function setBar(value) {
			bar = value;
		}
		
		return {
			getFoo: getFoo,
			setFoo: setFoo,
			getBar: getBar,
			setBar: setBar
		};
	}
})();