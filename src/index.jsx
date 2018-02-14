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
	body: 'Aquí iría la descripción del video 1',
	srcvideo: 'videos/Ponencia1/PONENCIA1EN.m3u8'
}, {
	id: 1,
	titulo: 'Video 2',
	header: 'Video2',
	body: 'Aquí iría la descrpción del video 2',
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
}, {
	id: 5,
	titulo: 'Video 6',
	header: 'Video6',
	body: 'Aqui iria la descripcion del video 6',
	colour: '#513B56',
	srcvideo: 'videos/Ponencia1/PONENCIA1EN.m3u8'
}, {
	id: 6,
	titulo: 'Video 7',
	header: 'Video7',
	body: 'Aqui iria la descripcion del video 7',
	colour: '#513B56',
	srcvideo: 'videos/Ponencia1/PONENCIA1EN.m3u8'
}, {
	id: 7,
	titulo: 'Video 8',
	header: 'Video8',
	body: 'Aqui iria la descripcion del video 8',
	colour: '#513B56',
	srcvideo: 'videos/Ponencia1/PONENCIA1EN.m3u8'
}, {
	id: 8,
	titulo: 'Video 9',
	header: 'Video9',
	body: 'Aqui iria la descripcion del video 9',
	colour: '#513B56',
	srcvideo: 'videos/Ponencia1/PONENCIA1EN.m3u8'
}, {
	id: 9,
	titulo: 'Video 10',
	header: 'Video10',
	body: 'Aqui iria la descripcion del video 10',
	colour: '#513B56',
	srcvideo: 'videos/Ponencia1/PONENCIA1EN.m3u8'
}];


render(
	<BrowserRouter>
		<Carrusel data={data} />
	</BrowserRouter>
	, document.getElementById('carrusel'));
