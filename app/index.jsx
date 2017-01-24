/*jshint esversion: 6 */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './reset';
import Main from './components/Main/Main';
import { Settings } from './components/Settings/Settings';
import Favorites from './components/Favorites/Favorites';
import Jokes from './components/Jokes/Jokes';

render (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='settings' component={Settings}/>
      <Route path='favorites' component={Favorites}/>
      <IndexRoute component={Jokes}/>
    </Route>
  </Router>,
  document.getElementById('application')
);
