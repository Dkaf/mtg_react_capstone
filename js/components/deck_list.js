const React = require('react');
const ReactDOM = require('react-dom');
const connect = require('react-redux').connect;

const Deck = require('./deck');


class DeckList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let decks = this.props.decks.map( (deck)=> {
			return (
				<Deck deckName={deck.deckName} />
			)
		});

		return (
			<div>
				<ul>
					{decks}
				</ul>
			</div>
		);
	}
};

let mapStateToProps = (state, props) => {
	return {
		decks: state.deckList
	}
};

const Container = connect(mapStateToProps)(DeckList)

module.exports = Container;
