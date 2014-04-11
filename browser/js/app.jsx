/** @jsx React.DOM */

var xhr = new XMLHttpRequest
xhr.open('GET', '/data')
xhr.send()
xhr.addEventListener('load', function() {
	var list = JSON.parse(xhr.responseText)
	rerender(list.map(function(item) {
		return {
			columns: [
				item.id, item.name
			]
		}
	}))
})

var React = require('react');
var SearchPopup = require('./search-popup.jsx')

function rerender(items) {
var App = React.createClass({
	render: function () {
		return (
			<div className="app">
				<h1>Search popup</h1>
				<SearchPopup
					title="Accounts"
					items={items}
					onSelect={function(item) {
						console.log(item, 'was selected')
					}}
					/>
			</div>);
	}
});

React.renderComponent(<App/>, document.body);
}