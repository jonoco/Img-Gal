var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	getInitialState: function() {
		return {
			hover: false
		}
	},
	render: function() {
		return <Link
			to={'images/' + this.props.id}
			onMouseEnter={this.handleMouseEnter}
			onMouseLeave={this.handleMouseLeave}
			className='image-preview'
			> 
			{this.props.animated && this.state.hover ? this.video() : this.image() }
			{this.props.animated && !this.state.hover ? this.icon() : null }
			{this.state.hover ? this.inset() : null }
		</Link>
	},
	inset: function() {
		return <div className='inset'>
			Views: {this.props.views}
			<br />
			Upvotes: {this.props.ups}
		</div>
	},
	image: function() {
		var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';

		return <img src={link} />
	},
	video: function() {
		return <div>
			<video preload='auto' autoPlay='autoplay' loop='loop' webkit-playsinline> 
				<source src={this.props.mp4} type='video/mp4'></source>
			</video>
		</div>
	},
	icon: function() {
		return <span className='glyphicon glyphicon-play'></span>
	},
	handleMouseEnter: function() {
		this.setState({ hover: true });
	},
	handleMouseLeave: function() {
		this.setState({ hover: false });
	}
});