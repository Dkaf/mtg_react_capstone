import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import store from '../../store';
import { addCard } from '../../actions/card';
import { updateDecklist } from '../../actions/decklist';
import Button from './../stateless/Button';
import { connect } from 'react-redux';

export class AddCard extends Component {
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
			Promise.resolve(store.dispatch(updateDecklist(this.props.card))).then( () => {
				return store.dispatch(addCard(this.props.selectedDeck.name, this.props.selectedDeck.cards, this.props.user, this.props.password))
			})
		}
	}

	render() {
		return(
			<Button text="add card" className="cardEdit" type="button" onClick={this.clickHandler} card={this.props.card} />
		)
	}
}

let mapStateToProps = (state, props) => {
	return {
		selectedDeck: state.selectedDeck,
		user: state.user,
		password: state.password
	}
}

export default connect(mapStateToProps)(AddCard);