import React, { Component } from 'react';
import { render } from 'react-dom';
//import Contenido from './components/Contenido.jsx';
//import Video from './components/Video.jsx';
import Carrusel from './components/Carrusel.jsx';
import { BrowserRouter } from 'react-router-dom';




const data = [{
	id: 0,
	titulo: 'Video 1',
	header: 'Video1',
	colour: '#242846',
	body: 'Aqui iria la descripcion del video 1',
	srcvideo: 'videos/Ponencia1/PONENCIA1EN.m3u8'
}, {
	id: 1,
	titulo: 'Video 2',
	header: 'Video2',
	body: 'Aqui iria la descripcion del video 2',
	colour: '#ba9077',
	srcvideo: 'videos/Ponencia2/PONENCIA2EN.m3u8'
}, {
	id: 2,
	titulo: 'Video 3',
	header: 'Video3',
	body: 'Aqui iria la descripcion del video 3',
	colour: '#1ABC9C',
	srcvideo: 'videos/Ponencia3/PONENCIA3EN.m3u8'
}, {
	id: 3,
	titulo: 'Video 4',
	header: 'Video4',
	body: 'Aqui iria la descripcion del video 4',
	colour: '#C0392B',
	srcvideo: 'videos/Ponencia1/PONENCIA1EN.m3u8'
}, {
	id: 4,
	titulo: 'Video 5',
	header: 'Video5',
	body: 'Aqui iria la descripcion del video 5',
	colour: '#513B56',
	srcvideo: 'videos/Ponencia1/PONENCIA1EN.m3u8'
}];


render(
	<BrowserRouter>
		<Carrusel data={data} />	
	</BrowserRouter>
	, document.getElementById('carrusel'));

