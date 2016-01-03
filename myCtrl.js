app.controller('myCtrl', function($scope) {
	$scope.firstName = "Sonu";
	$scope.lastName = "Singh";
	$scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});