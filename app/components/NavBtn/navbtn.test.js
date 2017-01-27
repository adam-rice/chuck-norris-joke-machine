/*jshint esversion: 6 */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { assert, expect } from 'chai';

import { NavBtn } from './NavBtn';

describe('<NavBtn/>', () => {
  it('a Link will be displayed for Settings or Jokes', () => {
      const wrapper = shallow(<NavBtn/>);
      expect(wrapper.find('Link').text()).to.equal('<Link />');
    });

  it('should render a button to settings if homepage is true', () => {
    const wrapper = mount(<NavBtn homepage={true}/>);
    const button = wrapper.find('Link')
    assert.equal(button.text(), 'Settings');
  });

  it('should render a button to Jokes if homepage is false', () => {
    const wrapper = mount(<NavBtn homepage={false}/>);
    const button = wrapper.find('Link');
    assert.equal(button.text(), 'Jokes');
  });
});
