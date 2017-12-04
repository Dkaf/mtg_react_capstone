require('isomorphic-fetch');
import { cardTypes } from './actionTypes';
import { getDecklist } from './decklist';

//Add card to deck
export function addCardSuccess (deckName, cards) {
	return {
		type: cardTypes.ADD_CARD_SUCCESS,
		deckName,
		cards
	}
};

export function addCardError (err) {
	return {
		type: cardTypes.ADD_CARD_ERROR,
		err
	}
};

export function addCard (deckName, cards, user, password) {
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
		return fetch(request)
		.then( (response) => {
			return response.json()
		})
		.then( (data) => {
			return dispatch(
				addCardSuccess(deckName, cards),
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

//Remove card from deck
export function removeCardSuccess (deckName, card) {
	return {
		type: cardTypes.REMOVE_CARD_SUCCESS,
		deckName,
		card
	}
};

export function removeCardError (err) {
	return {
		type: cardTypes.REMOVE_CARD_ERROR,
		err
	}
};

export function removeCard (deckName, cards, user, password) {
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
		return fetch(request)
		.then( (response) => {
			return response.json()
		})
		.then( (data) => {
			return dispatch(
				removeCardSuccess(data.deck.name, data.deck.cards)
			)
		})
		.catch( (err) => {
			return dispatch(
				removeCardError(err)
			)
		})
	}
};

//Search for a card
export function cardSearchSuccess (cards) {
	return {
		type: cardTypes.CARD_SEARCH_SUCCESS,
		cards
	}
};

export function cardSearchError (err) {
	return {
		type: cardTypes.CARD_SEARCH_ERROR,
		err
	}
};

export function cardSearch (filters) {
	return(dispatch) => {
		if(filters.colors) {
			filters.colors = filters.colors.toString();
		}
		let query = '';
		Object.keys(filters).forEach((key) => {query = query + (query.length==0?'?':'&') + key + '=' + filters[key]})
		const request = new Request ('https://still-island-83205.herokuapp.com/cards/' + query, {
			headers: {
				'Content-Type': 'Application/json'
			},
			method: 'GET'
		});
		return fetch(request)
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

//Page forward
export function pageForward () {
	return {
		type: cardTypes.PAGE_FORWARD
	}
}

//Page back
export function pageBack () {
	return {
		type: cardTypes.PAGE_BACK
	}
}