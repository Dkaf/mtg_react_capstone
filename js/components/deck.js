const React = require('react');
const ReactDOM = require('react-dom');


class Deck extends React.Component {
	render() {
		return (
			<div>
				<h2 className="deckTitle">{this.props.deckTitle}</h2>
				<ul className="cardList">{this.props.cards}</ul>
			</div>
		);
	}
}

module.exports = Deck;
