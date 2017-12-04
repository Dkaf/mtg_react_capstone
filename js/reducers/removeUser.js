import { removeUserTypes } from './../actions/actionTypes';
import { filterArray } from './utilityFunctions';

export function removeUserReducer (state = {}, action) {
  switch(action.type) {
    case removeUserTypes.REMOVE_USER_SUCCESS:
      return {...state, users: filterArray(state.users, action.user.name, 'name')};
    case removeUserTypes.REMOVE_USER_ERROR:
      return {...state, err: action.err}
    default: return state;
  }
}