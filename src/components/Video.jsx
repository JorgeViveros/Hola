import React, { Component } from 'react';

class Video extends Component{
	render(){
		return(
		<div>
			<h1>iFrame youtube</h1>
			<video
    		id="video"
    		class="video-js"
    		controls preload="auto"
    		controlsList="nodownload"
    		data-setup='{}'>
  <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    
  </p>
</video>
		</div>
		)
	}
}

export default Video;