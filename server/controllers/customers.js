var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = (function(){
	return {
		all_customers: function(req, res){
			Customer.find({}, function(err, results){
				if(err){
					console.log('something went wrong');
				} else {
					res.json(results);
				}
			})
		},
		add_customer: function(req, res){
			var customer = new Customer(req.body);
			customer.save(function(err){
				if(err){
					console.log('something went wront');
				} else {
					res.redirect('/');
				}
			})
		},
		remove_cus: function(req, res){
			Customer.remove({_id: req.params.id}, function(err){
				if(err){
					console.log('something with wrong');
				} else {
					res.redirect('/');
				}
			})
		}
	}
})();