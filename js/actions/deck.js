import { deckTypes } from './actionTypes';

//Update new deck name in state
export function deckName (deckName) {
	return {
		type: deckTypes.DECK_NAME,
		deckName
	}
}

//Update new deck format in state
export function deckFormat (format) {
	return {
		type: deckTypes.DECK_FORMAT,
		format
	}
}

export function deckIsActive () {
	return {
		type: deckTypes.DECK_IS_ACTIVE
	}
}

//Add a deck
export function addDeckSuccess (deckName, format) {
	return {
		type: deckTypes.ADD_DECK_SUCCESS,
		deckName,
		format
	}
};

export function addDeckError (err) {
	return {
		type: deckTypes.ADD_DECK_ERROR,
		err
	}
};

export function addDeck (deckName, deckFormat, user, password) {
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
		return fetch(request)
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
export function removeDeckSuccess (deckName) {
	return {
		type: deckTypes.REMOVE_DECK_SUCCESS,
		deckName
	}
};

export function removeDeckError (err) {
	return {
		type: deckTypes.REMOVE_DECK_ERROR,
		err
	}
};

export function removeDeck (deckName) {
	return (dispatch) => {
		const request = new Request('https://still-island-83205.herokuapp.com/user/deck/' + deckName, {
			method: 'DELETE',
			headers:{
				'Content-Type': 'Application/json'
			}
		})
		return fetch(request)
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

//Search for a deck
export function deckSearchSuccess (deckName) {
	return {
		type: deckTypes.DECK_SEARCH_SUCCESS,
		deckName
	}
};

export function deckSearchError (err) {
	return {
		type: deckTypes.DECK_SEARCH_ERROR,
		err
	}
};

export function deckSearch (deckName) {
	return (dispatch) => {
		const request = new Request('https://still-island-83205.herokuapp.com/deck/' + deckName , {
			method: 'GET',
			headers:{
				'Content-Type': 'Application/json'
			}
		})
		return fetch(request)
		.then( (response) => {
			return response.json()
		})
		.then( (data) => {
			return dispatch (
				deckSearchSuccess(data.deck)
			)
		})
		.catch( (err) => {
			return dispatch (
				deckSearchError(err)
			)
		})
	}
};

//Select deck
export function selectDeck (deckName) {
	return {
		type: deckTypes.SELECT_DECK,
		deckName
	}
}

//Update decklist with removed card
export function updateDeck (deckName, cards, cardToRemove) {
	return {
		type: deckTypes.UPDATE_DECK,
		deckName,
		cards,
		cardToRemove
	}
}