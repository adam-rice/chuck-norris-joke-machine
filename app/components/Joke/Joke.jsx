/*jshint esversion: 6 */

import React from 'react';
import './joke-style';

export const Joke = (props) => {
  console.log(props);
  const { joke } = props;
  return(
    <div className="joke-card">
      <article>
        <p>{joke}</p>
        <label>
          <input
            type="checkbox"
          />
        </label>
      </article>
    </div>
  )
};
