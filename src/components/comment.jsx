var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			openChildren: false
		}
	},
	render: function() {
		return <li className='list-group-item comment-box' key={this.props.comment.id}>
			<span className='badge'>{this.props.comment.ups}</span>
			<h5>{this.props.comment.author}</h5>
			{this.props.comment.comment}
			{(this.props.comment.children.length > 0 && this.state.openChildren) ? 
				this.renderChildren(this.props.comment.children) : null}
		</li> 
	},
	renderChildList: function() {
		// render ul comment list
	},
	renderChildItem: function() {
		// render li comment item
	}
});