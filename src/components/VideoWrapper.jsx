import React, { Component } from 'react';

class VideoWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videoStyle:{
			    
			}
		};
	}
	render() {
		return (
			<div className="videowrapper" style={this.state.wrapperStyle}>
				
				<Pruebavid
				/>


			</div>
		);
	}
}
class Pruebavid extends Component{
	render(){
	
	return(
		<video
        		id="video"
        		className="video-js vjs-default-skin col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2"
        		styles="{this.props.videoStyle}"
        		controls preload="auto"
        		controlsList="nodownload"
        		data-setup='{}'>
      			<source src="videos/salida.m3u8" type="application/x-mpegURL"></source>
      		</video>
      		);
		
	}
}
export default VideoWrapper;