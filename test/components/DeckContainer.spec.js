import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import DeckContainer from './../../js/components/containers/DeckContainer';
import { thunk, create } from './mockRedux';


function setup() {
  const testState = {
    isLoggedIn: true,
    selectedDeck: {
      name: "testName"
    }
  }

  const store = createMockStore(testState);

  const wrapper = mount(
    <Provider store={store}>
      <DeckContainer cards={[1,2,3]} deckName={"testName"}/>
    </Provider>
  )

  return {
    testState,
    store,
    wrapper
  }
}

describe('DeckContainer component', () => {
  const { store, wrapper } = setup();
  const Component = wrapper.find(DeckContainer);

  it('should render the correct component', () => {
    expect(Component.length).toEqual(1);
  })

  it('should dispatch actions', () => {
    const sampleAction = {
      type: 'USER_NAME',
      deckName: 'testName'
    }
    store.dispatch(sampleAction);

    expect(store.getActions()).toEqual([sampleAction]);
    expect(store.isActionDispatched(sampleAction)).toBe(true);
  })

})