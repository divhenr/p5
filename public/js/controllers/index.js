angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
    if(Global.authenticated){
  		if(user){
		      $scope.team = user.team;
		  }
		}
}]);