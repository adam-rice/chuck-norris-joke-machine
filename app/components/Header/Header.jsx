/*jshint esversion: 6 */

import React from 'react';
import { IndexLink } from 'react-router';
import './header-style';
import { NavBtn } from '../NavBtn/NavBtn';

export const Header = (props) => {
  const { homepage, toHomepage, leaveHomepage } = props;

  return (
    <div className="Header">
      <h1>
        <IndexLink
          id="headerLink"
          to="/"
          onClick={() => toHomepage()}>Chuck Norris Joke Machine
        </IndexLink>
      </h1>
        <NavBtn
          homepage={homepage}
          toHomepage={toHomepage}
          leaveHomepage={leaveHomepage}
        />
    </div>
  );
}

Header.propTypes = {
  homepage:       React.PropTypes.bool,
  toHomepage:     React.PropTypes.func,
  leaveHomepage:  React.PropTypes.func
};
