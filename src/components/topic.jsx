var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');
var ImagePreview = require('./image-preview');
var _ = require('lodash');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(ImageStore, 'onChange')
	],
	getInitialState: function() {
		return {
			images: [],
			page: 0
		}
	},
	componentWillMount: function() {
		Actions.getImages(this.props.params.id);
		// Actions.getImages(this.props.params.id + '/viral/' + this.state.page);
	},
	componentDidMount: function() {
		// var scroll = _.debounce(function() {
		// 	console.log('scrollin');
		// }, 50);
		window.addEventListener('scroll', this.handleScroll);
	},
	componentWillReceiveProps: function(nextProps) {
		Actions.getImages(nextProps.params.id);
		// Actions.getImages(nextProps.params.id + '/viral/' + this.state.page);
	},
	componentDidUpdate: function() {
		console.log('updating');
		window.scroll(0,0);
	},
	render: function() {
		return <div className='topic'>
			<div className='navi'>
				<button className='btn' onClick={this.onClickLast}>back</button>
				<button className='btn' onClick={this.onClickNext}>next</button>
			</div>
			{this.renderImages()}
		</div>
	},
	renderImages: function() {
		return this.state.images.map(function(image) {
			return <ImagePreview key={image.id} {...image} />
		});
	},
	handleScroll: function() {
		var nav = document.querySelector('.topic .navi');
		if (!nav) {return}

		var top = nav.getBoundingClientRect().top;

		if (window.scrollY < 30) {nav.classList.remove('fixed')}
		else if (top <= 0) {nav.classList.add('fixed')}
	},
	onChange: function(event, images) {
		this.setState({
			images: images
		});
	},
	onClickNext: function() {
		this.setState({
			page: this.state.page += 1
		});
		Actions.getImages(this.props.params.id + '/viral/' + this.state.page);
	},
	onClickLast: function() {
		var newPage = (this.state.page == 0) ? 0 : this.state.page - 1;

		this.setState({
			page: newPage
		});
		Actions.getImages(this.props.params.id + '/viral/' + this.state.page);
	}
});

