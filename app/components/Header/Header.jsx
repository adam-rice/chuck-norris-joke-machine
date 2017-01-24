/*jshint esversion: 6 */

import React from 'react';
import './header-style';

import Settings from '../Settings/Settings';

const logStuff = () => {
  console.log("clicked!");
};

const Header = () => {
  return (
    <div className="Header">
      <h1>Chuck Norris Joke Machine</h1>
      <Settings handleClick={() => logStuff()} />
    </div>
  );
}

export default Header;
