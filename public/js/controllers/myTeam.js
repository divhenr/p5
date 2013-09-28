window.angular.module('ngff.controllers.myTeam', [])
.controller('MyTeamController', ['$scope','$routeParams','$location','Global','MyTeam',
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
  			})
		   .$promise.then(
		      //success
		      function( value ){
		      	var totalDefend = 0, totalAttack = 0;
		      	$.each(value.players, function(){
	      			totalAttack += this.attack;
	      			totalDefend += this.defend;
		      	});
	      		value.totalDefend = totalDefend / value.players.length;
	      		value.totalAttack = totalAttack / value.players.length;
		      },
		      //error
		      function( error ){}
		   );
		};

    }]);