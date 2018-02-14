import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';


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
				<VideoWrapper data={this.props.data[this.state.activeID]}/>

					<Route path="/:id" render={() =>(
						<h1>Id: {this.props.data[this.state.activeID].id+1}</h1>
					)}/>

			</section>
		);
	}
}
class VideoWrapper extends Component{
	render(){
	return(
		<div className="videowrapper">
			<video
				id="video"
				className="video-js vjs-default-skin col-xs-12 col-sm-12 col-md-12"
				controls preload="auto"
				controlsList="nodownload"
				data-setup='{}'>
				<source src={this.props.data.srcvideo} type="application/x-mpegURL"></source>
			</video>
		</div>
    );
	}
}


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
class Selectors extends Component {
	_handleClick(e) {
		if (this.props.id !== this.props.activeID) {
			this.props._changeActive(this.props.id);
		} else {
			return;
		}
	}
	render() {
		return (
			<div className="selectors">
				{this.props.data.map((item) =>
					<Link  to={`/${item.id+1}`}>
					<Selector
						key={item.id}
						id={item.id}
						_handleClick={this._handleClick}
						_changeActive={this.props._changeActive}
						activeID={this.props.activeID}
						header={item.header}
					/>
					</Link>
				)}
			</div>
		);
	}
}
class Selector extends Component {
	render() {
		let componentClass = 'selector';
		var indice=this.props.header;
		if (this.props.activeID === this.props.id) {
			componentClass = 'selector active';
		}
		return (
			<div className={componentClass} onClick={this.props._handleClick.bind(this)}>
					<h2 className="indice">{indice}</h2>
			</div>
		);
	}
}


class VideoPrueba extends Component {
	render(){
		<h2>Hola</h2>
	}
}


export default Carrusel;
