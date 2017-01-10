const React = require('react');
const ReactDOM = require('react-dom');
const store = require('../store');
const actions = require('../actions/index')
const connect = require('react-redux').connect

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
		if(!this.props.isLoggedIn){
			return (
				<div id="signUpDiv">
					<h2 id="signUpTitle">Sign Up!</h2>
					<form id="signUpForm" onSubmit={this.submitHandler}>
						<Input className="addUserInput" placeholder="username" type="search" onChange={this.newUsername} />
						<Input className="addUserInput" placeholder="password" type="password" onChange={this.newPassword} />
						<Input className="addUserInput" placeholder="confirm password" type="password" onChange={this.confirmPassword} />
						<Button type="submit" text="submit" />
					</form>
				</div>
			);
		} else {
			return null
		}
	}
}

let mapStateToProps = (state, props) => {
	return {
		isLoggedIn: state.isLoggedIn
	}
};

const Container = connect(mapStateToProps)(AddUser);

module.exports = Container;
