import React from 'react';
import { shallow } from 'enzyme';
import Footer from './../../js/components/stateless/Footer';


describe('Footer component', () => {
  const enzymeWrapper = shallow(<Footer/>) 
  it('should render the correct component', () => {
    expect(enzymeWrapper.find('div').hasClass('footer-div')).toBe(true)
  })
  it('should have a span', () => {
    expect(enzymeWrapper.find('span').hasClass('footer-name')).toBe(true)
    expect(enzymeWrapper.find('span').text()).toEqual('Daniel Kafer')    
  })

  it('should have a link', () => {
    expect(enzymeWrapper.find('a').hasClass('footer-link')).toBe(true)
    expect(enzymeWrapper.find('a').text()).toEqual('Portfolio') 
  })
})