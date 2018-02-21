import React, { Component } from 'react';

class Panel extends Component {
	render() {
		return (
		<div>
			<aside className="panel" style={this.props.panelStyle}>
				<h2 className="panel-header">{this.props.data.header}</h2>
				<p className="panel-info">{this.props.data.body}</p>
			</aside>
		</div>
		);
	}
}

export default Panel;
