var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new mongoose.Schema({
	user: String,
	answer: String,
	description: String,
	likes: Number,
	_question: {type: Schema.Types.ObjectId, ref: 'Question'}
})

mongoose.model('Customer', CustomerSchema);