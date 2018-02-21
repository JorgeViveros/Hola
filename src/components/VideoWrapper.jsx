import React, { Component } from 'react';

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
export default VideoWrapper;
