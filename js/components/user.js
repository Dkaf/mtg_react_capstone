const React = require('react');
const ReactDOM = require('react-dom');

const DeckList = require('./deck_list');
const AddDeck = require('./add_deck');

class User extends React.Component {
	render() {
		return (
			<div>
				<DeckList />
				<AddDeck />
			</div>
		);
	}
};

module.exports = User;
