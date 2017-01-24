/*jshint esversion: 6 */

import React,{ Component } from 'react';
import './main-style';

import { Header } from '../Header/Header';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      jokes: [],
      favJokes: []
    };
  }

  componentDidMount() {
    this.setState({
      jokes: [1,2,3]
    });
  }

  render() {
    return (
      <div id="body">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
