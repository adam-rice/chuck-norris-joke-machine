/*jshint esversion: 6 */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './reset';
import './styles';
import { Header } from './components/Header/Header';
import { Settings } from './components/Settings/Settings';
import Jokes from './components/Jokes/Jokes';

render (
  <Router history={hashHistory}>
    <Route path='/' component={Header}>
      <Route path='settings' component={Settings}/>
      <IndexRoute component={Jokes}/>
    </Route>
  </Router>,
  document.getElementById('application')
);
