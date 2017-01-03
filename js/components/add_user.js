const React = require('react');
const ReactDOM = require('react-dom');
const store = require('../store');
const actions = require('../actions/index')

const Input = require('./input');
const Button = require('./button')

class AddUser extends React.Component {
	constructor(props){
		super(props);
	}

	newUsername(e) {
		store.dispatch(actions.newUsername(e.target.value));
	}

	newPassword(e) {
		store.dispatch(actions.newPassword(e.target.value));
		console.log(store.getState())
	}

	confirmPassword(e) {
		store.dispatch(actions.confirmedPassword(e.target.value))
	}

	submitHandler(e) {
		e.preventDefault();
		if (store.getState().newPassword =! store.getState().confirmedPassword) {
			alert("Passwords do not match");
		}

		else {
			store.dispatch(actions.addUser(store.getState().newUsername, store.getState().confirmedPassword));
		}
	}

	render() {
		return (
			<div>
				<h2>Enter a username and Password</h2>
				<form onSubmit={this.submitHandler}>
					<Input className="addUserInput" placeholder="username" type="search" onChange={this.newUsername} />
					<Input className="addUserInput" placeholder="password" type="password" onChange={this.newPassword} />
					<Input className="addUserInput" placeholder="confirm password" type="password" onChange={this.confirmPassword} />
					<Button type="submit" text="submit" />
				</form>
			</div>
		);
	}
}


module.exports = AddUser;
