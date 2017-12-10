const React = require('react');
const ReactDOM = require('react-dom');

const Header = require('./header');
const User = require('./user');
const AddUser = require('./add_user');
const Search = require('./search')
const Footer = require('./footer')
const actions = require('../actions/index');
const store = require('../store')

const App = () => {
	return (
		<div>
			<Header />
			<AddUser />
			<User />
			<Search />
			<Footer />
		</div>
	);
}


module.exports = App;
