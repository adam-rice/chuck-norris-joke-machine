/*jshint esversion: 6 */

import React,{ Component } from 'react';
import { Link } from 'react-router';
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
        <p>Some default joke</p>
        <form>
          <button>New Jokes</button>
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
      </div>
    );
  }
}
