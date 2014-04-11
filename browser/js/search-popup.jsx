/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({ displayName: 'SearchPopup',
	propTypes: {
		onSelect: React.PropTypes.func.isRequired,
		items: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				columns: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
			})
		).isRequired,
		title: React.PropTypes.string.isRequired,
	},
	getInitialState: function() {
		return {
			query: ''
		}
	},
	render: function() {
		var query = this.state.query
		var items = this.props.items.filter(function(item) {
			return item.columns.some(function(col) {
				return ~col.indexOf(query)
			})
		})
		return (
			<div>
				<h2>{this.props.title}</h2>
				<input type="search" value={query} onChange={this.setQuery}/>
				<div className="items">
					<h3>
						<span>Id</span>
						<span>Title</span>
					</h3>
					{items.map(function(item) {
						return (
							<div onClick={this.props.onSelect.bind(null, item)}>
								{item.columns.map(function(column) {
									return <span>{column}</span>
								})}
							</div>
						)
					}, this)}
				</div>
			</div>
		)
	},

	setQuery: function(event) {
		var value = event.target.value
		this.setState({ query: value })
	},
})
