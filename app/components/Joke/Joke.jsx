/*jshint esversion: 6 */

import React from 'react';
import './joke-style';

export const Joke = (props) => {
  const { joke } = props;
  return(
    <div className="joke-card">
      <article>
        <p>{joke}</p>
        <label>
          <input
            type="checkbox"
            className="favorite-btn"
          />
        </label>
      </article>
    </div>
  )
};
