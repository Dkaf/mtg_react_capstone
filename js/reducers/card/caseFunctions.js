import { updateObject, updateArray, filterArray } from './../utilityFunctions';

export function addCardSuccess(state, action) {
  const newDecklist = updateArray(state.decklist, 'name', action.deckName, deck => {
    return {...deck, cards: action.cards}
  })
  return {...state, decklist: newDecklist}
}

export function removeCardSuccess(state, action) {
  const newDecklist = updateArray(state.decklist, name, action.deckName, deck => {
    return {...deck, cards: action.cards}
  })
  return {...state, decklist: newDecklist};
}

export function cardSearchSuccess(state, action) {
  const filteredCards = filterArray(action.cards, false, 'imageUrl')
  return {...state, cardSearchResults: filteredCards}
}