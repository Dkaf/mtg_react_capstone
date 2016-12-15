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
				deckList: state.deckList.filter((deck) => {
					return deck.deckName != Actions.deckName
				})
				// deckList: state.deckList.splice(state.deckList.indexOf(Actions.deckName), 1)
			})

		case Actions.addCardSuccess:
			let deck = state.deckList.find( (deck) => {
				return deck.deckName == Actions.deckName
			})
			deck.cardList.push(Actions.card)
			return Object.assign({}, state, {
				deckList: state.deckList
			})

		case Actions.removeCardSuccess:
			//Find deck
			let cardIndex = state.deckList[deckIndex].indexOf(Actions.card)
			return Object.assign({}, state, {
				deckList: state.deckList[deckIndex].splice(cardIndex, 1)
			})

		case Actions.addFilters:
			return Object.assign({}, state, {
				filters: Actions.filters
			})

		case Actions.deckName:
			return Object.assign({}, state, {
				deckName: Actions.deckName
			})

		case Actions.deckFormat:
			return Object.assign({}, state, {
				deckFormat: Actions.deckFormat
			})

		case Actions.cardSearchSuccess:
			return Object.assign({}, state, {
				cardSearchResults: Actions.cards
			})

		default:
			return state

	}

};

exports.mainReducer = mainReducer;
