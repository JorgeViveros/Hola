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
	render(){
	return(
		<video
     		id="video"
     		className="video-js vjs-default-skin col-xs-12 col-sm-12 col-md-12"
     		controls preload="auto"
     		controlsList="nodownload"
     		data-setup='{}'>
   			<source src="videos/Ponencia1/PONENCIA1EN.m3u8" type="application/x-mpegURL"></source>
   		</video>
    );
		
	}
}

export default VideoWrapper;