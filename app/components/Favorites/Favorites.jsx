/*jshint esversion: 6 */

import React,{ Component } from 'react';
import './favorites-style';

export default class Favorites extends Component {
  constructor() {
  super();
    this.state = {
      walrus: false
    };
  }

  render() {
    return (
      <div>
        <h3>Favorites go here</h3>
      </div>
    );
  }
}
