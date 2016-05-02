var customers = require('./../controllers/customers.js');

module.exports = function(app) {
	app.get('/data', function(req, res) {
		customers.show(req, res);
	})
	app.post('/data', function(req, res) {
		customers.add(req, res);
	})
	app.put('/data/:id', function(req, res) {
		customers.update(req, res);
	})
	app.delete('/data/:id', function(req, res) {
		customers.delete(req, res);
	})
}


