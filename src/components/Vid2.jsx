import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

const Vid2 =({ match }) =>(
	<div className="videowrapper">
		<video
			id="video"
			className="video-js vjs-default-skin col-xs-12 col-sm-12 col-md-12"
			controls preload="auto"
			controlsList="nodownload"
			data-setup='{}'>
			<source src="videos/salida.m3u8" type="application/x-mpegURL"></source>
		</video>
		<h1>Vids{match.params.id}</h1>

	</div>
)

export default Vid2;
