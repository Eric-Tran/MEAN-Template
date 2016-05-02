var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/partials/newPartial.html'
		})
		// .when('/', {
		// 	templateUrl: '/partials/'
		// })
		.otherwise({
			redirectTo:'/'
		})
});