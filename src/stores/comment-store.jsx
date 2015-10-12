var Reflux = require('reflux');
var Actions = require('../actions');
var Api = require('../utils/api');

module.exports = Reflux.createStore({
	listenables: [Actions],
	getImage: function(id) { // retrieves comment data, not actually an image
		Api.get('gallery/' + id + '/comments')
			.then(function(json) {
				this.comment = json.data;
				this.triggerChange();
			}.bind(this));
	},
	triggerChange: function() {
		this.trigger('change', this.comment);
	}
});