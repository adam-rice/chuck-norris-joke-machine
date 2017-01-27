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

});



// it('if there is no user there is no welcome message', () => {
//     const user = false
//     const wrapper = shallow(<Header user={user}/>)
//     expect(wrapper.find('p').text()).to.equal('')
//   })


// it('if there is a user the welcome message will render', () => {
//   const user = true
//   const wrapper = shallow(<Header user={user}/>)
//   expect(wrapper.find('p').text()).to.equal('Welcome, ')
