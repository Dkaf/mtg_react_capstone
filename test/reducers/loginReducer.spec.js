import { loginTypes } from './../../js/actions/actionTypes';
import { loginReducer } from './../../js/reducers/login';

describe('login reducer', () => {
  it('should handle LOGIN_SUCCESS', () => {
    const sampleAction = {
      type: loginTypes.LOGIN_SUCCESS,
      username: 'testName',
      password: 'testPassword',
      isLoggedIn: true
    }
    expect(loginReducer({}, sampleAction)).toEqual({
      user: 'testName',
      password: 'testPassword',
      isLoggedIn: true
    })
  })

  it('should handle LOGIN_ERROR', () => {
    const sampleAction = {
      type: loginTypes.LOGIN_ERROR,
      err: 'testErr'
    }
    expect(loginReducer({}, sampleAction)).toEqual({
      err: 'testErr'
    })
  })

  it('should handle LOGIN_USERNAME', () => {
    const sampleAction = {
      type: loginTypes.LOGIN_USERNAME,
      username: 'testUser'
    }
    expect(loginReducer({}, sampleAction)).toEqual({
      user: 'testUser'
    })
  })

  it('should handle LOGIN_PASSWORD', () => {
    const sampleAction = {
      type: loginTypes.LOGIN_PASSWORD,
      password: 'testPassword'
    }
    expect(loginReducer({}, sampleAction)).toEqual({
      password: 'testPassword'
    })
  })

  it('should handle LOGOUT', () => {
    const sampleAction = {
      type: loginTypes.LOGOUT
    }
    expect(loginReducer({}, sampleAction)).toEqual({
      user: '',
      password: '',
      isLoggedIn: false
    })
  })
})