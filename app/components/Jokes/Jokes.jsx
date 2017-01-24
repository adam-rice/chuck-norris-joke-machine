/*jshint esversion: 6 */

import React,{ Component } from 'react';
import { Link } from 'react-router';
import chuckData from '../../API/chuck-database';
import './jokes-style';

export default class Jokes extends Component {
  constructor() {
  super();
    this.state = {
      isLoading: false,
      joke: 'CLICK GET JOKES!'
    };
  }

  onFormSubmit(e) {
    e.preventDefault();

    // this.setState({isLoading: true});

    chuckData.getJoke().then(function(response) {
      console.log(response.data.value.joke);
    });
  //     this.setState({
  //       joke: response.data.value.joke
  //     });
  //   },function (errorMessage) {
  //     this.setState({isLoading: false});
  //     alert(errorMessage);
  //   });
  }

  render() {
    return (
      <div>
        <p>Some default joke</p>
        <form onSubmit={this.onFormSubmit}>
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
        <p>{this.state.joke}</p>
      </div>
    );
  }
}
