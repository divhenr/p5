
window.angular.module('ngff.controllers.player', [])
.controller('PlayerController', ['$scope','$routeParams','$location','Global','Player',
	function ($scope, $routeParams, $location, Global, Player) {
		$scope.global = Global;

		$scope.create = function () {
			var player = new Player({ 
				name: this.player.name,
				country: this.player.country,
				defend: this.player.defend,
				attack: this.player.attack,
				played: this.player.played,
				goals: this.player.goals,
				teamId: this.player.teamId
			});

			player.$save(function (response) {
				// $location.path("players/" + response._id);
				$location.path("players");
			});

			this.player.name = "";
		};

		$scope.find = function (query) {
			Player.query(query, function (players) {
				$scope.players = players;
			});
		};

		$scope.findOne = function () {
  			Player.get({ playerId: $routeParams.playerId }, function (player) {
    			$scope.player = player;
  			});
		};

		$scope.update = function () {
		  var player = $scope.player;
		  player.$update(function () {
		    // $location.path('players/' + player._id);
		    $location.path("players");
		  });
		};

		$scope.destroy = function (player) {
		  player.$remove();
		  for (var i in $scope.players) {
		    if ($scope.players[i] == player) {
		      $scope.players.splice(i, 1)
		    }
		  }
		};
	}]);