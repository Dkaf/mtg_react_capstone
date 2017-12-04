import { newUserTypes } from './actionTypes';
require('isomorphic-fetch');
//New username into state
export function newUsername (username) {
	return {
		type: newUserTypes.NEW_USERNAME,
		username: username
	}
}

//New password into state
export function newPassword (password) {
	return {
		type: newUserTypes.NEW_PASSWORD,
		password: password
	}
}

//Confirmed password
export function confirmedPassword (password) {
	return {
		type: newUserTypes.CONFIRMED_PASSWORD,
		password: password
	}
}

//Add a user
export function addUserSuccess (username) {
	return {
		type: newUserTypes.ADD_USER_SUCCESS,
		username
	}
}

export function addUserError (err) {
	return {
		type: newUserTypes.ADD_USER_ERROR,
		err
	}
}

export function addUser (username, password) {
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
		return fetch(request)
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