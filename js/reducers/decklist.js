import { decklistTypes } from './../actions/actionTypes';
import { addToArray } from './utilityFunctions'
export function decklistReducer(state = [], action) {
  switch(action.type) {
    case decklistTypes.GET_DECKLIST_SUCCESS:
      return {...state, deckList: action.decks};
    case decklistTypes.GET_DECKLIST_ERROR:
      return {...state, err: action.err};
    case decklistTypes.UPDATE_DECKLIST:
      return {
        ...state,
        selectedDeck: {
          ...state.selectedDeck,
          cards: addToArray(state.selectedDeck.cards, action.card)
        }
      }
    default:
      return state
  }
}