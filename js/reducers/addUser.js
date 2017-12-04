import {newUserTypes} from './../actions/actionTypes';

export function addUserReducer (state = {}, action) {
  switch(action.type) {
    case newUserTypes.NEW_USERNAME:
      return { ...state, newUsername: action.username };
    case newUserTypes.NEW_PASSWORD:
      return {...state, newPassword: action.password};
    case newUserTypes.CONFIRMED_PASSWORD:
      return {...state, password: action.password};
    case newUserTypes.ADD_USER_SUCCESS:
      return {...state, user: action.username};
    case newUserTypes.ADD_USER_ERROR:
      return {...state, err: action.err};
    default:
      return state;
  }
}