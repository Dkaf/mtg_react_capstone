import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import ConnectedAddCard, { AddCard } from './../../js/components/containers/add_card';
import { thunk, create } from './mockRedux'

function setup() {
  // const props = {
  //   selectedDeck: {
  //     name: 'selectedDeckTestName',
  //     cards: [1,2,3],
  //     user: 'deckOwner',
  //     password: 'ownerPassword'
  //   },
  //   user: 'deckOwner',
  //   password: 'ownerPassword',
  //   card: { name: 'testCard' }
  // }

  const testState = {
    isLoggedIn: true,
    selectedDeck: {
      name: 'selectedDeckTestName',
      cards: [1,2,3],
      user: 'deckOwner',
      password: 'ownerPassword'
    },
    user: 'deckOwner',
    password: 'ownerPassword',
  };
  const store = createMockStore(testState);

  const wrapper = mount(
    <Provider store={store}>
      <ConnectedAddCard card={{name: 'testCard'}}/>
    </Provider>
  )  



  return {
    testState,
    store,
    wrapper
  }
}

describe('AddCard container component', () => {
  const { wrapper, store } = setup();
  const SmartComponent = wrapper.find(ConnectedAddCard);
  const Component = wrapper.find(AddCard);

  it('should render component with store successfully', () => {
    expect(SmartComponent.length).toEqual(1)
    expect(Component.length).toEqual(1)
    expect(store.getState().isLoggedIn).toEqual(true)
    expect(Component.prop('user')).toEqual(store.getState().user)
    expect(Component.prop('password')).toEqual(store.getState().password)
    expect(Component.prop('selectedDeck')).toEqual(store.getState().selectedDeck)
    expect(Component.prop('card')).toEqual({name: 'testCard'})
  })

  it('should render a button', () => {
    const buttonProps = Component.find('Button').props();
    expect(buttonProps.className).toEqual('cardEdit');
    expect(buttonProps.text).toEqual('add card');
    expect(buttonProps.type).toEqual('button');
    expect(SmartComponent.find('Button').hasClass('cardEdit')).toBe(true);
  })

  it('should handle Button clicks by dispatching updates to store', () => {
    const selectedDeck = Component.prop('selectedDeck');
    const sampleAction = {
      type: 'UPDATE_DECKLIST',
      card: Component.prop('card')
    }
    // button.props().onClick();
    store.dispatch(sampleAction);
    expect(store.getActions()).toEqual([sampleAction]);
    expect(store.isActionDispatched(sampleAction)).toBe(true)
  })
})