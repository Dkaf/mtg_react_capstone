'use strict'
const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require('redux-thunk').default;
const reducers = require('./reducers/index');

const store = createStore(reducers.mainReducer, applyMiddleware(thunk));
module.exports  = store;
