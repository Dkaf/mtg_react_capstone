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
		name: '',
		type: '',
		rarity: '',
		colors: ''
	}
};


const mainReducer = (state = initialState ,action) => {

	switch (action.type) {

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
				filters: state.filters.colors.concat(action.color)
			})

		case Actions.REMOVE_COLOR_FILTER:
			return Object.assign({}, state, {
				filters: state.filters.colors.splice(state.filters.colors.indexOf(action.color), 1)
			})

		case Actions.DECK_NAME:
			return Object.assign({}, state, {
				deckName: action.deckName
			})

		case Actions.DECK_FORMAT:
			return Object.assign({}, state, {
				deckFormat: action.deckFormat
			})

		case Actions.CARD_SEARCH_SUCCESS:
			return Object.assign({}, state, {
				cardSearchResults: action.cards
			})

		default:
			return state

	}

};

exports.mainReducer = mainReducer;
