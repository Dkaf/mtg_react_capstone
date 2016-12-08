const Actions = require('../actions/index');

const initialState = [];

const mainReducer = (state = initialState ,action) => {
	switch (action) {

		case Actions.addUser:
			return Object.assign({}, state, {
				user: user,
				password: password
			})


		case Actions.removeUser:

	}

};

exports.mainReducer = mainReducer;
