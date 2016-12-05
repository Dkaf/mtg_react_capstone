const React = require('react');
const ReactDOM = require('react-dom');
const store = require('../store');

class RemoveDeck extends React.Component {

	submitHandler() {
		store.dispatch(actions.RemoveDeck());
	}

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<Button text="remove deck" />
			</form>
		);
	}
}

module.exports = RemoveDeck;
