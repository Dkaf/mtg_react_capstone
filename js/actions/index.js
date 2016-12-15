const fetch = require('isomorphic-fetch');
const store = require('../store');

//Add a user
const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
const addUserSuccess = (user, password) => {
	return {
		type: ADD_USER,
		username: username,
		password: password
	}
}

const ADD_USER_ERROR = 'ADD_USER_ERROR';
const addUserError = (error) => {
	return {
		error:error
	}
}

const addUser = (username, password) => {
	return (dispatch) => {
		const request = new Request('https://still-island-83205.herokuapp.com/users', {
			method: 'POST',
			body: JSON.stringify({
				username: username,
				password: password
			})
		});
		fetch(request)
		.then( (response) => {
			return response.json()
		})
		.then( (data) => {
			return
		})
		.catch( (err) => {
			return dispatch(
				addUserError(err)
			)
		})
	}
}

//Remove a user
const REMOVE_USER_SUCCESS = 'REMOVE_USER_SUCCESS';
const removeUserSuccess = (user) => {
	return {
		type: REMOVE_USER,
		user: user
	}
};

const REMOVE_USER_ERROR = 'REMOVE_USER_ERROR';
const removeUserError = (error) => {
	return {
		error: error
	}
};

const removeUser = (username) => {
	return (dispatch) => {

	}
};

//Update new deck name in state
const DECK_NAME = 'DECK_NAME';
const deckName = (name) => {
	return {
		type: DECK_NAME,
		name: name
	}
}

//Update new deck format in state
const DECK_FORMAT = 'DECK_FORMAT';
const deckFormat = (format) => {
	return {
		type: DECK_FORMAT,
		format: format
	}
}

//Add a deck
const ADD_DECK_SUCCESS = 'ADD_DECK_SUCCESS'
const addDeckSuccess = (deck, format) => {
	return {
		type: ADD_DECK,
		deckName: deck,
		deckFormat: format
	}
};

const ADD_DECK_ERROR = 'ADD_DECK_ERROR';
const addDeckError = (error) => {
	return {
		error: error
	}
};

const addDeck = (deckName, deckFormat) => {
	return (dispatch) => {
		const request = new Request('https://still-island-83205.herokuapp.com/user/deck', {
			method: 'POST',
			body: JSON.stringify({
				name: deckName,
				format: deckFormat
			})
		});
		fetch(request)
		.then( (response) => {
			return response.json()
		})
		.then( (data) => {
			return dispatch(
				addDeckSuccess(data.deckName, data.deckFormat)
			)
		})
		.catch( (err) => {
			return dispatch(
				addDeckError(err)
			)
		})
	}
};

//Remove a Deck
const REMOVE_DECK_SUCCESS = 'REMOVE_DECK_SUCCESS';
const removeDeckSuccess = (deckName) => {
	return {
		type: REMOVE_DECK,
		deckName: deckName
	}
};

const REMOVE_DECK_ERROR = 'REMOVE_DECK_ERROR';
const removeDeckError = (error) => {
	return {
		error: error
	}
};

const removeDeck = (deckName) => {
	return (dispatch) => {
		const request = new Request('https://still-island-83205.herokuapp.com/user/deck/' + deckName, {
			method: 'DELETE'
		})
		fetch(request)
		.then( (response) =>{
			return response.json
		})
		.then( (data) =>{
			return
		})
		.catch( (err) => {
			return dispatch(
				removeDeckError(err)
			)
		})
	}
};

//Add card to deck
const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
const addCardSuccess = (deckName, card) => {
	return {
		type: ADD_CARD,
		deckName: deckName,
		card: card
	}
};

const ADD_CARD_ERROR = 'ADD_CARD_ERROR';
const addCardError = (error) => {
	return {
		error: error
	}
};

const addCard = (deckName, cards) => {
	return (dispatch) => {
		const request = new Request('https://still-island-83205.herokuapp.com/user/deck/' + deckName, {
			method: 'UPDATE',
			body: JSON.stringify({
				cards: cards
			})
		});
		fetch(request)
		.then( (response) => {
			return response.json()
		})
		.then( (data) => {
			return dispatch(
				addCardSuccess(data.deckName, data.card)
			)
		})
		.catch( (err) => {
			return dispatch(
				addCardError(err)
			)
		})
	}
};

//Remove card from deck
const REMOVE_CARD_SUCCESS = 'REMOVE_CARD_SUCCESS';
const removeCardSuccess = (card) => {
	return {
		type: REMOVE_CARD,
		card: card
	}
};

const REMOVE_CARD_ERROR = 'REMOVE_CARD_ERROR';
const removeCardError = (error) => {
	return {
		error: error
	}
};

const removeCard = (deckName, card) => {
	return (dispatch) => {
		const request = new Request('https://still-island-83205.herokuapp.com/user/deck/' + deckName, {
			method: 'UPDATE',
			body: JSON.stringify({
				cards: card
			})
		});
		fetch(request)
		.then( (response) => {
			return response.json()
		})
		.then( (data) => {
			return dispatch(
				removeCardSuccess(data.deckName, data.cards)
			)
		})
		.catch( (err) => {
			return dispatch(
				removeCardError(err)
			)
		})
	}
};

//Search for a user

//Search for a deck
const DECK_SEARCH_SUCCESS = 'DECK_SEARCH_SUCCESS';
const deckSearchSuccess = (deckName) => {
	return {
		type: DECK_SEARCH_SUCCESS,
		deckName: deckName
	}
};

const DECK_SEARCH_ERROR = 'DECK_SEARCH_ERROR';
const deckSearchError = (error) => {
	return {
		error: error
	}
};

const deckSearch = (deckName) => {
	return (dispatch) => {
		const request = ('https://still-island-83205.herokuapp.com/deck/' + deckName);
		fetch(request)
		.then( (response) => {
			return response.json()
		})
		.then( (data) => {
			let deck = data;
			return dispatch (
				deckSearchSuccess(deck)
			)
		})
		.catch( (err) => {
			return dispatch (
				deckSearchError(err)
			)
		})
	}
};


//Search for a card
const CARD_SEARCH_SUCCESS = 'CARD_SEARCH_SUCCESS';
const cardSearchSuccess = (cards) => {
	return {
		cards: cards
	}
};

const CARD_SEARCH_ERROR = 'CARD_SEARCH_ERROR';
const cardSearchError = (error) => {
	return {
		error: error
	}
};

const cardSearch = () => {
	return(dispatch) => {
		const params = store.getState().filters;
		let query = '';
		Object.key(params).forEach(key == query + (query.length==0?'?':'&') + key + '=' + params[key])
		const request = ('https://still-island-83205.herokuapp.com/cards/' + query);
		fetch(request)
		.then( (response) => {
			return response.json()
		})
		.then( (data) =>{
			return dispatch(
				cardSearchSuccess(data)
			)
		})
		.catch( (err) => {
			return dispatch(
				cardSearchError(err)
			)
		})
	}
};

//Add filters to state
const ADD_FILTERS = 'ADD_FILTERS';
const addFilters = (filters) => {
	return {
		type: ADD_FILTERS,
		filters: filters
	}
}

exports.ADD_USER_SUCCESS = ADD_USER_SUCCESS;
exports.addUserSuccess = addUserSuccess;
exports.ADD_USER_ERROR = ADD_USER_ERROR;
exports.addUserError = addUserError;
exports.addUser = addUser;
exports.REMOVE_USER_SUCCESS = REMOVE_USER_SUCCESS;
exports.removeUserSuccess = removeUserSuccess;
exports.REMOVE_USER_ERROR = REMOVE_USER_ERROR;
exports.removeUserError = removeUserError;
exports.removeUser = removeUser;
exports.ADD_DECK_SUCCESS = ADD_DECK_SUCCESS;
exports.addDeckSuccess = addDeckSuccess;
exports.ADD_DECK_ERROR = ADD_DECK_ERROR;
exports.addDeckError = addDeckError;
exports.addDeck = addDeck;
exports.REMOVE_DECK_SUCCESS = REMOVE_DECK_SUCCESS;
exports.removeDeckSuccess = removeDeckSuccess;
exports.REMOVE_DECK_ERROR = REMOVE_DECK_ERROR;
exports.removeDeckError = removeDeckError;
exports.removeDeck = removeDeck;
exports.ADD_CARD_SUCCESS = ADD_CARD_SUCCESS;
exports.addCardSuccess = addCardSuccess;
exports.ADD_CARD_ERROR = ADD_CARD_ERROR;
exports.addCardError = addCardError;
exports.addCard = addCard;
exports.REMOVE_CARD_SUCCESS = REMOVE_CARD_SUCCESS;
exports.removeCardSuccess = removeCardSuccess;
exports.REMOVE_CARD_ERROR = REMOVE_CARD_ERROR;
exports.removeCardError = removeCardError;
exports.removeCard = removeCard;
exports.DECK_SEARCH_SUCCESS = DECK_SEARCH_SUCCESS;
exports.deckSearchSuccess = deckSearchSuccess;
exports.DECK_SEARCH_ERROR = DECK_SEARCH_ERROR;
exports.deckSearchError = deckSearchError;
exports.deckSearch = deckSearch;
