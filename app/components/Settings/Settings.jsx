/*jshint esversion: 6 */

import React from 'react';
import './settings-style';

export const Settings = (props) => {
  return (
    <div>
      <p id="display-joke">{props.displayJoke}</p>
      <div id='settings-container'>
        <div id='set-name-controls'>
          <p>Set Name:</p>
          <input id='name-input'/>
          <button id='set-name-btn'>Set</button>
          <button id='reset-btn'>RESET</button>
        </div>
        <div id='parental-controls'>
          <p>Parental Controls: </p>
          <label>
            <input type='radio'/>
          </label>
          <label>
            <input type='radio'/>
          </label>
        </div>
      </div>
    </div>
  );
}
