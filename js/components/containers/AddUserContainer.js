import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../../store';
import { newUsername, newPassword, confirmedPassword, addUser } from '../../actions/addUser';
import { connect } from 'react-redux';

import AddUser from './../stateless/AddUser'

export class AddUserContainer extends Component {
	constructor(props){
		super(props);
	}

	newUsername(e) {
		store.dispatch(newUsername(e.target.value));
	}

	newPassword(e) {
		store.dispatch(newPassword(e.target.value));
		console.log(store.getState())
	}

	confirmPassword(e) {
		store.dispatch(confirmedPassword(e.target.value))
	}

	submitHandler(e) {
		e.preventDefault();
		if (store.getState().newPassword =! store.getState().confirmedPassword) {
			alert("Passwords do not match");
		}

		else {
			store.dispatch(addUser(store.getState().newUsername, store.getState().confirmedPassword));
		}
	}

	render() {
		if(!this.props.isLoggedIn){
			return (
				<AddUser submitHandler={this.submitHandler}
					newUsername={this.newUsername}
					newPassword={this.newPassword}
					confirmPassword={this.confirmPassword}
				/>
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

const Container = connect(mapStateToProps)(AddUserContainer);

export default Container;
