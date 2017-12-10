import React from 'react';
import { mount } from 'enzyme';
import Input from './../../js/components/stateless/Input';

function setup() {
  const props = {
    id: 'testId',
    type: 'testType',
    className: 'inputClassName',
    placeholder: 'testPlaceholder',
    onChange: jest.fn()
  }

  const enzymeWrapper = mount(<Input {...props} />)
  
  return {
    props,
    enzymeWrapper
  }
}

describe('Input component', () => {
  const { enzymeWrapper, props } = setup();
  it('should render the input component', () => {
    expect(enzymeWrapper.find('input').hasClass('inputClassName')).toBe(true)
  })
  it('should accept the correct props', () => {
    expect(enzymeWrapper.prop('id')).toEqual('testId');
    expect(enzymeWrapper.prop('type')).toEqual('testType');
    expect(enzymeWrapper.prop('className')).toEqual('inputClassName');
    expect(enzymeWrapper.prop('placeholder')).toEqual('testPlaceholder');
  })
})