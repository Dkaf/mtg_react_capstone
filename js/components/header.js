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
			<div>
				<Link to={'/new-user/'}>Create Account</Link>
				<a href="#" onClick={this.login}>Login</a>
				<a href="#" onClick={this.logout}>Logout</a>
			</div>
		);
	}
}

const Container = connect()(Header)

module.exports = Header;
