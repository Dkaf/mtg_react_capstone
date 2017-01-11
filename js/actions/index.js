const fetch = require('isomorphic-fetch');
const store = require('../store');


//Login
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const loginSuccess = (username, password) => {
	return {
		type: LOGIN_SUCCESS,
		username: username,
		password: password
	}
}

const LOGIN_ERROR = 'LOGIN_ERROR';
const loginError = (error) => {
	return {
		type: LOGIN_ERROR,
		error: error
	}
}

const login = (username, password) => {
	return (dispatch) => {
		const request = new Request('https://still-island-83205.herokuapp.com/login', {
			method: 'POST',
			headers: {
				'Authorization': 'Basic ' + btoa(username + ':' + password),
				'Content-Type': 'Application/json'
			},
			body: {}

		})
		fetch(request)
		.then( (response) => {
			return response.json()
		})
		.then( (data) => {
			return dispatch(
				loginSuccess(username, password)
			), dispatch(getDecklist(username))
		})
		.catch( (err) => {
			return dispatch(
				loginError(err)
			)
		})
	}
}

//put username into state
const LOGIN_USERNAME = 'LOGIN_USERNAME';
const loginUsername = (username) => {
	return {
		type: LOGIN_USERNAME,
		username: username
	}
}

//put password into state
const LOGIN_PASSWORD = 'LOGIN_PASSWORD';
const loginPassword = (password) => {
	return {
		type: LOGIN_PASSWORD,
		password: password
	}
}

// const LOGIN = 'LOGIN';
// const login = (profile, token) => {
// 	return (dispatch) {
//
// 	}
// }

//Logout
const LOGOUT = 'LOGOUT';
const logout = () => {
	return {
		type: LOGOUT
	}
}

//New username into state
const NEW_USERNAME = 'NEW_USERNAME';
const newUsername = (username) => {
	return {
		type: NEW_USERNAME,
		username: username
	}
}

//New password into state
const NEW_PASSWORD = 'NEW_PASSWORD';
const newPassword = (password) => {
	return {
		type: NEW_PASSWORD,
		password: password
	}
}

//Confirmed password
const CONFIRMED_PASSWORD = 'CONFIRMED_PASSWORD';
const confirmedPassword = (password) => {
	return {
		type: CONFIRMED_PASSWORD,
		password: password
	}
}

//Add a user
const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
const addUserSuccess = (username) => {
	return {
		type: ADD_USER_SUCCESS,
		username: username
	}
}

const ADD_USER_ERROR = 'ADD_USER_ERROR';
const addUserError = (error) => {
	return {
		type: ADD_USER_ERROR,
		error:error
	}
}

const addUser = (username, password) => {
	return (dispatch) => {
		const request = new Request('https://still-island-83205.herokuapp.com/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/json'
			},
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
			return dispatch(
				addUserSuccess(data.username)
			)
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

//Get decklist from database
const GET_DECKLIST_SUCCESS = 'GET_DECKLIST_SUCCESS';
const getDecklistSuccess = (decks) => {
	return {
		type: GET_DECKLIST_SUCCESS,
		decks: decks
	}
};

const GET_DECKLIST_ERROR = 'GET_DECKLIST_ERROR';
const getDecklistError = (error) => {
	return {
		type: GET_DECKLIST_ERROR,
		error: error
	}
};

const getDecklist = (user) => {
	return(dispatch) => {
		const request = new Request('https://still-island-83205.herokuapp.com/decks/' + user, {
			method: 'GET',
			headers: {
				'Content-Type': 'Application/json'
			}
		});
		fetch(request)
		.then( (response) => {
			return response.json()
		})
		.then( (data) => {
			return dispatch(
				getDecklistSuccess(data.decks)
			)
		})
		.catch( (err) => {
			return dispatch(
				getDecklistError(err)
			)
		})
	}
}

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
const ADD_DECK_SUCCESS = 'ADD_DECK_SUCCESS';
const addDeckSuccess = (deck, format) => {
	return {
		type: ADD_DECK_SUCCESS,
		deckName: deck,
		deckFormat: format
	}
};

const ADD_DECK_ERROR = 'ADD_DECK_ERROR';
const addDeckError = (error) => {
	return {
		type: ADD_DECK_ERROR,
		error: error
	}
};

const addDeck = (deckName, deckFormat, user, password) => {
	console.log(deckName, deckFormat);
	return (dispatch) => {
		const request = new Request('https://still-island-83205.herokuapp.com/user/deck/', {
			method: 'POST',
			headers: {
				'Authorization': 'Basic ' + btoa(user + ':' + password),
				'Content-Type': 'Application/json'
			},
			body: JSON.stringify({
				name: deckName,
				format: deckFormat,
				user: user
			})
		});
		fetch(request)
		.then( (response) => {
			return response.json()
		})
		.then( (data) => {
			return dispatch(
				addDeckSuccess(data.deck.name, data.deck.format)
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
		type: REMOVE_DECK_SUCCESS,
		deckName: deckName
	}
};

const REMOVE_DECK_ERROR = 'REMOVE_DECK_ERROR';
const removeDeckError = (error) => {
	return {
		type: REMOVE_DECK_ERROR,
		error: error
	}
};

const removeDeck = (deckName) => {
	console.log(deckName)
	return (dispatch) => {
		const request = new Request('https://still-island-83205.herokuapp.com/user/deck/' + deckName, {
			method: 'DELETE',
			headers:{
				'Content-Type': 'Application/json'
			}
		})
		fetch(request)
		.then( (response) =>{
			return response.json()
		})
		.then( (data) =>{
			return dispatch(
				removeDeckSuccess(deckName)
			)
		})
		.catch( (err) => {
			return dispatch(
				removeDeckError(err)
			)
		})
	}
};

//Select deck
const SELECT_DECK = 'SELECT_DECK';
const selectDeck = (deckName) => {
	return {
		type: SELECT_DECK,
		deckName: deckName
	}
}

//Update decklist before updating in database
const UPDATE_DECKLIST = 'UPDATE_DECKLIST';
const updateDecklist = (card) => {
	return {
		type: UPDATE_DECKLIST,
		card: card
	}
}

//Add card to deck
const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
const addCardSuccess = (deckName, card) => {
	return {
		type: ADD_CARD_SUCCESS,
		deckName: deckName,
		card: card
	}
};

const ADD_CARD_ERROR = 'ADD_CARD_ERROR';
const addCardError = (error) => {
	return {
		type: ADD_CARD_ERROR,
		error: error
	}
};

const addCard = (deckName, cards, user, password) => {
	console.log(deckName)
	console.log(cards)
	return (dispatch) => {
		const request = new Request('https://still-island-83205.herokuapp.com/user/deck/' + deckName, {
			method: 'PUT',
			headers: {
				'Authorization': 'Basic ' + btoa(user + ':' + password),
				'Content-Type': 'Application/json'
			},
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
				addCardSuccess(data.deck.name, data.deck.cards),
				getDecklist(user)
			)
		})
		.catch( (err) => {
			return dispatch(
				addCardError(err)
			)
		})
	}
};

//Update decklist with removed card
const UPDATE_DECK = 'UPDATE_DECK';
const updateDeck = (deckName) => {
	return {
		type: UPDATE_DECK,
		deckName: deckName
	}
}

//Remove card from deck
const REMOVE_CARD_SUCCESS = 'REMOVE_CARD_SUCCESS';
const removeCardSuccess = (deckName, card) => {
	return {
		type: REMOVE_CARD,
		deckName: deckName,
		card: card
	}
};

const REMOVE_CARD_ERROR = 'REMOVE_CARD_ERROR';
const removeCardError = (error) => {
	return {
		error: error
	}
};

const removeCard = (deckName, cards, user, password) => {
	return (dispatch) => {
		const request = new Request('https://still-island-83205.herokuapp.com/user/deck/' + deckName, {
			method: 'PUT',
			headers: {
				'Authorization': 'Basic ' + btoa(user + ':' + password),
				'Content-Type': 'Application/json'
			},
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
				removeCardSuccess(data.deck.name, data.deck.cards),
				getDecklist(user)
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
		type: CARD_SEARCH_SUCCESS,
		cards: cards
	}
};

const CARD_SEARCH_ERROR = 'CARD_SEARCH_ERROR';
const cardSearchError = (error) => {
	return {
		type: CARD_SEARCH_ERROR,
		error: error
	}
};

const cardSearch = (filters) => {
	return(dispatch) => {
		if(filters.colors) {
			filters.colors = filters.colors.toString();
		}
		console.log(filters);
		let query = '';
		Object.keys(filters).forEach((key) => {query = query + (query.length==0?'?':'&') + key + '=' + filters[key]})
		const request = new Request ('https://still-island-83205.herokuapp.com/cards/' + query, {
			headers: {
				'Content-Type': 'Application/json'
			},
			method: 'GET'
		});
		fetch(request)
		.then( (response) => {
			return response.json()
		})
		.then( (data) =>{
			data.forEach((key) =>{console.log(key.name)});
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
const NAME_FILTER = 'NAME_FILTER';
const nameFilter = (name) => {
	return {
		type: NAME_FILTER,
		name: name
	}
}

const CMC_FILTER = 'CMC_FILTER';
const cmcFilter = (cmc) => {
	return {
		type: CMC_FILTER,
		cmc: cmc
	}
}

const TYPE_FILTER = 'TYPE_FILTER';
const typeFilter = (typeOption) => {
	return {
		type: ADD_FILTERS,
		typeOption: typeOption
	}
}

const RARITY_FILTER = 'RARITY_FILTER';
const rarityFilter = (rarity) => {
	return {
		type: RARITY_FILTER,
		rarity: rarity
	}
}

const COLOR_FILTER = 'COLOR_FILTER';
const colorFilter = (color) => {
	return {
		type: COLOR_FILTER,
		color: color
	}
}

const REMOVE_COLOR_FILTER = 'REMOVE_COLOR_FILTER';
const removeColorFilter = (color) => {
	return {
		type: REMOVE_COLOR_FILTER,
		color: color
	}
}

const COLORS_TO_STRING = 'COLORS_TO_STRING';
const colorsToString = () => {
	return {
		type: COLORS_TO_STRING
	}
}


exports.LOGIN_SUCCESS = LOGIN_SUCCESS;
exports.loginSuccess = loginSuccess;
exports.LOGIN_ERROR = LOGIN_ERROR;
exports.loginError = loginError;
exports.login = login;
exports.LOGIN_USERNAME = LOGIN_USERNAME;
exports.loginUsername = loginUsername;
exports.LOGIN_PASSWORD = LOGIN_PASSWORD;
exports.loginPassword = loginPassword;
exports.LOGOUT = LOGOUT;
exports.logout = logout;
exports.NEW_USERNAME = NEW_USERNAME;
exports.newUsername = newUsername;
exports.NEW_PASSWORD = NEW_PASSWORD;
exports.newPassword = newPassword;
exports.CONFIRMED_PASSWORD = CONFIRMED_PASSWORD;
exports.confirmedPassword = confirmedPassword;
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
exports.GET_DECKLIST_SUCCESS = GET_DECKLIST_SUCCESS;
exports.getDecklistSuccess = getDecklistSuccess;
exports.GET_DECKLIST_ERROR = GET_DECKLIST_ERROR;
exports.getDecklistError = getDecklistError;
exports.getDecklist = getDecklist;
exports.DECK_NAME = DECK_NAME;
exports.deckName = deckName;
exports.DECK_FORMAT = DECK_FORMAT;
exports.deckFormat = deckFormat;
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
exports.SELECT_DECK = SELECT_DECK;
exports.selectDeck = selectDeck;
exports.UPDATE_DECKLIST = UPDATE_DECKLIST;
exports.updateDecklist = updateDecklist;
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
exports.NAME_FILTER = NAME_FILTER;
exports.nameFilter = nameFilter;
exports.CMC_FILTER = CMC_FILTER;
exports.TYPE_FILTER = TYPE_FILTER;
exports.typeFilter = typeFilter;
exports.RARITY_FILTER = RARITY_FILTER;
exports.rarityFilter = rarityFilter;
exports.COLOR_FILTER = COLOR_FILTER;
exports.colorFilter = colorFilter;
exports.REMOVE_COLOR_FILTER = REMOVE_COLOR_FILTER;
exports.removeColorFilter = removeColorFilter;
exports.COLORS_TO_STRING = COLORS_TO_STRING;
exports.colorsToString = colorsToString;
exports.CARD_SEARCH_SUCCESS = CARD_SEARCH_SUCCESS;
exports.cardSearchSuccess = cardSearchSuccess;
exports.CARD_SEARCH_ERROR = CARD_SEARCH_ERROR;
exports.cardSearchError = cardSearchError;
exports.cardSearch = cardSearch;
