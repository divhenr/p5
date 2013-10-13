window.angular.module('mean.team').controller('MyTeamController', ['$scope','$routeParams','$location','Global','Team',
	function ($scope, $routeParams, $location, Global, Team) {
      $scope.global = Global;

      $scope.create = function(){
		var team = new Team({ 
				name: this.team.name,
				user: $scope.global
			});

		team.$save(function (response) {
			// $location.path("players/" + response._id);
			$location.path("teams/" + response._id);
		});

		this.team.name = "";
      }

      $scope.find = function (query) {
			Team.query(query, function (teams) {
				$scope.teams = teams;
			});
		};

		$scope.findOne = function () {
  			Team.get({ teamId: $routeParams.teamId }, function (team) {
    			$scope.team = team;

  			});
		};

    }]);