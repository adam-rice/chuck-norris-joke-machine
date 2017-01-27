/*jshint esversion: 6 */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import Jokes from './Jokes';

describe('<Jokes/>', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Jokes/>);
    assert.equal(wrapper.type(), 'div');
  });

  it('renders a div with id #jokes', () => {
    const wrapper = shallow(<Jokes/>);
    expect(wrapper.find('#jokes')).to.have.length(1);
  });

  it('has a state of jokes equal to []', () => {
    const wrapper = shallow(<Jokes/>);
    expect(wrapper.state().jokes).to.deep.equal([]);
  });

  it.skip('should change the state of jokes when user clicks Get Jokes', () => {
    const wrapper = mount(<Jokes/>);
    const jokes = wrapper.state('jokes');
    wrapper.find('#getJokesBtn').simulate('click');
    expect(jokes.length).to.equal(5);
  });

  it.skip('should change the state of jokes to a specific number of jokes when user clicks Get Jokes and also inputs a number', () => {
    const wrapper = mount(<Jokes/>);
    const jokes = wrapper.state('jokes');
    wrapper.find('input').simulate('change', 7);
    wrapper.find('#getJokesBtn').simulate('click');
    expect(jokes.length).to.equal(7);
  });
});
