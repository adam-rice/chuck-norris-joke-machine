/*jshint esversion: 6 */

import React from 'react';
import './joke-style';

export const Joke = (props) => {
  const { joke, id, addFavorite, favorite } = props;

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
            <input
              type="checkbox"
              className="favorite-btn"
              onChange={() => addFavorite(joke, id)}
            />
          </label>
        </article>
      </div>
    )
  }
};

Joke.propTypes = {
  joke:         React.PropTypes.string,
  id:           React.PropTypes.number,
  addFavorite:  React.PropTypes.func,
  // favorite:     React.PropTypes.boolean
};
