var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var Note = React.createClass({
	render: function(){
		return(
			<div className="column">
				<div className="note" onDoubleClick={this.removeNote.bind(this, this.props.note._id)}>
					<p>{this.props.note.text}</p>
				</div>
			</div>
		);
	},
	
	removeNote: function(i,j) {
		AppActions.removeNote(i.$oid);
	}

});

module.exports = Note;