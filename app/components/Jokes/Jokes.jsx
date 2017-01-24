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

  onFormSubmit(e) {
    e.preventDefault();
    const count = this.refs.count.value;
    const defaultChuckData =
    'http://api.icndb.com/jokes/random/5?escape=javascript';
    const definedChuckData = `http://api.icndb.com/jokes/random/${count}?escape=javasript`;

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

  render() {
    const { jokes } = this.state;
    return (
      <div id="jokes">
        <p>{this.props.displayJoke}</p>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <button>Get Jokes</button>
          <input
            ref="count"
            type="number"
            placeholder="5"
          />
        </form>
        <Link
          id="favoritesBtn"
          activeClassName="active"
          to="/favorites">Favorites
        </Link>
        <div>
          {jokes.map((card) =>
          <div key={card.id}>
            <Joke {...card} />
          </div>)}
        </div>
      </div>
    );
  }
}
