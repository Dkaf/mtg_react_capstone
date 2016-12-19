const React = require('react');
const ReactDOM = require('react-dom');

const Header = require('./header');
const User = require('./user');
const Auth0Vars = require('../auth0_vars')

class App extends React.Component {

	componentWillMount() {
	    this.lock = new Auth0Lock(Auth0Vars.AUTH0_CLIENT_ID, Auth0Vars.AUTH0_DOMAIN);

		getIdToken = () => {
   			// First, check if there is already a JWT in local storage
   			var idToken = localStorage.getItem('id_token');
   			var authHash = this.lock.parseHash(window.location.hash);
   			// If there is no JWT in local storage and there is one in the URL hash,
   			// save it in local storage
   			if (!idToken && authHash) {
	 			if (authHash.id_token) {
	   			idToken = authHash.id_token
	   			localStorage.setItem('id_token', authHash.id_token);
	 			}
	 			if (authHash.error) {
	   			// Handle any error conditions
	   			console.log("Error signing in", authHash);
	 			}
   			}
   			return idToken;
 		}
	  }

	render() {
		return (
			<div>
				<Header lock={this.lock} />
				<User />
			</div>
		);
	}
}

module.exports = App;
