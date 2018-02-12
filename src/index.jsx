import React, { Component } from 'react';
import { render } from 'react-dom';
//import Contenido from './components/Contenido.jsx';
//import Video from './components/Video.jsx';
import Carrusel from './components/Carrusel.jsx';


const data = [{
	id: 0,
	header: 'Video1',
	colour: '#242846',
	body: 'Aqui iria la descripcion del video 1',
	urlvideo: 'videos/Ponencia1/PONENCIA1EN.m3u8'
}, {
	id: 1,
	header: 'Video2',
	body: 'Aqui iria la descripcion del video 2',
	colour: '#ba9077',
	urlvideo: 'videos/Ponencia2/PONENCIA2EN.m3u8'
}, {
	id: 2,
	header: 'Video3',
	body: 'Aqui iria la descripcion del video 3',
	colour: '#1ABC9C',
	urlvideo: 'videos/Ponencia3/PONENCIA3EN.m3u8'
}, {
	id: 3,
	header: 'video4',
	body: 'Aqui iria la descripcion del video 4',
	colour: '#C0392B',
	urlvideo: 'videos/Ponencia1/PONENCIA1EN.m3u8'
}, {
	id: 4,
	header: 'video5',
	body: 'Aqui iria la descripcion del video 5',
	colour: '#513B56',
	urlvideo: 'videos/Ponencia1/PONENCIA1EN.m3u8'
}];


render(<Carrusel data={data} />, document.getElementById('carrusel'));

