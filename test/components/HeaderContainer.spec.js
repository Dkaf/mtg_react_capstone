import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import HeaderContainer from './../../js/components/containers/HeaderContainer/HeaderContainer';
import { thunk, create } from './mockRedux';


function setup() {
  const testState = {
    isLoggedIn: true,
    deckList: [
      {
        name: 'test1',
        cards: [1,2,3]
      },
    ],
    selectedDeck: {
      name: 'testName'
    },
    user: 'testUser'
  }

  const store = createMockStore(testState);

  const wrapper = mount(
    <Provider store={store}>
      <HeaderContainer />
    </Provider>
  )

  return {
    testState,
    store,
    wrapper
  }
}

describe('HeaderContainer component', () => {
  const { store, wrapper } = setup();
  const Component = wrapper.find(HeaderContainer);

  it('should render the correct component', () => {
    expect(Component.length).toEqual(1);
  })

  it('should dispatch actions', () => {
    const sampleAction = {
      type: 'TEST_TYPE',
      payload: 'test'
    }
    store.dispatch(sampleAction);

    expect(store.getActions()).toEqual([sampleAction]);
    expect(store.isActionDispatched(sampleAction)).toBe(true);
  })

})