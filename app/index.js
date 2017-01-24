/*jshint esversion: 6 */

import React from 'react';
import { render } from 'react-dom';
import './reset';
import './styles';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header/>
    </div>
  );
}

render(<App />, document.getElementById('application'));
