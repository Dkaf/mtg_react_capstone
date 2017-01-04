const React = require('react');
const ReactDOM = require('react-dom');

const store = require('../store');
const actions = require('../actions/index');
const Input = require('./input');

class Greeting extends React.Component{
	let isLoggedin = store.getState().isLoggedIn;
	if (isLoggedIn) {
		return(
			<h2>Welcome {store.getState().user}</h2>
		)
	}
	else {
		return (
			<div id="login"><a href="#" onClick={this.login} id="loginLink">Login</a></div>
			<Input className="loginInput" placeholder="username" type="search" onChange={this.usernameHandler} />
			<Input className="loginInput" placeholder="password" type="password" onChange={this.passwordHandler} />
		)
	}
}

module.exports = Greeting;
