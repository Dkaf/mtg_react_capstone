import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../store';
import actions from '../actions/index';

import Button from './../stateless/Button';

class RemoveDeck extends Component {
	constructor(props) {
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e) {
		e.preventDefault();
		store.dispatch(actions.removeDeck(this.props.deckName));
	}

	render() {
		return (
				<Button className={this.props.className} text="remove deck" deckName={this.props.deckName} onClick={this.clickHandler}/>
		);
	}
}

export default RemoveDeck;
