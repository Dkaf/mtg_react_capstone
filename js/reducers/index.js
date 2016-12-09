const Actions = require('../actions/index');

let initialState = {
	users: [],
	deckList: [
		{
			deckName: '',
			format: '',
			cardList:[]
		}
	]
};


const mainReducer = (state = initialState ,action) => {

	let deckIndex = state.deckList.indexOf(Actions.deckName);

	switch (action) {

		case Actions.addUserSuccess:
			return Object.assign({}, state, {
				users: state.users.push(Actions.user),
				password: Actions.password
			})

		case Actions.removeUserSuccess:
			return Object.assign({}, state, {
				users: state.users.splice(state.users.indexOf(Actions.user), 1)
			})


		case Actions.addDeckSuccess:
			//Add deck format
			return Object.assign({}, state, {
				deckList: state.deckList.concat({deckName:Actions.deckName, format:Actions.format, cardList: []})
			})

		case Actions.removeDeckSuccess:
			return Object.assign({}, state, {
				//Filter
				deckList: state.deckList.splice(state.deckList.indexOf(Actions.deckName), 1)
			})

		case Actions.addCardSuccess:
			return Object.assign({}, state, {
				deckList: state.deckList[deckIndex].push(Actions.card)
			})

		case Actions.removeCardSuccess:
			let cardIndex = state.deckList[deckIndex].indexOf(Actions.card)
			return Object.assign({}, state, {
				deckList: state.deckList[deckIndex].splice(cardIndex, 1)
			})

	}

};

exports.mainReducer = mainReducer;
