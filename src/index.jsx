import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Link, Switch, Redirect, BrowserRouter } from 'react-router-dom';

//import Recarga from './components/recargar.jsx';
import Carrusel from './components/Carrusel.jsx';
//data
import data from './components/data.jsx';



render(
<BrowserRouter>
  <Carrusel data={data} />
</BrowserRouter>
  , document.getElementById('root'));
