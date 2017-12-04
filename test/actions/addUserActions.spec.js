import * as actions from './../../js/actions/addUser';
import { newUserTypes } from './../../js/actions/actionTypes';

describe('add user action creators', () => {
  const username = 'testUser'
  const password = 'testPassword'
  const err = 'testErr'

  it('should put a new username into the state', () => {
    const expectedAction = {
      type: newUserTypes.NEW_USERNAME,
      username
    };
    expect(actions.newUsername(username)).toEqual(expectedAction);
  })

  it('should put a new password into the state', () => {
    const expectedAction = {
      type: newUserTypes.NEW_PASSWORD,
      password
    }
    expect(actions.newPassword(password)).toEqual(expectedAction)
  })

  it('should put a confirmed password into the state', () => {
    const expectedAction = {
      type: newUserTypes.CONFIRMED_PASSWORD,
      password
    }
    expect(actions.confirmedPassword(password)).toEqual(expectedAction);
  })

  it('should return a username on add user success', () => {
    const expectedAction = {
      type: newUserTypes.ADD_USER_SUCCESS,
      username
    }
    expect(actions.addUserSuccess(username)).toEqual(expectedAction)
  })

  it('should return an error on add user error', () => {
    const expectedAction = {
      type: newUserTypes.ADD_USER_ERROR,
      err
    }
    expect(actions.addUserError(err)).toEqual(expectedAction);
  })
})