import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Deck from './../../js/components/stateless/Deck';

function setup() {
  const props = {
    className: 'testClassName',
    deckName: 'testDeckName',
    deckFormat: 'testDeckFormat',
    averageCmc: 4,
    cards: [1,2,3],
    onClick: jest.fn()
  }

  const enzymeWrapper = mount(<Deck {...props}/>);

  return {
    props,
    enzymeWrapper
  }
}

describe('Deck component', () => {
  const { enzymeWrapper, props } = setup();
  it('should render a div with the class deck', () => {
    expect(enzymeWrapper.find('div.deck').exists()).toBe(true)
  })

  it('should have a h3 that accepts the className and deckName props', () => {
    expect(enzymeWrapper.find('h3').hasClass(props.className)).toBe(true);
    expect(enzymeWrapper.find('h3').text()).toEqual('testDeckName');
  })

  it('should have a span with the class deckFormat that displays deckFormat prop', () => {
    expect(enzymeWrapper.find('span.deckFormat').exists()).toBe(true);
    expect(enzymeWrapper.find('span.deckFormat').text()).toEqual('Format: ' + props.deckFormat);
  })

  it('should have a span with the class averageCmc that displays averageCmc prop', () => {
    expect(enzymeWrapper.find('span.averageCmc').exists()).toBe(true);
    expect(enzymeWrapper.find('span.averageCmc').text()).toEqual('Average Cmc: ' + props.averageCmc);
  })

  it('should have a div with the class cardList that displays cards prop', () => {
    expect(enzymeWrapper.find('div.cardList').exists()).toBe(true);
    expect(enzymeWrapper.find('div.cardList').text()).toEqual('123');
  })
})