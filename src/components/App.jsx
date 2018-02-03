import React, { Component } from 'react';

class App extends Component{
	render(){
		return(
			[
			    {
			        nombre: 'Video-1',
			        titulo: 'Medicina Fetal Apartado 1'
			    },
			    {
			        nombre: 'Video-2',
			        titulo: 'Medicina Fetal Apartado 2'
			    }
			].map((anObjectMapped, index) => {
			    return (
			        <h2 key={`${anObjectMapped.nombre}_{anObjectMapped.titulo}`}>
			            {anObjectMapped.nombre} - {anObjectMapped.titulo}
			        </h2>
			    );
			})
		)
	}
}

export default App;