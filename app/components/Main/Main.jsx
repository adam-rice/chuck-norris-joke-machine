/*jshint esversion: 6 */

import React,{ Component } from 'react';
import './main-style';
import { Header } from '../Header/Header';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      displayJoke: null,
      starredJokes: [],
      parentalControlsDisabled: true,
      setName: null
    };
  }

  componentDidMount() {
    const chuckData = 'http://api.icndb.com/jokes/random/1?escape=javascript';

    fetch(chuckData).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({
        displayJoke: data.value[0].joke
      });
    });
  }

  addFavorite(text, id) {
    const { starredJokes } = this.state;

    starredJokes.push(
      {
        joke: text,
        id: id,
        favorite: true
      }
    );
  }

  render() {
    return (
      <div id="body">
        <Header/>
        {React.cloneElement(this.props.children, {
          displayJoke: this.state.displayJoke,
          starredJokes: this.state.starredJokes,
          addFavorite: this.addFavorite.bind(this),
          parentalControlsDisabled: this.state.parentalControlsDisabled
        })}
      </div>
    );
  }
}
