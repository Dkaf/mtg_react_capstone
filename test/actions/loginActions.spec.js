import * as actions from './../../js/actions/login';
import { loginTypes } from './../../js/actions/actionTypes';

describe('login actions', () => {
  const username = 'testUser';
  const password = 'testPassword';
  const err = 'testErr';

  it('should return a username and password on successful login', () => {
    const expectedAction = {
      type: loginTypes.LOGIN_SUCCESS,
      username,
      password
    }
    expect(actions.loginSuccess(username,password)).toEqual(expectedAction);
  });

  it('should return an error when login fails', () => {

    const expectedAction = {
      type: loginTypes.LOGIN_ERROR,
      err
    }
    expect(actions.loginError(err)).toEqual(expectedAction);
  });

  it('should store a username in state', () => {
    const expectedAction = {
      type: loginTypes.LOGIN_USERNAME,
      username
    }
    expect(actions.loginUsername(username)).toEqual(expectedAction);
  })

  it('should store a password in state', () => {
    const expectedAction = {
      type: loginTypes.LOGIN_PASSWORD,
      password
    }
    expect(actions.loginPassword(password)).toEqual(expectedAction);
  })

  it('should logout a user', () => {
    const expectedAction = {
      type: loginTypes.LOGOUT
    }
    expect(actions.logout()).toEqual(expectedAction);
  });
});