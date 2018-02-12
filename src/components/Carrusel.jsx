import React, { Component } from 'react';

class Carrusel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeID: 0,
			videoSelected: this.props.data[0].urlvideo,
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
			videoSelected: this.props.data[id].urlvideo,
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
				<VideoWrapper
					data={this.props.data[this.state.activeID]}
				/>
			</section>
		);
	}
}
class VideoWrapper extends Component{
	render(){
	return(
		<div className="videowrapper">
			<h1>{this.props.data.urlvideo}</h1>
			<video
				id="video"
				className="video-js vjs-default-skin col-xs-12 col-sm-12 col-md-12"
				controls preload="auto"
				controlsList="nodownload"
				data-setup='{}'>
				<source src={this.props.data.urlvideo} type="application/x-mpegURL"></source>
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
				<button className="panel-button" 
					style={this.props.buttonStyle}
					onMouseEnter={this.props._buttonColour}
					onMouseLeave={this.props._buttonColour}>
					Read More
				</button>
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
					<Selector 
						key={item.id}
						id={item.id}
						_handleClick={this._handleClick}
						_changeActive={this.props._changeActive}
						activeID={this.props.activeID}
					/>
				)}
			</div>
		);
	}
}
class Selector extends Component {
	render() {
		let componentClass = 'selector';
		if (this.props.activeID === this.props.id) {
			componentClass = 'selector active';
		}
		return (
			<div className={componentClass} onClick={this.props._handleClick.bind(this)}></div>
		);
	}
}



export default Carrusel;