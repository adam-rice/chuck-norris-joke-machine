/*jshint esversion: 6 */

import React, { Component } from 'react';
import './joke-style';

export default class Joke extends Component {
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
                className={`favorite-btn ${favorite ? "favorite" : ""}`}
                onClick={() => addFavorite(joke, id)}>★
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
