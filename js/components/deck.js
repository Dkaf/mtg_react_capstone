const React = require('react');
const ReactDOM = require('react-dom');

const RemoveDeck = require('./remove_deck');


class Deck extends React.Component {
	render() {
		return (
			<div>
				<h2 className="deckName">{this.props.deckName}</h2>
				<ul className="cardList">{this.props.cards}</ul>
				<RemoveDeck deckName={this.props.deckName} />
			</div>
		);
	}
}

module.exports = Deck;
