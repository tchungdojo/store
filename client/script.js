var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/customers', {
			templateUrl: './static/partials/customers.html'
		})
		.when('/orders', {
			templateUrl: './static/partials/orders.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})