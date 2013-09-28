window.angular.module('ngff.directives', [])
.directive('donutGraph', function () {
	return {
		restrict: 'A',
		scope: {
			val: '='
		},
		link: function (scope, elem, attrs) {

			scope.$watch('val', function(newValue, oldValue) {
				if (newValue){

					var data = [
					{
						value: newValue,
						color:"#F7464A"
					},

					{
						value : 100 - newValue,
						color : "#4D5360"
					}

					]
					var ctx = $(elem).get(0).getContext("2d");
					var myNewChart = new Chart(ctx).Doughnut(data);
			}
		}, true);


		}
	}
});
