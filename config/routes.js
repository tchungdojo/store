var customers = require('./../server/controllers/customers.js');
var orders = require('./../server/controllers/orders.js');
module.exports = function(app){
	app.get('/all_customers', function(req, res){
		customers.all_customers(req, res);
	})
	app.post('/add_customer', function(req, res){
		customers.add_customer(req, res);
	})
	app.get('/remove_cus/:id', function(req,res){
		customers.remove_cus(req, res);
	})
	app.get('/all_orders', function(req, res){
		orders.all_orders(req, res);
	})
	app.post('/new_order', function(req, res){
		orders.new_order(req, res);
	})
}