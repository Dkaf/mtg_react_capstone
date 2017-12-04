import { deckTypes } from './../../js/actions/actionTypes';
import * as actions from './../../js/actions/deck';

describe('deck action creators', () => {
  const deckName = 'testDeckName';
  const format = 'testFormat';
  const err = 'testErr';

  it('should update a new deck name in state', () => {
    const expectedAction = {
      type: deckTypes.DECK_NAME,
      deckName
    }
    expect(actions.deckName(deckName)).toEqual(expectedAction);
  })

  it('should update a new deck format in state', () => {
    const expectedAction = {
      type: deckTypes.DECK_FORMAT,
      format
    }
    expect(actions.deckFormat(format)).toEqual(expectedAction);
  })

  it('should add selected deck to the state', () => {
    const expectedAction = {
      type: deckTypes.DECK_IS_ACTIVE
    }
    expect(actions.deckIsActive()).toEqual(expectedAction);
  })

  it('should return a deck and format on add deck success', () => {
    const expectedAction = {
      type: deckTypes.ADD_DECK_SUCCESS,
        deckName,
        format
    }
    expect(actions.addDeckSuccess(deckName,format)).toEqual(expectedAction);
  })

  it('should return an error on unsuccessful add deck', () => {
    const expectedAction = {
      type: deckTypes.ADD_DECK_ERROR,
      err
    }
    expect(actions.addDeckError(err)).toEqual(expectedAction);
  })

  it('should return a deck name on successful remove', () => {
    const expectedAction = {
      type: deckTypes.REMOVE_DECK_SUCCESS,
      deckName
    }
    expect(actions.removeDeckSuccess(deckName)).toEqual(expectedAction);
  })

  it('should return an error on unsuccessful remove', () => {
    const expectedAction = {
      type: deckTypes.REMOVE_DECK_ERROR,
      err
    }
    expect(actions.removeDeckError(err)).toEqual(expectedAction);
  })

  it('should return a deck name on successful deck search', () => {
    const expectedAction = {
      type: deckTypes.DECK_SEARCH_SUCCESS,
      deckName
    }
    expect(actions.deckSearchSuccess(deckName)).toEqual(expectedAction);
  })

  it('should return an error on unsuccessful deck search', () => {
    const expectedAction = {
      type: deckTypes.DECK_SEARCH_ERROR,
      err
    }
    expect(actions.deckSearchError(err)).toEqual(expectedAction);
  })

  it('should return a deck name on deck select', () => {
    const expectedAction = {
      type: deckTypes.SELECT_DECK,
      deckName
    }
    expect(actions.selectDeck(deckName)).toEqual(expectedAction);
  })

  it('should return the deckname, cards, and card to remove of updated deck', () => {
    const cards = [1,2,3];
    const cardToRemove = {}
    const expectedAction = {
      type: deckTypes.UPDATE_DECK,
      deckName,
      cards,
      cardToRemove
    }
    expect(actions.updateDeck(deckName,cards,cardToRemove)).toEqual(expectedAction);
  })
})