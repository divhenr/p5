window.angular.module('mean.directives', [])
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
						color: "#ffd200"
					},

					{
						value : 100 - newValue,
						color: "#434343"
					}

					]
					var ctx = $(elem).get(0).getContext("2d");
					var myNewChart = new Chart(ctx).Doughnut(data);
			}
		}, true);


		}
	}
});
