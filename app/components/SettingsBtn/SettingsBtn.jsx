/*jshint esversion: 6 */

import React from 'react';
import { Link } from 'react-router';
import './settingsbtn-style';

export const SettingsBtn = (props) => {
  return (
      <Link
        id="settingsBtn"
        activeClassName="active"
        to="/settings">Settings
      </Link>
  );
}
