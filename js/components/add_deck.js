const React = require('react');
const ReactDOM = require('react-dom');
const store = require('../store')

const Input = require('./input');
const Button = require('./button');

class AddDeck extends React.Component {

	submitHandler() {
		store.dispatch(actions.addDeck(store.getState().deckName, store.getState().deckFormat))
	}

	nameInputHandler(e) {
		store.dispatch(actions.deckName(e.target.value))
	}

	formatInputHandler(e) {
		store.dispatch(actions.deckFormat(e.target.value))
	}

	//Input handler

	render() {
		return (
			<div>
				<h2>Name your new deck</h2>
				<form onSubmit={this.submitHandler}>
					<Input className="deckInput" id="deckName" onChange={this.nameInputHandler} placeholder="Name" />
					<Input className="deckInput" id="deckFormat" onChange={this.formatInputHandler} placeholder="Format" />
					<Button className="addDeck" type="submit" text="Add" />
				</form>
			</div>
		);
	}
};

module.exports = AddDeck;
