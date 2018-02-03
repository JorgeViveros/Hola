import React, { Component } from 'react';

class Video extends Component{
  render(){
    return(
    <div>
      <center><h4>Video-1</h4></center>
      <video
        id="video"
        class="video-js vjs-default-skin col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2"
        controls preload="auto"
        controlsList="nodownload"
        data-setup='{}'>
      <source src="videos/salida.m3u8" type="application/x-mpegURL"></source>
      </video>
    </div>
    )
  }
}

export default Video;