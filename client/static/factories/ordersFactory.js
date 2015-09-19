myApp.factory('ordersFactory', function($http){
	var factory = {};

	factory.getOrders = function(callback){
		$http.get('/all_orders').success(function(output){
			callback(output);
		})
	}
	factory.addOrder = function(newOrder, callback){
		$http.post('/new_order', newOrder).success(function(output){
			callback(output);
		})
	}



	return factory;
})