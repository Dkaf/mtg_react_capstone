import { removeUserTypes } from './../../js/actions/actionTypes';
import * as actions from './../../js/actions/removeUser';

describe('remove user action creators', () => {
  it('should return the removed user on success', () => {
    const user = 'testUser';
    const expectedAction = {
      type: removeUserTypes.REMOVE_USER_SUCCESS,
      user
    }
    expect(actions.removeUserSuccess(user)).toEqual(expectedAction);
  })

  it('should return an error on unsuccessful removal', () => {
    const err = 'testErr';
    const expectedAction = {
      type: removeUserTypes.REMOVE_USER_ERROR,
      err
    }
    expect(actions.removeUserError(err)).toEqual(expectedAction);
  })
})