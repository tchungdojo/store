var mongoose = require('mongoose');
var Order = mongoose.model('Order');
module.exports = (function(){
	return {
		all_orders: function(req, res){
			Order.find({}, function(err, results){
				if(err){
					console.log('something went wrong');
				} else {
					res.json(results);
				}
			})
		},
		new_order: function(req, res){
			var order = new Order(req.body);
			order.save(function(err){
				if(err){
					console.log('something went wrong');
				} else {
					res.redirect('/');
				}
			})
		}
	}
})();