import React, { Component } from 'react';
import { render } from 'react-dom';
//import Contenido from './components/Contenido.jsx';
//import Video from './components/Video.jsx';
import Carrusel from './components/Carrusel.jsx';
import VideoWrapper from './components/VideoWrapper.jsx';


render(
	<VideoWrapper/>,
	document.getElementById('videowrapper')
);

const data = [{
	id: 0,
	header: 'Video1',
	body: 'Aqui iria la descripcion del video 1,Aqui iria la descripcion del video 1',
	colour: '#242846',
	img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc1.jpg',
	urlvideo : 'videos/salida.m3u8'
}, {
	id: 1,
	header: 'Video2',
	body: 'Aqui iria la descripcion del video 2',
	colour: '#ba9077',
	img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc2.jpg',
	urlvideo : 'videos/salida.m3u8'
}, {
	id: 2,
	header: 'Video3',
	body: 'Aqui iria la descripcion del video 3',
	colour: '#1ABC9C',
	img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc3.jpg',
	urlvideo : 'videos/salida.m3u8'
}, {
	id: 3,
	header: 'video4',
	body: 'Aqui iria la descripcion del video 4',
	colour: '#C0392B',
	img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc4.jpg',
	urlvideo : 'videos/salida.m3u8'
}, {
	id: 4,
	header: 'video5',
	body: 'Aqui iria la descripcion del video 5',
	colour: '#513B56',
	img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc5.jpg',
	urlvideo : 'videos/salida.m3u8'
}];


render(<Carrusel data={data} />, document.getElementById('carrusel'));

