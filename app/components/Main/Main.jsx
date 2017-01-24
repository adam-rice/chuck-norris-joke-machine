/*jshint esversion: 6 */

import React from 'react';
import './main-style';

import { Header } from '../Header/Header';

export const Main = (props) => {
  return (
    <div id="body">
      <Header/>
      {props.children}
    </div>
  );
}
