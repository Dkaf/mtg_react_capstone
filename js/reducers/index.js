const Actions = require('../actions/index');

let initialState = {
	users: [],
	deckList: [
		{
			deckName: '',
			format: '',
			cardList:[]
		}
	],
	filters: {
		colors: []
	}
};


const mainReducer = (state = initialState ,action) => {

	switch (action.type) {

		case Actions.LOGIN_SUCCESS:
			console.log(action.token);
			return Object.assign({}, state, {
				token: action.token
			})

		case Actions.LOGOUT:
			return Object.assign({}, state, {
				token: ''
			})

		case Actions.ADD_USER_SUCCESS:
			return Object.assign({}, state, {
				users: state.users.push(action.username),
				password: action.password
			})

		case Actions.REMOVE_USER_SUCCESS:
			return Object.assign({}, state, {
				users: state.users.splice(state.users.indexOf(action.user), 1)
			})


		case Actions.ADD_DECK_SUCCESS:
			//Add deck format
			return Object.assign({}, state, {
				deckList: state.deckList.concat({deckName:action.deckName, format:action.format, cardList: []})
			})

		case Actions.ADD_DECK_ERROR:
			return console.log(action.error);

		case Actions.REMOVE_DECK_SUCCESS:
			return Object.assign({}, state, {
				//Filter
				deckList: state.deckList.filter((deck) => {
					return deck.deckName != action.deckName
				})
				// deckList: state.deckList.splice(state.deckList.indexOf(Actions.deckName), 1)
			})

		case Actions.ADD_CARD_SUCCESS:
			let deck = state.deckList.find( (deck) => {
				return deck.deckName == action.deckName
			})
			deck.cardList.push(action.card)
			return Object.assign({}, state, {
				deckList: state.deckList
			})

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
			console.log(state.filters)
			return Object.assign({}, state, {
				filters: {colors: state.filters.colors.concat(action.color)}
			})

		case Actions.REMOVE_COLOR_FILTER:
			return Object.assign({}, state, {
				filters: {colors: state.filters.colors.splice(state.filters.colors.indexOf(action.color), 1)}
			})

		case Actions.COLORS_TO_STRING:
			if(state.filters.hasOwnProperty('colors')) {
				return Object.assign({}, state, {
					filters: state.filters.colors.toString()
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
			return Object.assign({}, state, {
				cardSearchResults: action.cards
			})
			console.log(state.cardSearchResults);

		default:
			return state

	}

};

exports.mainReducer = mainReducer;
