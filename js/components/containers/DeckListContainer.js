import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import DeckList from './../stateless/DeckList';

export class DeckListContainer extends Component {
	constructor(props) {
		super(props);
	}
		render() {
			if(this.props.isLoggedIn) {
				return (
					<DeckList decks={this.props.decks} selectedDeck={this.props.selectedDeck}/>
				);
		} else {
			return null
		}
	}
};

let mapStateToProps = (state, props) => {
	return {
		decks: state.deckList,
		selectedDeck: state.selectedDeck.name,
		isLoggedIn: state.isLoggedIn,
		numberCards: state.selectedDeck.cards
	}
};

const Container = connect(mapStateToProps)(DeckListContainer)

export default Container;
