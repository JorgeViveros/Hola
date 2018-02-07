import React, { Component } from 'react';

class VideoWrapper extends Component {
	render() {
		return (
			<div className="videowrapper">
				<Pruebavid/>
			</div>
		);
	}
}
class Pruebavid extends Component{
	constructor(props) {
		super(props);
		this.state = {
			activeID: 0,
			pruebavidStyle: {
				backgroundImage: `url('${this.props.data[0].img}')`
			},
			panelStyle: {
				background: this.props.data[0].colour
			},
			buttonHover: false,
			buttonStyle: {
				color: '#ffffff'
			}
		};
	}
	render(){
	return(
		<video
     		id="video"
     		className="video-js vjs-default-skin col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2"
     		controls preload="auto"
     		controlsList="nodownload"
     		data-setup='{}'>
   			<source src="videos/salida.m3u8" type="application/x-mpegURL"></source>
   		</video>
    );
		
	}
}

export default VideoWrapper;