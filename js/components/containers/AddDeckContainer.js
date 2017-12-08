import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../store';
import Actions from '../actions/index';
import { connect } from 'react-redux';
import AddDeck from './../stateless/AddDeck';
export class AddDeckContainer extends Component {
	constructor(props) {
  	super(props);
		this.submitHandler = this.submitHandler.bind(this);
		this.nameInputHandler = this.nameInputHandler.bind(this);
		this.formatInputHandler = this.formatInputHandler.bind(this);
	}

	submitHandler(e) {
		e.preventDefault();
		console.log(store.getState())
		this.props.dispatch(Actions.addDeck(store.getState().deckName, store.getState().deckFormat, store.getState().user, store.getState().password))
		e.target.reset();
	}

	nameInputHandler(e) {
		this.props.dispatch(Actions.deckName(e.target.value))
	}

	formatInputHandler(e) {
		this.props.dispatch(Actions.deckFormat(e.target.value))
	}

	//Input handler
		render() {
			if (this.props.isLoggedIn){
			return (
					<AddDeck onChange={this.onChange}
						nameInputHandler={this.nameInputHandler}
						formatInputHandler={this.formatInputHandler}
					/>
			);
		}
		else {
			return null
		}
	}
};

let mapStateToProps = (state, props) => {
	return {
		isLoggedIn: state.isLoggedIn
	}
};

const Container = connect(mapStateToProps)(AddDeckContainer);

export default Container
