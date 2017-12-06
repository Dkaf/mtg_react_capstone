import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import store from '../store';
import Actions from '../actions/index';
import { connect } from 'react-redux';

import Card from './../stateless/Card';
export class CardContainer extends Component {
	constructor(props) {
		super(props)
		this.removeCard = this.removeCard.bind(this);
	}

	removeCard(e) {
		e.preventDefault();
		Promise.resolve(store.dispatch(actions.updateDeck(this.props.deck, this.props.fullCardlist, this.props.name))).then( () => {
			return store.dispatch(actions.removeCard(this.props.editedDeck.name, this.props.editedDeck.cards, this.props.user, this.props.password))
		})
	}


	render() {
		return (
			<Card name={this.props.name}
				imageUrl={this.props.image}
				onClick={this.removeCard}
			/>
		)
	}
};

let mapStateToProps = (state, props) => {
	return {
		user: state.user,
		password: state.password,
		deckList: state.deckList,
		editedDeck: state.editedDeck
	}
}

let Container = connect(mapStateToProps)(Card);

export default Container;
