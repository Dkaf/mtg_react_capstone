import { deckTypes } from './../actions/actionTypes';
import { addToArray, filterArray, findInArray } from './utilityFunctions';

export function deckReducer(state = [], action) {
  switch(action.type) {

    case deckTypes.ADD_DECK_SUCCESS:
      return {...state, deckList: addToArray(state.deckList, {name: action.deckName, format: action.format, cards: []})};
    case deckTypes.ADD_DECK_ERROR:
      return {...state, err: action.err};
    case deckTypes.REMOVE_DECK_SUCCESS:
      return {...state, deckList: filterArray(state.deckList, action.deckName, 'name')};
    case deckTypes.REMOVE_DECK_ERROR:
      return {...state, err: action.err};
    case deckTypes.SELECT_DECK:
      return {...state, selectedDeck: findInArray(state.deckList, 'name', action.deckName)[0]};
    case deckTypes.UPDATE_DECK:
      return {...state, editedDeck: filterArray(action.cards, action.cardToRemove, 'name')};
    case deckTypes.DECK_NAME:
      return {...state, deckname: action.deckName};
    case deckTypes.DECK_FORMAT:
      return {...state, format: action.format}
    case deckTypes.DECK_IS_ACTIVE:
      return {...state, deckIsActive: !state.deckIsActive}
    default: return state;
  }
}