angular.module('mean.rank' ,[]).controller('RankController', ['$scope', 'Team', 'Global', function ($scope, Team, Global) {
    $scope.global = Global;
    if(Global.authenticated){
		
      $scope.find = function (query) {
			Team.query(query, function (teams) {
				$scope.teams = teams;
			});
		};
	}
}]);