export const initialState = {
	isLoggedIn: false,
	deckList: [
		{
			deckName: '',
			format: '',
			cards:[]
		}
	],
	filters: {
		colors: []
	},
	cardSearchResults: [],
	selectedDeck: {deckName:'', cards:[{}]},
	deckIsActive: false,
	page: 0,
	pageSize: 10
};