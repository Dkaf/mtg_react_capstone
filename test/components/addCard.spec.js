import React from 'react';
import { mount } from 'enzyme';
import { AddCard }from './../../js/components/containers/add_card';

function setup() {
  const props = {
    selectedDeck: {
      name: 'selectedDeckTestName',
      cards: [1,2,3],
      user: 'deckOwner',
      password: 'ownerPassword'
    },
    user: 'deckOwner',
    password: 'ownerPassword',
    card: { name: 'testCard' }
  }

  const enzymeWrapper = mount(<AddCard {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('AddCard container component', () => {
  it('should render a button', () => {
    const { enzymeWrapper } = setup();

    const buttonProps = enzymeWrapper.find('Button').props();
    expect(buttonProps.className).toEqual('cardEdit');
    expect(buttonProps.text).toEqual('add card');
    expect(buttonProps.type).toEqual('button');
    expect(buttonProps.card).toEqual({ name: 'testCard' })
  })
})