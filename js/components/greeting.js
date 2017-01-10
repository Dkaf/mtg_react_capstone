const React = require('react');
const ReactDOM = require('react-dom');

const store = require('../store');
const actions = require('../actions/index');
const Input = require('./input');
const connect = require('react-redux').connect;

class Greeting extends React.Component{
	constructor(props){
		super(props);
	}

	logout(e) {
		e.preventDefault();
		store.dispatch(actions.logout());
	}

	render(){
		if (this.props.isLoggedIn) {
			return(
				<div id="greetingDiv">
					<h2 id="greeting" className="greetingMessage">Welcome {store.getState().user}!</h2>
					<span onClick={this.logout} id="logout" className="greetingMessage">Logout</span>
				</div>
			)
		}
		else {
			return (
				<div id="loginForm">
					<form onSubmit={this.props.onSubmit}>
						<Input className="loginInput" placeholder="username" type="search" onChange={this.props.usernameChange} />
						<Input className="loginInput" placeholder="password" type="password" onChange={this.props.passwordChange} />
					</form>
					<div id="login"><span onClick={this.props.onClick} id="loginLink">Login</span></div>
				</div>
			)
		}
	}
}

let mapStateToProps = (state, props) => {
	return {
		isLoggedIn: state.isLoggedIn
	}
};

const Container = connect(mapStateToProps)(Greeting);

module.exports = Container;
