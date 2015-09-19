myApp.controller('ordersController', function($scope, ordersFactory, customersFactory){
	$scope.products = ['Nike Shoes', 'Black Belts', 'Ice Creams', 'Candies'];
	$scope.quantities = [1,2,3,4,5,6,7,8,9,10];
	ordersFactory.getOrders(function(data){
		$scope.orders = data;
	})
	customersFactory.getCustomers(function(data){
		$scope.customers = data;
	})
	$scope.addOrder = function(){
		ordersFactory.addOrder($scope.newOrder, function(){
			ordersFactory.getOrders(function(data){
				$scope.orders = data;
			})
		})
		$scope.newOrder = {};
	}
})