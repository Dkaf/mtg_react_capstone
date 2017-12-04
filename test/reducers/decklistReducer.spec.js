import { decklistTypes } from './../../js/actions/actionTypes';
import { decklistReducer } from './../../js/reducers/decklist';

describe('decklist reducer', () => {
  it('should handle GET_DECKLIST_SUCCESS', () => {
    const sampleAction = {
      type: decklistTypes.GET_DECKLIST_SUCCESS,
      decks: [1,2,3]
    }
    expect(decklistReducer({},sampleAction)).toEqual({deckList: [1,2,3]})
  })
  it('should handle GET_DECKLIST_ERROR', () => {
    const sampleAction = {
      type: decklistTypes.GET_DECKLIST_ERROR,
      err: 'testErr'
    }
    expect(decklistReducer({}, sampleAction)).toEqual({err: 'testErr'})
  })
  it('should handle UPDATE_DECKLIST', () => {
    const sampleAction = {
      type: decklistTypes.UPDATE_DECKLIST,
      card: 4
    }
    const sampleState = {
      selectedDeck: {
        cards: [1,2,3]
      }
    }
    expect(decklistReducer(sampleState, sampleAction)).toEqual({
      selectedDeck: {
        cards: [1,2,3,4]
      }
    });
  });
})