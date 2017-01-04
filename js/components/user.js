const React = require('react');
const ReactDOM = require('react-dom');

const store = require('../store');
const actions = require('../actions/index');
const DeckList = require('./deck_list');
const AddDeck = require('./add_deck');
const Search = require('./search');

class User extends React.Component {

	render() {
		return (
			<div>
				<DeckList />
				<AddDeck />
				<Search />
			</div>
		);
	}
};

module.exports = User;
