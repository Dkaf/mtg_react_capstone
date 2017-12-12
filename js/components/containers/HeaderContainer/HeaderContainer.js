import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../../store';
import { loginUsername, loginPassword } from '../../../actions/login';
import { connect } from 'react-redux';

import Input from './../../stateless/Input/Input';
import GreetingContainer from './../GreetingContainer/GreetingContainer';
import styles from './styles.css';

class Header extends React.Component {
	constructor(props) {
  		super(props);
		this.login = this.login.bind(this);
	}

	usernameHandler(e) {
		store.dispatch(loginUsername(e.target.value));
	}

	passwordHandler(e) {
		store.dispatch(loginPassword(e.target.value));
	}

	login() {
		store.dispatch(login(store.getState().user, store.getState().password));
		console.log(store.getState())
	}

	render() {
		return (
			<div className={styles.headerDiv}>
				<img className={styles.mainBanner} src='css/banner.png'></img>
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
