import {updateObject, addToArray} from './../utilityFunctions';

export function getDecklistSuccess (state, action) {
  return updateObject(state, {deckList: action.decks});
};

export function updateDecklist (state, action) {
  const newCards = addToArray(state.selectedDeck.cards, action.card);
  return {
    ...state,
    selectedDeck: {
      ...state.selectedDeck,
      cards: newCards
    }
  }
};