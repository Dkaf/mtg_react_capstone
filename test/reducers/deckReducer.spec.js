import  { deckTypes } from './../../js/actions/actionTypes';
import { deckReducer } from './../../js/reducers/deck';

describe('deck reducer', () => {
  it('should handle ADD_DECK_SUCCESS', () => {
    const sampleAction = {
      type: deckTypes.ADD_DECK_SUCCESS,
        deckName: 'testName',
        format: 'testFormat'
    }
    const sampleState = {
      deckList: []
    }
    expect(deckReducer(sampleState, sampleAction)).toEqual({
      deckList: [
        {
          name: 'testName',
          format:'testFormat',
          cards: []
        }
      ]
    })
  })
  it('should handle ADD_DECK_ERROR', () => {
    const sampleAction = {
      type: deckTypes.ADD_DECK_ERROR,
      err: 'testErr'
    }
    expect(deckReducer({}, sampleAction)).toEqual({err: 'testErr'})
  })
  it('should handle REMOVE_DECK_SUCCESS', () => {
    const sampleAction = {
      type: deckTypes.REMOVE_DECK_SUCCESS,
      deckName: 'testName'
    }
    const sampleState = {
      deckList: [
        { name: 'testName'}
      ]
    }
    expect(deckReducer)
  })
  it('should handle REMOVE_DECK_ERROR', () => {
    const sampleAction = {
      type: deckTypes.REMOVE_DECK_ERROR,
      err: 'testErr'
    }
    expect(deckReducer({}, sampleAction)).toEqual({err: 'testErr'})
  })
  it('should handle SELECT_DECK', () => {
    const sampleAction = {
      type: deckTypes.SELECT_DECK,
      deckName: 'testName'
    }
    const sampleState = {
      deckList: [
        { name: 'testName' }
      ]
    }
    expect(deckReducer(sampleState, sampleAction)).toEqual({...sampleState, selectedDeck: { name: 'testName'}})
  })
  it('should handle UPDATE_DECK', () => {
    const sampleAction = {
      type: deckTypes.UPDATE_DECK,
      deckName: 'testName',
      cards: [
        {name: 'aaa'},
        {name: 'bbb'},
        {name: 'ccc'}
      ],
      cardToRemove: 'bbb'
    }
    expect(deckReducer({}, sampleAction)).toEqual({editedDeck: [{name:'aaa'},{name:'ccc'}]});
  })
  it('should handle DECK_NAME', () => {
    const sampleAction = {
      type: deckTypes.DECK_NAME,
      deckName: 'testName'
    };
    expect(deckReducer({}, sampleAction)).toEqual({deckname: 'testName'})
  })
  it('should handle DECK_FORMAT', () => {
    const sampleAction = {
      type: deckTypes.DECK_FORMAT,
      format: 'testFormat'
    }
    expect(deckReducer({}, sampleAction)).toEqual({format: 'testFormat'})
  })
  it('should handle DECK_IS_ACTIVE', () => {
    const sampleAction = {
      type: deckTypes.DECK_IS_ACTIVE
    }
    const sampleState = {
      deckIsActive: false
    }
    expect(deckReducer(sampleState, sampleAction)).toEqual({deckIsActive: true})
  })
})