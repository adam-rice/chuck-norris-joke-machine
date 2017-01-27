/*jshint esversion: 6 */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import { toggleBool } from './helper';

describe('toggleBool func', () => {
  it('should be a function', () => {
    assert.isFunction(toggleBool);
  });

  it('will return the false if passed true', () => {
    expect(toggleBool(true)).to.equal(false);
    });

  it('wwill return the true if passed false', () => {
    expect(toggleBool(false)).to.equal(true);
    });
});
