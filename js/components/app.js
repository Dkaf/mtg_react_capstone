const React = require('react');
const ReactDOM = require('react-dom');

const Header = require('./header');
const User = require('./user');
const AddUser = require('./add_user');
const Auth0Vars = require('../auth0_vars');
const actions = require('../actions/index');
const store = require('../store')

class App extends React.Component {
	constructor(){
		super();
	}

	componentWillMount() {
	    this.lock = new Auth0Lock(Auth0Vars.AUTH0_CLIENT_ID, Auth0Vars.AUTH0_DOMAIN);
		this.lock.on('authenticated', this.authenticated.bind(this));
	  }

	  authenticated(authResult) {
		  store.dispatch(actions.loginSuccess(authResult));
	  }

	render() {
		return (
			<div>
				<Header lock={this.lock} />
				<AddUser />
				<User />
			</div>
		);
	}
}


module.exports = App;
