import {addUserReducer} from './../../js/reducers/addUser';
import { newUserTypes } from './../../js/actions/actionTypes';

describe('add user reducer', () => {
  it('should return the initial state', () => {
    expect(addUserReducer(undefined, {})).toEqual({});
  })

  it('should handle NEW_USERNAME', () => {
    const sampleAction = {
      type: newUserTypes.NEW_USERNAME,
      username: 'testUser'
    }
    expect(addUserReducer({}, sampleAction)).toEqual({newUsername: 'testUser'});
  })

  it('should handle NEW_PASSWORD', () => {
    const sampleAction = {
      type: newUserTypes.NEW_PASSWORD,
      password: 'testPassword'
    }
    expect(addUserReducer({}, sampleAction)).toEqual({newPassword: 'testPassword'})
  })

  it('should handle CONFIRMED_PASSWORD', () => {
    const sampleAction = {
      type: newUserTypes.CONFIRMED_PASSWORD,
      password: 'testPassword'
    }
    expect(addUserReducer({}, sampleAction)).toEqual({password: 'testPassword'})
  })

  it('should handle ADD_USER_SUCCESS', () => {
    const sampleAction = {
      type: newUserTypes.ADD_USER_SUCCESS,
      username: 'testUser'
    }
    expect(addUserReducer({}, sampleAction)).toEqual({user: 'testUser'})
  })

  it('should handle ADD_USER_ERROR', () => {
    const sampleAction = {
      type: newUserTypes.ADD_USER_ERROR,
      err: 'testErr'
    }
    expect(addUserReducer({}, sampleAction)).toEqual({err: 'testErr'})
  })
})