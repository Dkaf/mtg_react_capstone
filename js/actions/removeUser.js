import { removeUserTypes } from './actionTypes';

//Remove a user
export function removeUserSuccess (user) {
	return {
		type: removeUserTypes.REMOVE_USER_SUCCESS,
		user
	}
};

export function removeUserError (err) {
	return {
		type: removeUserTypes.REMOVE_USER_ERROR,
		err
	}
};

// export function removeUser (username) {
// 	return (dispatch) => {

// 	}
// };