/*jshint esversion: 6 */

import React from 'react';
import { IndexLink } from 'react-router';
import './header-style';
import { SettingsBtn } from '../SettingsBtn/SettingsBtn';

export const Header = () => {
  return (
    <div className="Header">
      <h1>
        <IndexLink
          id="headerLink"
          to="/">Chuck Norris Joke Machine
        </IndexLink>
      </h1>
        <SettingsBtn/>
    </div>
  );
}
