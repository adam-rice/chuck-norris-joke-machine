/*jshint esversion: 6 */

import React,{ Component } from 'react';
import './jokes-style';

export default class Jokes extends Component {
  constructor() {
  super();
    this.state = {
      hippo: false
    };
  }

  render() {
    return (
      <div>
        <h3>Jokes go here</h3>
      </div>
    );
  }
}
