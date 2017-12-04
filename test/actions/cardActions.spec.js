import * as actions from './../../js/actions/card';
import { cardTypes } from './../../js/actions/actionTypes';

describe('card action creators', () => {
  const deckName = 'testDeck';
  const cards = [];
  const err = 'testErr';

  it('should return a deck and updated cards on add card success', () => {
    const expectedAction = {
      type: cardTypes.ADD_CARD_SUCCESS,
      deckName,
      cards
    };
    expect(actions.addCardSuccess(deckName, cards)).toEqual(expectedAction);
  })

  it('should return an error on add card error', () => {
    const expectedAction = {
      type: cardTypes.ADD_CARD_ERROR,
      err
    }
    expect(actions.addCardError(err)).toEqual(expectedAction);
  })

  it('should return a deckname and cards on successful card removal', () => {
    const expectedAction = {
      type: cardTypes.REMOVE_CARD_SUCCESS,
      deckName,
      card: cards
    }
    expect(actions.removeCardSuccess(deckName,cards)).toEqual(expectedAction)
  })

  it('should return an error on unsuccessful card removal', () => {
    const expectedAction = {
      type: cardTypes.REMOVE_CARD_ERROR,
      err
    }
    expect(actions.removeCardError(err)).toEqual(expectedAction)
  })

  it('should return cards on successful card search', () => {
    const expectedAction = {
      type: cardTypes.CARD_SEARCH_SUCCESS,
      cards
    }
    expect(actions.cardSearchSuccess(cards)).toEqual(expectedAction)
  })

  it('should return an error on unsuccessful card search', () => {
    const expectedAction = {
      type: cardTypes.CARD_SEARCH_ERROR,
      err
    }
    expect(actions.cardSearchError(err)).toEqual(expectedAction)
  })

  it('should go forward one search page', () => {
    const expectedAction = {
      type: cardTypes.PAGE_FORWARD
    }
    expect(actions.pageForward()).toEqual(expectedAction)
  })

  it('should go back one search page', () => {
    const expectedAction = {
      type: cardTypes.PAGE_BACK
    }
    expect(actions.pageBack()).toEqual(expectedAction)
  })
})