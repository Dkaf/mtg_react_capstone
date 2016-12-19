const React = require('react');
const ReactDOM = require('react-dom');
const router = require('react-router');
const Link = router.Link;
const store = require('../store');

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
		this.props.lock.show((err, profile, token) => {
			if(err) {
				alert(err)
			}
			this.setState({autenticated: true});
		});
	}

	logout() {
		this.setState({authenticated: false});
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

module.exports = Header;
