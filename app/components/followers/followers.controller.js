(function() {
  'use strict';
  
  followersModule.controller('FollowersCtrl', ['$scope', '$http', 'module2Service', FollowersCtrl]);  
  
  function FollowersCtrl($scope, $http, module2Service) {
    $scope.view = {
		isLoading: true,
		user: 'jashkenas'
	};
		
	$scope.followers = [];
	$scope.displayedFollowers = [];
	
	$scope.reload = reload;
	$scope.reloadFollowers = reloadFollowers;
	
	function reload() {
		reloadFollowers($scope.tableState);
	}
	
	function reloadFollowers(tableState) {
		var localStart = tableState.pagination.start % 30;
			
		if (localStart === 0) {
			$scope.view.isLoading = true;
			
			var page = tableState.pagination.start / 30 + 1;
			
			$http.get('https://api.github.com/users/' + $scope.view.user + '/followers?page=' + page).success(function(response, status, headers) {
				$scope.followers = response;					
				$scope.displayedFollowers = $scope.followers.slice(tableState.pagination.start % 30, 10);
				
				var links = headers('Link').split(',');
				var lastPattern = ">; rel=\"last\"";
				var lastLink = _.find(links, function(link) {
					return link.indexOf(lastPattern, link.length - lastPattern.length) !== -1;
				}); // something like <https://api.github.com/user/4732/followers?page=269>; rel="last"
				lastLink = lastLink.substr(0, lastLink.length-lastPattern.length); // something like <https://api.github.com/user/4732/followers?page=269
				lastLink = lastLink.substr(lastLink.indexOf("=") + 1); // something like 269
				tableState.pagination.number = $scope.followers.length > 10 ? 10 : $scope.followers.length;
				tableState.pagination.numberOfPages = Number(lastLink) * 3;
				$scope.view.isLoading = false;
			});				
		} else {
			$scope.displayedFollowers = $scope.followers.slice(localStart, localStart + 10);
		}
		
		$scope.tableState = tableState;
	}
  }
})();

