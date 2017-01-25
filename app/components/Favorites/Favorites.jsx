/*jshint esversion: 6 */

import React,{ Component } from 'react';
import './favorites-style';
import { Joke } from '../Joke/Joke';

export const Favorites = ({ starredJokes }) => {
  console.log(starredJokes);

  if(starredJokes.length < 1) {
    return (
      <p id="joke-status">You have not favorited any jokes.</p>
    );
  } else {
    return (
      <div id="favorite-list">
        {starredJokes.map((card) =>
        <div key={card.id}>
          <Joke {...card} />
        </div>)}
      </div>
    )
  }
};
