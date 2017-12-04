'use strict'
import {createStore, combineReducers, applyMiddleware } from 'redux';

import { addUserReducer } from './reducers/addUser';
import { cardReducer } from './reducers/card';
import { deckReducer } from './reducers/deck';
import { decklistReducer } from './reducers/decklist';
import { filterReducer } from './reducers/filters';
import { loginReducer } from './reducers/login';
import { removeUserReducer } from './reducers/removeUser';

const redux = require('redux');
const thunk = require('redux-thunk').default;

const rootReducer = combineReducers({
  addUser: addUserReducer,
  card: cardReducer,
  deck: deckReducer,
  decklist: decklistReducer,
  filters: filterReducer,
  login: loginReducer,
  removeUser: removeUserReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store
