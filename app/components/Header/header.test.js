/*jshint esversion: 6 */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import { Header } from './Header';

describe('<Header/>', () => {
  it('should display a single h1 tag', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('renders as a <div>', () => {
    const wrapper = shallow(<Header/>);
    assert.equal(wrapper.type(), 'div');
  });

  it('the h1 will render an IndexLink', () => {
    const wrapper = shallow(<Header/>);
    const header = wrapper.find('h1');
    expect(header.text()).to.equal('<IndexLink />');
  });
});
