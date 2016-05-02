myApp.factory('newFactory', function($http) {
	var factory = {};
	var data = [];
	factory.getData = function(callback) {
		$http.get('/data').success(function(res) {
			data = res;
			callback(data);
		})
	}
	factory.postData = function(data, callback) {
		$http.post('/data', data).success(function(res) {
			data.push(res);
			callback(data);
		})
	}
	factory.updateData = function(callback) {
		$http.put('/data/:id').success(function(res) {
		
		})
	}
	factory.deleteData = function(callback) {
		$http.delete('/data/:id').success(function(res) {
		
		})
	}
	return factory;
})