angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "my team",
        "link": "myteam"
    }, {
        "title": "players",
        "link": "/teams/:teamId"
    }];

    if(Global.authenticated){
  		if(user){
		      $scope.team = user.team;
		  }
		}
}]);