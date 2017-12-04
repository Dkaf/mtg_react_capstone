require('isomorphic-fetch');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login } from './../../js/actions/login';
import { addUser } from './../../js/actions/addUser';
import { getDecklist } from './../../js/actions/decklist'
import { addCard, removeCard, cardSearch } from './../../js/actions/card';
import { addDeck, removeDeck, deckSearch } from './../../js/actions/deck';
import { loginTypes, newUserTypes, cardTypes, decklistTypes, deckTypes } from './../../js/actions/actionTypes';
import fetchMock from 'fetch-mock';
import expect from 'expect';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  const username = 'testUser';
  const password = 'testPassword';
  const deckName = 'testDeck';
  const cards = [1,2,3]

  it('checks a users login info and returns loginSuccess', () => {
    const mockResult = { username, password }
    fetchMock
      .postOnce('https://still-island-83205.herokuapp.com/login', mockResult)

    const expectedActions = {type: loginTypes.LOGIN_SUCCESS, username, password}
    const store = mockStore({})

    return store.dispatch(login(username, password)).then(() => {
      expect(store.getActions()[0]).toEqual(expectedActions)        
    })
  })

  it('adds a user', () => {
    const mockResult = { body: { username } };
    fetchMock
      .postOnce('https://still-island-83205.herokuapp.com/users', mockResult)
    const expectedActions = {type: newUserTypes.ADD_USER_SUCCESS, username: 'testUser'}
    const store = mockStore({})

    return store.dispatch(addUser(username, password)).then(() => {
      expect(store.getActions()[0]).toEqual(expectedActions)
    })
  })

  it('gets a decklist', () => {
    const decks = [1,2,3];
    const mockResult = { body: {decks}};
    fetchMock
      .getOnce('https://still-island-83205.herokuapp.com/decks/testUser', mockResult)

    const expectedAction = {type: decklistTypes.GET_DECKLIST_SUCCESS, decks };

    const store = mockStore({});

    return store.dispatch(getDecklist(username)).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction);
    })
  })

  it('adds a card to a deck', () => {
    const mockResult = { body: {deckName, cards}}
    fetchMock
      .putOnce('https://still-island-83205.herokuapp.com/user/deck/' + deckName, mockResult)
    const expectedActions = [{type: cardTypes.ADD_CARD_SUCCESS, deckName, cards}]

    const store = mockStore({});

    return store.dispatch(addCard(deckName,cards,username,password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })

  it('removes a card from a deck', () => {
    const mockResult = { body: { deck: { name: deckName, cards} } } ;
    fetchMock
      .putOnce('https://still-island-83205.herokuapp.com/user/deck/' + deckName, mockResult)
    const expectedActions = [{type: cardTypes.REMOVE_CARD_SUCCESS, deckName, card: cards}]

    const store = mockStore({});

    return store.dispatch(removeCard(deckName,cards,username,password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('searches for cards', () => {
    const filters = {};
    const mockResult = { body: { cards }};
    fetchMock
      .getOnce('https://still-island-83205.herokuapp.com/cards/', mockResult)
    const expectedActions = [{type: cardTypes.CARD_SEARCH_SUCCESS, cards: {cards} }];

    const store = mockStore({});

    return store.dispatch(cardSearch(filters)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('adds a deck', () => {
    const format = 'testFormat';
    const mockResult = { body: {deck: { name: deckName, format}} }
    fetchMock
      .postOnce('https://still-island-83205.herokuapp.com/user/deck/', mockResult)
    const expectedActions = [{type: deckTypes.ADD_DECK_SUCCESS, deckName, format}]

    const store = mockStore({});

    return store.dispatch(addDeck(deckName,format,username,password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })

  it('removes a deck', () => {
    const mockResult = { body: { deckName } } ;
    fetchMock
      .deleteOnce('https://still-island-83205.herokuapp.com/user/deck/' + deckName, mockResult)
    const expectedActions = [{type: deckTypes.REMOVE_DECK_SUCCESS, deckName}]

    const store = mockStore({});

    return store.dispatch(removeDeck(deckName)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('searches for a deck', () => {
    const mockResult = { deck: deckName } ;
    fetchMock
      .getOnce('https://still-island-83205.herokuapp.com/deck/' + deckName, mockResult)
    const expectedActions = [{type: deckTypes.DECK_SEARCH_SUCCESS, deckName}]

    const store = mockStore({});

    return store.dispatch(deckSearch(deckName)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})