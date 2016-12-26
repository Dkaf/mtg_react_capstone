const React = require('react');
const ReactDOM = require('react-dom');
const router = require('react-router');
const Link = router.Link;
const store = require('../store');
const actions = require('../actions/index')
const connect = require('react-redux').connect

class Header extends React.Component {
	constructor() {
  		super();
  		this.state = {
			authenticated: false
  		}
  		this.login = this.login.bind(this);
  		this.logout = this.logout.bind(this);
	}

	login() {
		this.props.lock.show();
	}

	logout() {
		// this.setState({authenticated: false});
		this.props.dispatch(actions.logout());
	}

	render() {
		return (
			<div id="headerDiv">
				<img src="../css/banner.png" id="mainBanner"></img>
				<div id="login"><a href="#" onClick={this.login} id="loginLink">Login</a></div>
			</div>
		);
	}
}

const Container = connect()(Header)

module.exports = Header;
