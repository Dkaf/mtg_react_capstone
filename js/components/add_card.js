const React = require('react')
const ReactDOM = require('react-dom');

const store = require('../store');
const actions = require('../actions/index');
const Button = require('./button');

class AddCard extends React.Component {
	constructor(props) {
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e) {
		e.preventDefault();
		if(!store.getState().isLoggedIn){
			alert('Please login or sign up to add cards');
		} else if(!store.getState().selectedDeck) {
			alert('Please select a deck to add cards');
		} else {
			store.dispatch(actions.updateDecklist(store.getState().selectedDeck, this.props.card))
			store.dispatch(actions.addCard(store.getState().selectedDeck.deckName, store.getState().selectedDeck.cardList, store.getState().user, store.getState().password))
			console.log(store.getState())
		}
	}

	render() {
		return(
			<Button text="add card" className="cardEdit" type="button" onClick={this.clickHandler} card={this.props.card} />
		)
	}
}

module.exports = AddCard;
