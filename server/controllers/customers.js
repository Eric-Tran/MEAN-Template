var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
	return {
		show: function(req, res) {
			Customers.find({_id: req.body.id}, function(err, res) {
				if(err) {
					res.send('Error!');
				} else {
					res.json(res);
				}
			})
		},
		add: function(req, res) {
			console.log(req.body.id, 'this the rebody in answers.js');
			Question.findOne({_id: req.body.id}, function(err, question) {
				console.log(question, "Here is the question back", question);
				var answer = new Answer({_question: req.body.id, user: req.body.user, answer: req.body.answer, description: req.body.description, likes: 0});
				answer._question = question._id;
				question.answers.push(answer);
				answer.save(function(err) {
					question.save(function(err) {
						if(err) {
							console.log('cannot save answers to questions in answers.js');
						} else {
							res.json('SAVED!');
						}
					})
				})
			})
		}
	}
})