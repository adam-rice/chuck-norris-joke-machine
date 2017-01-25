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
          <button id='set-name-btn'>SET</button>
          <button id='reset-btn'>RESET</button>
        </div>
        <div id='parental-controls'>
          <p>Parental Controls: </p>
          <form>
            <label>
              On:
              <input id="pc-on" type='radio'
                checked={checkParentalControls(props.parentalControlsDisabled)}
                onChange={() => console.log('wow')}
              />
            </label>
            <label>
              Off:
              <input id="pc-off" type='radio'
                checked={props.parentalControlsDisabled}
                onChange={() => console.log('NOOO')}
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

const checkParentalControls = (b) => {
  if(b) {
    return false
  } else return true
}
