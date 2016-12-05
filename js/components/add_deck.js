const React = require('react');
const ReactDOM = require('react-dom');
const store = require('../store')

class AddDeck extends React.Component {

	submitHandler() {
		store.dispatch(actions.addDeck(this.input.value))
	}

	render() {
		return (
			<div>
				<h2>Name your new deck</h2>
				<form onSubmit={this.submitHandler}>
					<Input className="deckName" placeholder="Name" />
					<Button className="addDeck" type="submit" text="Add" />
				</form>
			</div>
		);
	}
};

module.exports = AddDeck;
