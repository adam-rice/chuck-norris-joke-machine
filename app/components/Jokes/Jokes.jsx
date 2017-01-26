/*jshint esversion: 6 */

import React,{ Component } from 'react';
import { Link } from 'react-router';
import './jokes-style';
import { Joke } from '../Joke/Joke';

export default class Jokes extends Component {
  constructor() {
  super();
    this.state = {
      jokes: []
    };
  }

  componentDidMount() {
    fetch('http://api.icndb.com/jokes/random/40?escape=javascript&firstName=John&lastName=Doe&exclude=[explicit]').then((response) => {
      return response.json();
    }).then((data) => {
      // console.log(data);
    });
  }

  splitName() {
    const { name } = this.props;
    if (name === null) {
      return ["Chuck", "Norris"];
    } else {
      const a = name.split(" ");
      return a;
    }
  }

  onFormSubmit(e) {
    e.preventDefault();
    const count = this.refs.count.value;
    const nameArray = this.splitName();
    const firstName = nameArray[0];
    const lastName = nameArray[1];
    const defaultChuckData =
    `http://api.icndb.com/jokes/random/5?escape=javascript&firstName=${firstName}&lastName=${lastName}`;
    const definedChuckData = `http://api.icndb.com/jokes/random/${count}?escape=javasript&firstName=${firstName}&lastName=${lastName}`;

    if(count === '') {
      fetch(defaultChuckData).then((response) => {
        return response.json();
      }).then((data) => {
        this.setState({
          jokes: data.value
        });
      }); } else {
        fetch(definedChuckData).then((response) => {
        return response.json();
      }).then((data) => {
        this.setState({
          jokes: data.value
        });
      });
    }

    this.refs.count.value = '';
    this.refs.count.blur();
  }

  renderCards() {
    const { jokes } = this.state;
    if (jokes.length === 0) {
      return (
        <p id="instructions">Click Get Jokes!</p>
      );
    } else {
      return (
        <div id="joke-list">
          {jokes.map((card, i) =>
          <div key={i}>
            <Joke {...card} addFavorite={this.props.addFavorite}/>
          </div>)}
        </div>
      )
    }
  }

  render() {
    const { jokes } = this.state;

    return (
      <div id="jokes">
        <p id="display-joke">{this.props.displayJoke}</p>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <button id="getJokesBtn">Get Jokes</button>
          <input
            ref="count"
            type="number"
            placeholder="5"
          />
        </form>
        <Link
          id="favoritesBtn"
          to="/favorites">Favorites
        </Link>
        <div>
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

Jokes.propTypes = {
  addFavorite:    React.PropTypes.func,
  displayJoke:    React.PropTypes.string
};
