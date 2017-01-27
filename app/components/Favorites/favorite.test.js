/*jshint esversion: 6 */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import { Favorites } from './Favorites';

describe('<Favorites/>', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Favorites starredJokes={['123']}/>);
    assert.equal(wrapper.type(), 'div');
  });

  it('if there are no starredJokes a p tag is rendered saying "You have not favorited any jokes."', () => {
      const wrapper = shallow(<Favorites starredJokes={[]}/>)
      expect(wrapper.find('p').text()).to.equal('You have not favorited any jokes.')
    });
});
