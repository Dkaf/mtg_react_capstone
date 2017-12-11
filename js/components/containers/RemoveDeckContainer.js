import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../../store';
import { removeDeck } from '../../actions/deck';

import Button from './../stateless/Button/Button';

class RemoveDeckContainer extends Component {
	constructor(props) {
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e) {
		e.preventDefault();
		store.dispatch(removeDeck(this.props.deckName));
	}

	render() {
		return (
				<Button className={this.props.className} text="remove deck" deckName={this.props.deckName} onClick={this.clickHandler} type="submit"/>
		);
	}
}

export default RemoveDeckContainer;
