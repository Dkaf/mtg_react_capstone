import { decklistTypes } from './actionTypes';
require('isomorphic-fetch');

//Get decklist from database
export function getDecklistSuccess (decks) {
	return {
		type: decklistTypes.GET_DECKLIST_SUCCESS,
		decks
	}
};

export function getDecklistError (err) {
	return {
		type: decklistTypes.GET_DECKLIST_ERROR,
		err
	}
};

export function getDecklist (user) {
	return dispatch => {
		const request = new Request('https://still-island-83205.herokuapp.com/decks/' + user, {
			method: 'GET',
			headers: {
				'Content-Type': 'Application/json'
			}
		});
		return fetch(request)
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

//Update decklist before updating in database
export function updateDecklist (card) {
	return {
		type: decklistTypes.UPDATE_DECKLIST,
		card
	}
}