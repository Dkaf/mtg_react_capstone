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
	}

	render() {
		return (
			<div>
				<h3 className="deckName" onClick={this.clickHandler}>{this.props.deckName}</h3>
				<RemoveDeck deckName={this.props.deckName} />
				<span className="deckFormat">{this.props.deckFormat}</span>
				<ul className="cardList" >{this.props.cards}</ul>
			</div>
		);
	}
}

module.exports = Deck;
