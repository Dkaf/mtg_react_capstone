const React = require('react');
const ReactDOM = require('react-dom');
const store = require('../store');
const actions = require('../actions/index');

const Button = require('./button');

class RemoveDeck extends React.Component {
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

module.exports = RemoveDeck;
