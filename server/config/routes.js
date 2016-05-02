var customers = require('./../controllers/customers.js');

module.exports = function(app) {
	app.get('/customers', function(req, res) {
		customers.show(req, res);
	})
	app.post('/customers', function(req, res) {
		customers.add(req, res);
	})
}


