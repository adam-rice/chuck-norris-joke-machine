/*jshint esversion: 6 */

import React, { Component } from 'react';
import './joke-style';

export default class Joke extends Component {
  constructor() {
    super();
    this.state = {
      favorite: false
    };
  }

  handleClick() {
    const { removeFavorite, addFavorite, id, joke } = this.props;
    if(this.state.favorite) {
      this.setState({
        favorite: false
      });
      removeFavorite(id);
    } else {
      this.setState({
        favorite: true
      });
      addFavorite(joke, id);
    }
  }

  render() {
    const { joke, id, addFavorite, favorite } = this.props;
    if(favorite) {
      return (
        <div className="joke-card">
          <article>
            <p>{joke}</p>
          </article>
        </div>
      )
    } else {
      return(
        <div className="joke-card">
          <article>
            <p>{joke}</p>
            <label>
              <button
                className={`favorite-btn ${this.state.favorite ? "favorite" : ""}`}
                onClick={this.handleClick.bind(this)}>★
              </button>
            </label>
          </article>
        </div>
      )
    }
  }
}

Joke.propTypes = {
  joke:         React.PropTypes.string,
  id:           React.PropTypes.number,
  addFavorite:  React.PropTypes.func,
  favorite:     React.PropTypes.bool
};
