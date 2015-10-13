var React = require('react');
var Comment = require('./comment');
var Addons = require('react/addons');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			openComments: []
		}
	},
	render: function() {
		return <ul className='list-group comment-box'>
			{this.renderComments(this.props.comments)}
		</ul>	
	},
	renderComments: function(comments) {
		return comments.slice(0,20).map(function(comment) {
			return <li className='list-group-item comment' key={comment.id}>
				<span className='badge'>{comment.ups}</span>
				<h5>{comment.author}</h5>
				{comment.comment}
				{this.renderChildren(comment)}
			</li> 
		}.bind(this));
	},
	renderChildren: function(comment) {
		if (!comment.children.length > 0) {
			return null
		} else if (this.state.openComments.indexOf(comment.id) == -1) {
			return <button 
				onClick={this.handleClick}
				type='button' 
				className='btn btn-link comment-btn'
				id={comment.id}
				>
				click to see more comments
			</button>
		} else if (this.state.openComments.indexOf(comment.id) != -1) {
			return <ul className='list-group children'>
				{this.renderComments(comment.children)}
			</ul>
		}
	},
	handleClick: function(event) {
		var newState = React.addons.update(this.state, {
      openComments : {
        $push : [parseInt(event.target.id)]
      }
	  });

	  this.setState(newState);
	}
});

