/*jshint esversion: 6 */

import React,{ Component } from 'react';
import './settings-style';

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
    this.refs.name.value = '';
    this.refs.name.focus();
  }

  render() {
    const { displayJoke, parentalControlsDisabled, updateParentalControls } = this.props;

    return (
      <div>
        <p id="display-joke">{displayJoke}</p>
        <div id='settings-container'>
          <div id='set-name-controls'>
            <p>Set Name:</p>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input
                id='name-input'
                ref='name'
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
                <input id="pc-on" type='radio'
                  checked={checkParentalControls(parentalControlsDisabled)}
                  onChange={() => updateParentalControls()}
                />
              </label>
              <label>
                Off:
                <input id="pc-off" type='radio'
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

const checkParentalControls = (b) => {
  if(b) {
    return false
  } else return true
}

Settings.propTypes = {
  // parentalControlsDisabled: React.PropTypes.boolean,
  displayJoke:              React.PropTypes.string,
  updateParentalControls:   React.PropTypes.func,
  updateName:               React.PropTypes.func
};
