calcApp.controller('CalcController', function($scope, calcService) {
	$scope.square = function() {
		$scope.result = calcService.square($scope.number);
	}
});