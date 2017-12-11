import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import store from '../../store';
import { logout } from '../../actions/login';
import { connect } from 'react-redux';

import LoginForm from './../stateless/LoginForm';
import UserGreeting from './../stateless/UserGreeting'

export class GreetingContainer extends Component{
	constructor(props){
		super(props);
	}

	logout(e) {
		e.preventDefault();
		store.dispatch(logout());
	}

	render(){
		if (this.props.isLoggedIn) {
			return(
				<UserGreeting user={this.props.user} logout={this.logout}/>
			)
		}
		else {
			return (
				<LoginForm onSubmit={this.props.onSubmit}
					usernameChange={this.props.usernameChange}
					passwordChange={this.props.passwordChange}
					onClick={this.props.onClick}
				/>
			)
		}
	}
}

let mapStateToProps = (state, props) => {
	return {
		isLoggedIn: state.isLoggedIn,
		user: state.user
	}
};

const Container = connect(mapStateToProps)(GreetingContainer);

export default Container;
