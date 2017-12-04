import { removeUserTypes } from './../../js/actions/actionTypes';
import { removeUserReducer } from './../../js/reducers/removeUser';

describe('remove user reducer', () => {
  it('should handle REMOVE_USER_SUCCESS', () => {
    const sampleAction = {
      type: removeUserTypes.REMOVE_USER_SUCCESS,
      user: {name: 'testUser1'}
    }
    const sampleState = {
      users: [
        {name: 'testUser1'},
        {name: 'testUser2'}
      ]
    }
    expect(removeUserReducer(sampleState, sampleAction)).toEqual({
      users: [
        {name: 'testUser2'}
      ]
    })
  })

  it('should handle REMOVE_USER_ERROR', () => {
    const sampleAction = {
      type: removeUserTypes.REMOVE_USER_ERROR,
      err: 'testErr'
    }
    expect(removeUserReducer({}, sampleAction)).toEqual({err: 'testErr'})
  })
})