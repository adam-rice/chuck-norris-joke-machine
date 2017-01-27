/*jshint esversion: 6 */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';


import Joke from './Joke';

describe('<Joke/>', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Joke/>);
    assert.equal(wrapper.type(), 'div');
  });

  it('renders a div with className joke-card', () => {
    const wrapper = shallow(<Joke/>);
    expect(wrapper.find('.joke-card')).to.have.length(1);
  });

  it('has a state of favorite as false', () => {
    const wrapper = shallow(<Joke/>);
    expect(wrapper.state().favorite).to.equal(false);
  });

  it('should change the state of favorite when user clicks the star', () => {
    const wrapper = mount(<Joke addFavorite={()=>console.log('** I love react **')}/>);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('favorite')).to.equal(true);
  });
});
