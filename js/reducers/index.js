const Actions = require('../actions/index');

let initialState = {
	deckList: [
		{
			deckName: '',
			format: '',
			cardList:[]
		}
	],
	filters: {
		colors: []
	},
	cardSearchResults: []
};


const mainReducer = (state = initialState ,action) => {

	switch (action.type) {

		case Actions.LOGIN_SUCCESS:
			return Object.assign({}, state, {
				user: action.user
			})

		case Actions.LOGIN_ERROR:
			console.log(action.error)

		case Actions.LOGIN_USERNAME:
			return Object.assign({}, state, {
				user: action.username
			})

		case Actions.LOGIN_PASSWORD:
			return Object.assign({}, state, {
				password: action.password
			})

		case Actions.LOGOUT:
			return Object.assign({}, state, {
				token: ''
			})

		case Actions.NEW_USERNAME:
			return Object.assign({}, state, {
				newUsername: action.username
		 })

		case Actions.NEW_PASSWORD:
			return Object.assign({}, state, {
				newPassword: action.password
			})

		case Actions.CONFIRMED_PASSWORD:
			return Object.assign({}, state, {
				confirmedPassword: action.password
			})

		case Actions.ADD_USER_SUCCESS:
			return Object.assign({}, state, {
				user: action.username
			})

		case Actions.ADD_USER_ERROR:
			console.log(action.error)

		case Actions.REMOVE_USER_SUCCESS:
			return Object.assign({}, state, {
				users: state.users.splice(state.users.indexOf(action.user), 1)
			})

		case Actions.GET_DECKLIST_SUCCESS:
			return Object.assign({}, state, {
				deckList: action.decks
			})

		case Actions.GET_DECKLIST_ERROR:
			console.log(action.error)


		case Actions.ADD_DECK_SUCCESS:
			console.log(state);
			return Object.assign({}, state, {
				deckList: state.deckList.concat({name:action.deckName, format:action.deckFormat, cardList: []})
			})

		case Actions.ADD_DECK_ERROR:
			return console.log(action.error);

		case Actions.REMOVE_DECK_SUCCESS:
			return Object.assign({}, state, {
				//Filter
				deckList: state.deckList.filter((deck) => {
					return deck.name != action.deckName
				})
				// deckList: state.deckList.splice(state.deckList.indexOf(Actions.deckName), 1)
			})

		case Actions.REMOVE_DECK_ERROR:
			return console.log(action.error)

		case Actions.SELECT_DECK:
			return Object.assign({}, state, {
				selectedDeck: action.deckName
			})

		case Actions.ADD_CARD_SUCCESS:
			let deck = state.deckList.find( (deck) => {
				return deck.deckName == action.deckName
			})
			deck.cardList.concat(action.card)
			return Object.assign({}, state, {
				deckList: state.deckList
			})

		case Actions.ADD_CARD_ERROR:
			console.log(action.error)

		case Actions.REMOVE_CARD_SUCCESS:
			//Find deck
			let cardIndex = state.deckList[deckIndex].indexOf(action.card)
			return Object.assign({}, state, {
				deckList: state.deckList[deckIndex].splice(cardIndex, 1)
			})

		case Actions.NAME_FILTER:
			console.log(state.filters);
			return Object.assign({}, state, {
				filters: {name: action.name}
			})

		case Actions.CMC_FILTER:
			return Object.assign({}, state, {
				filters: {cmc: action.cmc}
			})

		case Actions.TYPE_FILTER:
			return Object.assign({}, state, {
				filters: {type: action.typeOption}
			})

		case Actions.RARITY_FILTER:
			return Object.assign({}, state, {
				filters: {rarity: action.rarity}
			})

		case Actions.COLOR_FILTER:
			return Object.assign({}, state, {
				filters: {colors: state.filters.colors.concat(action.color)}
			})

		case Actions.REMOVE_COLOR_FILTER:
			state.filters.colors.splice(state.filters.colors.indexOf(action.color), 1);
			return Object.assign({}, state, {
				filters: {colors: state.filters.colors}
			})

		case Actions.COLORS_TO_STRING:
			if(state.filters.hasOwnProperty('colors')) {
				return Object.assign({}, state, {
					filters: {colors: state.filters.colors.toString()}
				})
			}


		case Actions.DECK_NAME:
			return Object.assign({}, state, {
				deckName: action.name
			})

		case Actions.DECK_FORMAT:
			return Object.assign({}, state, {
				deckFormat: action.format
			})

		case Actions.CARD_SEARCH_SUCCESS:
			console.log(action.cards)
			return Object.assign({}, state, {
				cardSearchResults: action.cards
			})

		case Actions.CARD_SEARCH_ERROR:
			return console.log(action.error);

		default:
			return state

	}

};

exports.mainReducer = mainReducer;
