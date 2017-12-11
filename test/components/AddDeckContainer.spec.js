import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import AddDeckContainer from './../../js/components/containers/AddDeckContainer';
import { thunk, create } from './mockRedux';


function setup() {
  const testState = {
    isLoggedIn: true
  }

  const store = createMockStore(testState);

  const wrapper = mount(
    <Provider store={store}>
      <AddDeckContainer />
    </Provider>
  )

  return {
    testState,
    store,
    wrapper
  }
}

describe('AddDeckContainer component', () => {
  const { store, wrapper } = setup();
  const Component = wrapper.find(AddDeckContainer);

  it('should render the correct component', () => {
    expect(Component.length).toEqual(1);
  })

  it('should dispatch actions', () => {
    const sampleAction = {
      type: 'DECK_NAME',
      deckName: 'testName'
    }
    store.dispatch(sampleAction);

    expect(store.getActions()).toEqual([sampleAction]);
    expect(store.isActionDispatched(sampleAction)).toBe(true);
  })

})