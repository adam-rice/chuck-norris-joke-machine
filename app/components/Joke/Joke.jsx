/*jshint esversion: 6 */

import React from 'react';
import './joke-style';

export const Joke = (props) => {
  const { joke, id, addFavorite } = props;
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
};
