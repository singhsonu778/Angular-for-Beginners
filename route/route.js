app.config(['$routeProvider', function($routeProvider) {
	
	$routeProvider.

	when('/addStudent', {
		templateUrl : '../templates/addStudent.htm',
		controller : 'AddStudentController'
	}).

	when('/viewStudents', {
		templateUrl : '../templates/viewStudents.htm',
		controller : 'ViewStudentsController'
	}).

	otherwise({
		redirectTo : '/addStudent'
	});
}]);