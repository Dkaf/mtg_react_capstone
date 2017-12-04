import { cardTypes } from './../../actions/actionTypes';
import * as caseFunctions from './caseFunctions';

export function cardReducer(state = {}, action) {
  switch(action.type) {
    case cardTypes.ADD_CARD_SUCCESS:
      return caseFunctions.addCardSuccess(state, action);
    case cardTypes.ADD_CARD_ERROR:
      return {...state, err: action.err};
    case cardTypes.REMOVE_CARD_SUCCESS:
      return caseFunctions.removeCardSuccess(state, action);
    case cardTypes.REMOVE_CARD_ERROR:
      return {...state, err: action.err};
    case cardTypes.CARD_SEARCH_SUCCESS:
      return caseFunctions.cardSearchSuccess(state, action);
    case cardTypes.CARD_SEARCH_ERROR:
      return {...state, err: action.err};
    default: return state
  }
}