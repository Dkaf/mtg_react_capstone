const React = require('react');
const ReactDOM = require('react-dom');
const store = require('../store');

const Button = require('./button');

class RemoveDeck extends React.Component {

	submitHandler() {
		store.dispatch(actions.RemoveDeck(this.props.deckName));
	}

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<Button text="remove deck" deckName={this.props.deckName}/>
			</form>
		);
	}
}

module.exports = RemoveDeck;
