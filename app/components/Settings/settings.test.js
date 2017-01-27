/*jshint esversion: 6 */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import { toggleBool } from './helper';
import Settings from './Settings';

describe('toggleBool()', () => {
  it('should be a function', () => {
    assert.isFunction(toggleBool);
  });

  it('will return the false if passed true', () => {
    expect(toggleBool(true)).to.equal(false);
    });

  it('will return the true if passed false', () => {
    expect(toggleBool(false)).to.equal(true);
    });
});

describe('<Settings/>', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Settings/>);

    assert.equal(wrapper.type(), 'div');
  });



  it.skip('should change the prop of parentalControlsDisabled when user clicks pc-On', () => {
    const wrapper = mount(<Settings parentalControlsDisabled={true}/>);

    wrapper.find('#pc-on').simulate('click');  //id currently removed
    expect(wrapper.prop('parentalControlsDisabled')).to.equal(false);
  });



  it.skip('should change the prop of parentalControlsDisabled when user clicks pc-Off', () => {
    const wrapper = mount(<Settings parentalControlsDisabled={false}/>);

    wrapper.find('#pc-off').simulate('click');  //id currently removed
    expect(wrapper.prop('parentalControlsDisabled')).to.equal(true);
  });



  it.skip('should change the prop of name when a new name is submitted', () => {
    const wrapper = mount(<Settings name={''}/>);
    const event = { target: { value: 'Chris Lane' } };

    wrapper.find('input').simulate('change', event);
    wrapper.find('set-name-btn').simulate('click');
    expect(wrapper.prop('name')).to.equal('Chris Lane');
  });



  it.skip('should clear the input field when Reset is clicked', () => {
    const wrapper = mount(<Settings name={''}/>);
    const event = { target: { value: 'Mark Wahlberg' } };
    const nameInput = wrapper.find('#name-input');

    nameInput.simulate('change', event);
    wrapper.find('reset-btn').simulate('click');
    expect(nameInput.length).to.equal(0);
  });
});
