import { loginTypes } from './../actions/actionTypes';

export function loginReducer (state = {}, action) {
  switch(action.type) {
    case loginTypes.LOGIN_SUCCESS:
      return {...state, user: action.username, password: action.password, isLoggedIn: true};
    case loginTypes.LOGIN_ERROR:
      return {...state, err: action.err};
    case loginTypes.LOGIN_USERNAME:
      return {...state, user: action.username}
    case loginTypes.LOGIN_PASSWORD:
      return {...state, password: action.password};
    case loginTypes.LOGOUT:
      return {...state, user: '', password: '', isLoggedIn: false};
    default:
      return state
  }
}