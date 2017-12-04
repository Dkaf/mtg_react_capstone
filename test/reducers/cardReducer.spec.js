import { cardTypes } from './../../js/actions/actionTypes';
import { cardReducer } from './../../js/reducers/card';

describe('card reducer', () => {
  it('should return initial state', () => {
    expect(cardReducer(undefined, {})).toEqual({});
  })

  it('should handle ADD_CARD_SUCCESS', () => {
    const sampleAction = {
      type: cardTypes.ADD_CARD_SUCCESS,
      deckName: 'testDeck',
      cards: [1,2,3]
    }
    const sampleState = {
      decklist: [
        {
          name: 'testDeck',
          cards: [1,2]
        }
      ]
    }
    expect(cardReducer(sampleState, sampleAction)).toEqual({decklist: [ { name: 'testDeck', cards: [1,2,3]}]})
  })

  it('should handle ADD_CARD_ERROR', () => {
    const sampleAction = {
      type: cardTypes.ADD_CARD_ERROR,
      err: 'testErr',
    }
    expect(cardReducer({}, sampleAction)).toEqual({err: 'testErr'})
  })

  it('should handle REMOVE_CARD_SUCCESS', () => {
    const sampleAction = {
      type: cardTypes.ADD_CARD_SUCCESS,
      deckName: 'testDeck',
      cards: [1,2]
    }
    const sampleState = {
      decklist: [
        {
          name: 'testDeck',
          cards: [1,2,3]
        }
      ]
    }
    expect(cardReducer(sampleState, sampleAction)).toEqual({decklist: [ { name: 'testDeck', cards: [1,2]}]})
  })

  it('should handle REMOVE_CARD_ERROR', () => {
    const sampleAction = {
      type: cardTypes.REMOVE_CARD_ERROR,
      err: 'testErr'
    }
    expect(cardReducer({}, sampleAction)).toEqual({err: 'testErr'});
  })

  it('should handle CARD_SEARCH_SUCCESS', () => {
    const sampleAction = {
      type: cardTypes.CARD_SEARCH_SUCCESS,
      cards: [
        {imageUrl: '1'},
        {imageUrl: '2'},
        {}
      ]
    }
    expect(cardReducer({}, sampleAction)).toEqual( { cardSearchResults: [{imageUrl: '1'}, {imageUrl: '2'}] });
  })

  it('should handle CARD_SEARCH_ERROR', () => {
    const sampleAction = {
      type: cardTypes.CARD_SEARCH_ERROR,
      err: 'testErr'
    }
    expect(cardReducer({}, sampleAction)).toEqual({err: 'testErr'})
  })
})