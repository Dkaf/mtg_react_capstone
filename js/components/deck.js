const React = require('react');
const ReactDOM = require('react-dom');

const store = require('../store');
const actions = require('../actions/index');
const RemoveDeck = require('./remove_deck');


class Deck extends React.Component {
	constructor(props){
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		store.dispatch(actions.selectDeck(this.props.deckName));
		console.log(store.getState())
	}

	render() {
		return (
			<div>
				<h3 className="deckName" onClick={this.clickHandler}>{this.props.deckName}</h3>
				<span className="deckFormat">Format: {this.props.deckFormat}</span>
				<ul className="cardList" >{this.props.cards}</ul>
				<RemoveDeck deckName={this.props.deckName} />
			</div>
		);
	}
}

module.exports = Deck;
