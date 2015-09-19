myApp.factory('customersFactory', function($http){
	var factory = {};

	factory.getCustomers = function(callback){
		$http.get('/all_customers').success(function(output){
			callback(output);
		})
	}
	factory.addCustomer = function(newCustomer, callback){
		$http.post('/add_customer', newCustomer).success(function(output){
			callback(output);
		})
	}
	factory.removeCustomer = function(cus, callback){
		$http.get('/remove_cus/' + cus._id).success(function(output){
			callback(output);
		})
	}
	return factory;
})