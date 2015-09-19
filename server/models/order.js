var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
	name: String,
	quantity: Number,
	product: String,
	created_at: {type: Date, default: new Date()}
})
mongoose.model('Order', OrderSchema);