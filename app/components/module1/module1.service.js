(function() {
	'use strict';
	
	module1.service('module1Service', [module1Service]);
	
	function module1Service() {
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