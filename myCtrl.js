app.controller('myCtrl', function($scope, $http) {
	$http.get("http://www.w3schools.com/angular/customers.php")
		 .then(function(response) {
			 $scope.records = response.data.records;
		 });
});