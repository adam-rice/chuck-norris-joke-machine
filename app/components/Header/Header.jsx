/*jshint esversion: 6 */

import React from 'react';
import { IndexLink } from 'react-router';

import './header-style';

import SettingsBtn from '../SettingsBtn/SettingsBtn';

const logStuff = () => {
  console.log("clicked!");
};

export const Header = (props) => {
  return (
    <div className="Header">
      <h1>
        <IndexLink
          id="headerLink"
          activeClassName="active"
          to="/">Chuck Norris Joke Machine
        </IndexLink>
      </h1>
      <SettingsBtn handleClick={() => logStuff()} />
    </div>
  );
}
