import React, { Component } from 'react';

import data from './data.jsx';
import Carrusel from './Carrusel.jsx';

class MainCarrusel extends Component {
    render(){
      return(
        <Carrusel data={data} />

      );
    }
}

  export default MainCarrusel;
