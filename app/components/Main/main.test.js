/*jshint esversion: 6 */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import Main from './Main';

describe('<Main/>', () => {
  it.skip('renders as a <div>', () => {
    const wrapper = shallow(<Main/>);
    assert.equal(wrapper.type(), 'div');
  });

  it.skip('renders a div with id #body', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('#body')).to.have.length(1);
  });

  it.skip('has a state of displayJoke equal to null', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.state().displayJoke).to.equal(null);
  });

  it.skip('has a state of name equal to null', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.state().name).to.equal(null);
  });

  it.skip('has a state of starredJokes equal to []', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.state().starredJokes).to.deep.equal([]);
  });

  it.skip('has a state of parentalControlsDisabled equal to true', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.state().parentalControlsDisabled).to.equal(true);
  });

  it.skip('has a state of homepage equal to true', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.state().homepage).to.equal(true);
  });

  it.skip('renders one <Header/> component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it.skip('calls componentDidMount', () => {
    sinon.spy(Main.prototype, 'componentDidMount');
    const wrapper = mount(<Main />);
    expect(Main.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
