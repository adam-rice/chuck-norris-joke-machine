/*jshint esversion: 6 */

import React from 'react';

const Settings = (props) => {
  return (
    <button onClick={() => props.handleClick() }>Settings</button>
  );
}

export default Settings;
