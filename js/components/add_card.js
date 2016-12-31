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
		store.dispatch(actions.addCard(store.getState().selectedDeck, this.props.card))
		console.log(store.getState())
	}

	render() {
		return(
			<Button text="add card" className="cardEdit" type="button" onClick={this.clickHandler} card={this.props.card} />
		)
	}
}

module.exports = AddCard;
