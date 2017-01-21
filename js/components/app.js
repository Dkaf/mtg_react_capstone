const React = require('react');
const ReactDOM = require('react-dom');

const Header = require('./header');
const User = require('./user');
const AddUser = require('./add_user');
const Search = require('./search')
const Footer = require('./footer')
const actions = require('../actions/index');
const store = require('../store')

class App extends React.Component {
	constructor(){
		super();
	}

	// componenentDidMount: () => {
	// 	let node = react.findDOMNode(this);
	// }


	render() {
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
}


module.exports = App;
