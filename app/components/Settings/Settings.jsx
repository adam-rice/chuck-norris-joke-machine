/*jshint esversion: 6 */

import React,{ Component } from 'react';
import './settings-style';
import { toggleBool } from './helper';

export default class Settings  extends Component {
  handleSubmit(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    if(name.length > 0) {
      this.refs.name.value = '';
      this.props.updateName(name);
      this.refs.name.blur();
    } else {
      this.refs.name.focus();
    }
  }

  clearInput() {
    this.props.updateName('Chuck Norris');
    this.refs.name.value = '';
  }

  render() {
    const { displayJoke, parentalControlsDisabled, updateParentalControls, name } = this.props;

    return (
      <div>
        <p id="display-joke">{displayJoke}</p>
        <div id='settings-container'>
          <div id='set-name-controls'>
            <p>Set Name:</p>
            <form
              onSubmit={this.handleSubmit.bind(this)}
              autoComplete='off'>
              <input
                id='name-input'
                ref='name'
                placeholder={name}
              />
              <button id='set-name-btn'>SET</button>
              <button
                id='reset-btn'
                onClick={this.clearInput.bind(this)}>RESET
              </button>
            </form>
          </div>
          <div id='parental-controls'>
            <p>Parental Controls: </p>
            <form>
              <label>
                On:
                <input type='radio'
                  checked={toggleBool(parentalControlsDisabled)}
                  onChange={() => updateParentalControls()}
                />
              </label>
              <label>
                Off:
                <input type='radio'
                  checked={parentalControlsDisabled}
                  onChange={() => updateParentalControls()}
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  name:                     React.PropTypes.string,
  displayJoke:              React.PropTypes.string,
  parentalControlsDisabled: React.PropTypes.bool,
  updateParentalControls:   React.PropTypes.func,
  updateName:               React.PropTypes.func
};
