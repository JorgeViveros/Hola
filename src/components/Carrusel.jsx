import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import VideoWrapper from './VideoWrapper.jsx';
import Panel from './Panel.jsx';
import Selectors from './Selectors.jsx';

import data from './data.jsx';

class Carrusel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeID: 0,
			videoSelected: this.props.data[0].srcvideo,
			panelStyle: {
				background: this.props.data[0].colour
			},
			buttonHover: false,
			buttonStyle: {
				color: '#ffffff'
			}
		};
	}
	_changeActive(id) {
		this.setState({
			activeID: id,
			videoSelected: this.props.data[id].srcvideo,
			panelStyle: {
				backgroundColor: this.props.data[id].colour
			}
		});
	}
	_buttonColour() {
		if(!this.state.buttonHover){
			this.setState({
				buttonHover: true,
				buttonStyle: {
					color: this.props.data[this.state.activeID].colour
				}
			});
		} else {
			this.setState({
				buttonHover: false,
				buttonStyle: {
					color: '#ffffff'
				}
			});
		}
	}
	render() {
		return (
			<section className="wrapper">
				<Selectors
					data={this.props.data}
					activeID={this.state.activeID}
					_changeActive={this._changeActive.bind(this)}
				/>
				<Panel
					data={this.props.data[this.state.activeID]}
					panelStyle={this.state.panelStyle}
					buttonStyle={this.state.buttonStyle}
					_buttonColour={this._buttonColour.bind(this)}
				/>
			</section>
		);
	}
}
export default Carrusel;
