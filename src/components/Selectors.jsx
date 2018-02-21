import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Vid2 from './Vid2.jsx';

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



const Vid =({ match }) =>(
	<div className="videowrapper">
		<video
			id="video"
			className="video-js vjs-default-skin col-xs-12 col-sm-12 col-md-12"
			controls preload="auto"
			controlsList="nodownload"
			data-setup='{}'>
			<source src="videos/Ponencia1/PONENCIA1EN.m3u8" type="application/x-mpegURL"></source>
		</video>
	</div>
)

const Etiqueta =({ match })=>(
	<div>
		<h1>Menú:{match.params.id}</h1>
	</div>
)
export default Selectors;
