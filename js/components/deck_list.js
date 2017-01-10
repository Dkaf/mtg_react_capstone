const React = require('react');
const ReactDOM = require('react-dom');
const connect = require('react-redux').connect;

const Deck = require('./deck');


class DeckList extends React.Component {
	constructor(props) {
		super(props);
	}
		render() {
			if(this.props.isLoggedIn) {
				let decks = this.props.decks.map( (deck)=> {
					return (
						<Deck deckName={deck.name} deckFormat={deck.format} cards={deck.cards}/>
					)
				});

				return (
					<div id="deckListDiv">
						<h2>Deck List</h2>
						<h3>Selected Deck: {this.props.selectedDeck}</h3>
						<ul>
							{decks}
						</ul>
					</div>
				);
		} else {
			return null
		}
	}
};

let mapStateToProps = (state, props) => {
	return {
		decks: state.deckList,
		selectedDeck: state.selectedDeck.deckName,
		isLoggedIn: state.isLoggedIn
	}
};

const Container = connect(mapStateToProps)(DeckList)

module.exports = Container;
