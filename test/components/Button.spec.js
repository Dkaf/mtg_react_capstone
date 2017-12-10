import React from 'react';
import { mount } from 'enzyme';
import Button from './../../js/components/stateless/Button';

function setup() {
  const props = {
    className: 'testButton',
    type: 'button',
    onClick: jest.fn(),
    text: 'button text'
  }

  const enzymeWrapper = mount(<Button {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Button presentational component', () => {
  it('should render a button with a class, type, text and onClick function', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('button').hasClass('testButton')).toBe(true);

    expect(enzymeWrapper.find('button').text()).toBe('button text')
  })
})