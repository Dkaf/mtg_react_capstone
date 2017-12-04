'use strict'
import {createStore, combineReducers, applyMiddleware } from 'redux';
import initialState from './initialState';

import { addUser } from './reducers/addUser';
import { card } from './reducers/card';
import { deck } from './reducers/deck';
import { decklist } from './reducers/decklist';
import { filters } from './reducers/filters';
import { login } from './reducers/login';
import { removeUser } from './reducers/removeUser';

const redux = require('redux');
const thunk = require('redux-thunk').default;
const reducers = require('./reducers/index');

const mainReducer = combineReducers({
  addUser,
  card,
  deck,
  decklist,
  filters,
  login,
  removeUser
});

const store = createStore(mainReducer, applyMiddleware(thunk));
export default store;
