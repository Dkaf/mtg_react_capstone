const React = require('react');
const ReactDOM = require('react-dom');
const router = require('react-router');
const Link = router.Link;
const store = require('../store');
const actions = require('../actions/index')
const connect = require('react-redux').connect

const Input = require('./input');

class Header extends React.Component {
	constructor() {
  		super();
	}

	usernameHandler(e) {
		store.dispatch(actions.loginUsername(e.target.value));
	}

	passwordHandler(e) {
		store.dispatch(actions.loginPassword(e.target.value));
	}

	login() {
		store.dispatch(actions.getDecklist())
	}

	render() {
		return (
			<div id="headerDiv">
				<img src="../css/banner.png" id="mainBanner"></img>
				<div id="login"><a href="#" onClick={this.login} id="loginLink">Login</a></div>
				<Input className="loginInput" placeholder="username" type="search" onChange={this.usernameHandler} />
				<Input className="loginInput" placeholder="password" type="password" onChange={this.passwordHandler} />
				<div id="signUp"><a href="#" id="signUpLink">Sign Up</a></div>
			</div>
		);
	}
}

const Container = connect()(Header)

module.exports = Header;
