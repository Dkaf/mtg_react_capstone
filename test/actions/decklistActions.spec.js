import { decklistTypes } from './../../js/actions/actionTypes';
import * as actions from './../../js/actions/decklist';

describe('decklist action creators', () => {
  const decks = [1,2,3,4];
  const card = {};
  const err = 'testErr';

  it('returns decks on successful decklist GET request', () => {
    const expectedAction = {
      type: decklistTypes.GET_DECKLIST_SUCCESS,
      decks
    }
    expect(actions.getDecklistSuccess(decks)).toEqual(expectedAction)
  })

  it('returns an error on unsuccessful decklist GET request', () => {
    const expectedAction = {
      type: decklistTypes.GET_DECKLIST_ERROR,
      err
    }
    expect(actions.getDecklistError(err)).toEqual(expectedAction);
  })

  it('returns the new card on decklist update', () => {
    const expectedAction = {
      type: decklistTypes.UPDATE_DECKLIST,
      card
    }
    expect(actions.updateDecklist(card)).toEqual(expectedAction);
  })
})