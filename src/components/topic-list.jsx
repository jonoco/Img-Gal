var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	render: function() {
		return <div className='list-group'>
			Topic List
			{this.renderTopics()}
		</div>
	},
	mixins: [
		Reflux.listenTo(TopicStore, 'onChange')
	],
	getInitialState: function() {
		return {
			topics: []
		}
	},
	componentWillMount: function() {
		Actions.getTopics(); // posts 'getTopics' event message
	},
	renderTopics: function() {
		return this.state.topics.slice(0, 4).map(function(topic) {
			return <Link to={'topics/' + topic.id} className='list-group-item' key={topic.id}>
				<h4>{topic.name}</h4>
				<p>{topic.description}</p>
			</Link>
		});
	},
	onChange: function(event, topics) {
		this.setState({ topics: topics });

	}
});