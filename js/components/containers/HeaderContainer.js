import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../store';
import { loginUsername, loginPassword } from '../../actions/login';
import { connect } from 'react-redux';

import Input from './../stateless/Input';
import GreetingContainer from './GreetingContainer';

class Header extends React.Component {
	constructor(props) {
  		super(props);
		this.login = this.login.bind(this);
	}

	usernameHandler(e) {
		store.dispatch(actions.loginUsername(e.target.value));
	}

	passwordHandler(e) {
		store.dispatch(actions.loginPassword(e.target.value));
	}

	login() {
		store.dispatch(actions.login(store.getState().user, store.getState().password));
		console.log(store.getState())
	}

	render() {
		return (
			<div id="headerDiv">
				<img id="mainBanner" src='css/banner.png'></img>
				<GreetingContainer onSubmit={this.login} usernameChange={this.usernameHandler}
						  passwordChange={this.passwordHandler} onClick={this.login} />
			</div>
		);
	}
}

let mapStateToProps = (state, props) => {
	return {
		isLoggedIn: state.isLoggedIn,
		user: state.user
	}
}

const Container = connect(mapStateToProps)(Header)


export default Container;
