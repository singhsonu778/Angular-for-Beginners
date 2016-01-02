app.directive("myTestDirective", function() {
	return {
		restrict : "EACM", //C to be used with class, M with comment
		replace : true, //to be used with comment
		template : "<h1>Made by a directive!</h1>"
	};
});