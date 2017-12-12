import React from 'react';
import { mount } from 'enzyme';
import Checkbox from './../../js/components/stateless/Checkbox/Checkbox';

function setup() {
  const props = {
    id: 'testId',
    image: 'testImageProp',
    className: 'inputClassName',
    value: 'testValue',
    onClick: jest.fn()
  }

  const enzymeWrapper = mount(<Checkbox {...props} />)
  
  return {
    props,
    enzymeWrapper
  }
}
describe('Checkbox component', () => {
  const { enzymeWrapper, props } = setup();

  it('should render the correct component', () => {
    expect(enzymeWrapper.find('div').hasClass('colorCheckbox'))
  })

  it('should accept the correct props', () => {
    expect(enzymeWrapper.prop('id')).toEqual('testId')
    expect(enzymeWrapper.props().image).toEqual('testImageProp')
    expect(enzymeWrapper.props().className).toEqual('inputClassName')
    expect(enzymeWrapper.props().value).toEqual('testValue')
  })

  it('should have a label', () => {
    const label = enzymeWrapper.find('label');
  })

  it('should have an img', () => {
    expect(enzymeWrapper.find('img').hasClass('colorIcon')).toBe(true)
  })

  it('should have an input', () => {
    expect(enzymeWrapper.find('input').hasClass('inputClassName')).toBe(true)
  })
})