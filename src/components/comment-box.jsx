var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			openChildren: false
		}
	},
	render: function() {
		return <ul className='list-group'>
			{this.renderComments(this.props.comments)}
		</ul>	
	},
	renderComments: function(comments) {
		// use parent_id to check if a comment is parent or child

		return comments.slice(0,20).map(function(comment) {
			return <li className='list-group-item comment-box' key={comment.id}>
				<span className='badge'>{comment.ups}</span>
				<h5>{comment.author}</h5>
				{comment.comment}
				{(comment.children.length > 0 && this.state.openChildren) ? 
					this.renderChildren(comment.children) : null}
			</li> 
		}.bind(this));
	},
	renderChildren: function(children) {
		return <ul className='list-group'>
			{this.renderComments(children.slice(0,5))}
		</ul>
	}
});