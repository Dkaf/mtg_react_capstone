import React from 'react';
import { mount } from 'enzyme';
import Card from './../../js/components/stateless/Card';

function setup() {
  const props = {
    name: 'testName',
    imageUrl: 'testUrl',
    onClick: jest.fn()
  }

  const enzymeWrapper = mount(<Card {...props} />)
  
  return {
    props,
    enzymeWrapper
  }
}

describe('Card component', () => {
  const { enzymeWrapper, props } = setup();

  it('should render a div with the class card', () => {
    expect(enzymeWrapper.find('div').hasClass('card')).toBe(true);
  })

  it('should render a card name and card image as list items', () => {
    expect(enzymeWrapper.find('li.cardName').exists()).toBe(true);
    expect(enzymeWrapper.find('li.cardImage').exists()).toBe(true);
  })

  it('should render a link with the text Remove', () => {
    expect(enzymeWrapper.find('a').text()).toEqual('Remove')
  })

  it('should accept the correct props', () => {
    expect(enzymeWrapper.props().name).toEqual('testName')
    expect(enzymeWrapper.props().imageUrl).toEqual('testUrl')
  })
})