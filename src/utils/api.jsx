var Fetch = require('whatwg-fetch');
var rootURL = 'https://api.imgur.com/3/';
var apiKey = require('./api-key');

module.exports = window.api = {
	get: function(url) {
		return fetch(rootURL + url, {
			headers: {
				'Authorization': 'Client-ID ' + apiKey
			}
		})
		.then(function(response) {
			return response.json()
		});
	}
};