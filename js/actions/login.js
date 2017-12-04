require('isomorphic-fetch');
import { loginTypes } from './actionTypes';
import { getDecklist } from './decklist'


export function loginSuccess (username, password) {
	return {
		type: loginTypes.LOGIN_SUCCESS,
		username,
		password
	}
}


export function loginError (err) {
	return {
		type: loginTypes.LOGIN_ERROR,
		err
	}
}

export function login (username, password) {
	return (dispatch) => {
		const request = new Request('https://still-island-83205.herokuapp.com/login', {
			method: 'POST',
			headers: {
				'Authorization': 'Basic ' + window.btoa(username + ':' + password),
				'Content-Type': 'Application/json'
			},
			body: {}

		})
		return fetch(request)
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
export function loginUsername (username) {
	return {
		type: loginTypes.LOGIN_USERNAME,
		username
	}
}

//put password into state
export function loginPassword (password) {
	return {
		type: loginTypes.LOGIN_PASSWORD,
		password
	}
}

export function logout () {
	return {
		type: loginTypes.LOGOUT
	}
}