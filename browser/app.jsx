/** @jsx React.DOM */

var React = require('react');

var App = React.createClass({
	render: function () {
		return (
			<div className="app">
				Yo!
			</div>);
	}
});

React.renderComponent(<App/>, document.body);
