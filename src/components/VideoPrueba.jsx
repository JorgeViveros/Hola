import React, { Component } from 'react';

const VideoPrueba =({ match }) =>(
	<div className="videowrapper">
		<video
			id="video"
			className="video-js vjs-default-skin col-xs-12 col-sm-12 col-md-12"
			controls preload="auto"
			controlsList="nodownload"
			data-setup='{}'>
			<source src="/videos/Ponencia1/PONENCIA1EN.m3u8" type="application/x-mpegURL"></source>
		</video>
		<h1>Vids{match.params.id}</h1>

	</div>
)

export default VideoPrueba;
