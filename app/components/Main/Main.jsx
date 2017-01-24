/*jshint esversion: 6 */

import React,{ Component } from 'react';
import './main-style';

import { Header } from '../Header/Header';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      displayJoke: null,
    };
  }

  componentDidMount() {
    const chuckData = 'http://api.icndb.com/jokes/random/1?escape=javascript';
    fetch(chuckData).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      this.setState({
        displayJoke: data.value[0].joke
      });
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
