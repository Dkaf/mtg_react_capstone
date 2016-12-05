
//Add a user
const ADD_USER = 'ADD_USER';
const addUser = (user) => {
	return {
		type: ADD_USER,
		user: user
	}
}

//Remove a user
const REMOVE_USER = 'REMOVE_USER';
const removeUser = (user) => {
	return {
		type: REMOVE_USER,
		user: user
	}
};

//Add a deck
const ADD_DECK = 'ADD_DECK'
const addDeck = (deck) => {
	return {
		type: ADD_DECK,
		deck: deck
	}
};

//Remove a Deck
const REMOVE_DECK = 'REMOVE_DECK';
const removeDeck = (deck) => {
	return {
		type: REMOVE_DECK,
		deck: deck
	}
};

//Add card to deck
const ADD_CARD = 'ADD_CARD';
const addCard = (card) => {
	return {
		type: ADD_CARD,
		card: card
	}
};

//Remove card from deck
const REMOVE_CARD = 'REMOVE_CARD';
const removeCard = (card) => {
	return {
		type: REMOVE_CARD,
		card: card
	}
};

exports.ADD_USER = ADD_USER;
exports.addUser = addUser;
exports.REMOVE_USER = REMOVE_USER;
exports.removeUser = removeUser;
exports.ADD_DECK = ADD_DECK;
exports.addDeck = addDeck;
exports.REMOVE_DECK = REMOVE_DECK;
exports.removeDeck = removeDeck;
exports.ADD_CARD = ADD_CARD;
exports.addCard = addCard;
exports.REMOVE_CARD = REMOVE_CARD;
exports.removeCard = removeCard;
