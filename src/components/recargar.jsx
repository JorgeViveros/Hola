import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Link, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Componente2 from './componente2.jsx';
import Carrusel from './Carrusel.jsx';
import MainCarrusel from './MainCarrusel.jsx';
import VideoPrueba from './VideoPrueba.jsx';

class Recarga extends Component {


  render() {
    return (
      <div className="Hola">
        <h1>Holaañkfdjgdflkgj</h1>
        <Link to="/c2">Componente 2</Link>
        <a href="/c3">MainVideos</a>
        <a href="/c4">Pruebas</a>

          <Switch>
            <Route exact path="/c2" component={Componente2} />
            <Route exact path="/c3" component={MainCarrusel} />
            <Route exact path="/c4" component={VideoPrueba} />

          </Switch>

      </div>
    );
  }
}

export default Recarga;
