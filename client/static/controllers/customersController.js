myApp.controller('customersController', function($scope, customersFactory){
	
	customersFactory.getCustomers(function(data){
		$scope.customers = data;
	})
	$scope.addCustomer = function(){
		customersFactory.addCustomer($scope.newCustomer, function(){
			customersFactory.getCustomers(function(data){
				$scope.customers = data;
			})
		})
		$scope.newCustomer = {};
	}
	$scope.removeCustomer = function(cus){
		customersFactory.removeCustomer(cus, function(){
			customersFactory.getCustomers(function(data){
				$scope.customers = data;
			})
		})
	}
})