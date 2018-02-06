import React, { Component } from 'react';

class Video extends Component{
  render(){
    return(
    <div>
      <center><h4>Video-1</h4></center>
      <video
        id="video"
        className="video-js vjs-default-skin col-xs-12 col-sm-12 col-md-12"
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