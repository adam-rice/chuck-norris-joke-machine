/*jshint esversion: 6 */

import React from 'react';
import { Link } from 'react-router';
import './settingsbtn-style';

export const SettingsBtn = () => {
  return (
      <Link
        id="settings-button"
        to="/settings">Settings
      </Link>
  );
}
