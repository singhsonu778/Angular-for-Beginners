calcApp.service('calcService', function(mathService) {
	this.square = function(a) {
		return mathService.multiply(a, a);
	}
});