/*jshint esversion: 6 */

import React from 'react';

const SettingsBtn = (props) => {
  return (
    <button onClick={() => props.handleClick() }>Settings</button>
  );
}

export default SettingsBtn;
