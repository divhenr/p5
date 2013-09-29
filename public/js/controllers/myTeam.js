window.angular.module('mean.myTeam').controller('MyTeamController', ['$scope','$routeParams','$location','Global','MyTeam',
	function ($scope, $routeParams, $location, Global, MyTeam) {
      $scope.global = Global;

      $scope.create = function(){
		var team = new MyTeam({ 
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
			MyTeam.query(query, function (teams) {
				$scope.teams = teams;
			});
		};

		$scope.findOne = function () {
  			MyTeam.get({ teamId: $routeParams.teamId }, function (team) {
    			$scope.team = team;
    			var totalDefend = 0, totalAttack = 0;
		      	$.each(team.players, function(){
	      			totalAttack += this.attack;
	      			totalDefend += this.defend;
		      	});
	      		team.totalDefend = totalDefend / team.players.length;
	      		team.totalAttack = totalAttack / team.players.length;
  			});
		};

    }]);