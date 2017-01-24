/*jshint esversion: 6 */

import { Component } from 'react';

export default class Jokes extends Component {
  constructor() {
  super();
    this.state = {
      dance: false
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
