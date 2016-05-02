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
		$http.get('/data', data).success(function(res) {
			data = res;
			callback(data);
		})
	}

	return factory;
})