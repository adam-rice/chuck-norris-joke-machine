/*jshint esversion: 6 */

import React,{ Component } from 'react';
import { Link } from 'react-router';
import './jokes-style';

export default class Jokes extends Component {
  constructor() {
  super();
    this.state = {
      jokes: 'CLICK GET JOKES!'
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
        <p>list</p>
      </div>
    );
  }
}
