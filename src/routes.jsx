var React = require('react'),
		ReactRouter = require('react-router'),
		HashHistory = require('react-router/lib/hashhistory'), // keeps track of url history
		Router = ReactRouter.Router, // decides what content to show
		Route = ReactRouter.Route,   // object with route info for router
		Main = require('./components/main'),
		Topic = require('./components/topic'),
		ImageDetail = require('./components/image-detail');

module.exports = (
	<Router history={new HashHistory}>
		<Route path='/' component={Main}>
			<Route path='topics/:id' component={Topic} />
			<Route path='images/:id' component={ImageDetail} />
		</Route>
	</Router>
)