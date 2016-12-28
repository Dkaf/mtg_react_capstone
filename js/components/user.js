const React = require('react');
const ReactDOM = require('react-dom');

const DeckList = require('./deck_list');
const AddDeck = require('./add_deck');
const Search = require('./search');

class User extends React.Component {
	render() {
		return (
			<div>
				<AddDeck />
				<Search />
			</div>
		);
	}
};

module.exports = User;
