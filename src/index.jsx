import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import Video from './components/Video.jsx';

render(
 <App/>
 , document.getElementById('app')
);

render(
	<Video/>,
	document.getElementById('video')
	);
