/*jshint esversion: 6 */

import React from 'react';
import { Link } from 'react-router';
import './navbtn-style';

export const NavBtn = (props) => {
  const { homepage, toHomepage, leaveHomepage } = props;

  if(homepage) {
    return (
        <Link
          id="nav-button"
          to="/settings"
          onClick={() => leaveHomepage()}
          >Settings
        </Link>
      )
    } else {
      return (
        <Link
          id="nav-button"
          to="/"
          onClick={() => toHomepage()}
          >Jokes
        </Link>
      )
  }
}
