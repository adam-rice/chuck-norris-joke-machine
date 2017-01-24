/*jshint esversion: 6 */

import React from 'react';
import './header-style';

import SettingsBtn from '../SettingsBtn/SettingsBtn';

const logStuff = () => {
  console.log("clicked!");
};

export const Header = () => {
  return (
    <div className="Header">
      <h1>Chuck Norris Joke Machine</h1>
      <SettingsBtn handleClick={() => logStuff()} />
    </div>
  );
}
