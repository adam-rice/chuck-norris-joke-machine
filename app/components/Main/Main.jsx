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
      name: null,
      homepage: true
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

  removeFavorite(id) {
    const { starredJokes } = this.state;

    for(let i = 0; i < starredJokes.length; i++) {
      if(starredJokes[i].id === id)
        delete starredJokes[i];
    }
    this.setState({
      starredJokes
    });
    console.log(starredJokes);
  }

  updateParentalControls() {
    if(this.state.parentalControlsDisabled === true) {
      this.setState({
        parentalControlsDisabled: false
      });
    } else this.setState({
      parentalControlsDisabled: true
    });
  }

  updateName(name) {
    this.setState({
      name
    });
  }

  toHomepage() {
    this.setState({
      homepage: true
    });
  }

  leaveHomepage() {
    this.setState({
      homepage: false
    });
  }

  render() {
    return (
      <div id="body">
        <Header
          homepage={this.state.homepage}
          toHomepage={this.toHomepage.bind(this)}
          leaveHomepage={this.leaveHomepage.bind(this)}
        />
        {React.cloneElement(this.props.children, {
          name:                     this.state.name,
          displayJoke:              this.state.displayJoke,
          starredJokes:             this.state.starredJokes,
          toHomepage:               this.toHomepage.bind(this),
          updateName:               this.updateName.bind(this),
          addFavorite:              this.addFavorite.bind(this),
          removeFavorite:           this.removeFavorite.bind(this),
          leaveHomepage:            this.leaveHomepage.bind(this),
          updateParentalControls:   this.updateParentalControls.bind(this),
          parentalControlsDisabled: this.state.parentalControlsDisabled
        })}
      </div>
    );
  }
}
