import React, { Component } from 'react';

class Video extends Component{
  render(){
    return(
    <div>
      <h4>Video 1</h4>
      <video
        id="video"
        class="video-js vjs-default-skin"
        controls preload="auto"
        controlsList="nodownload"
        data-setup='{}'>
  <source src="videos/salida.m3u8" type="application/x-mpegURL"></source>
  <p class="vjs-no-js">
    Prueba
  </p>
</video>
    </div>
    )
  }
}

export default Video;