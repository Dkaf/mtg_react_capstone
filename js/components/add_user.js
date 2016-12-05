const React = require('react');
const ReactDOM = require('react-dom');
const store = require('../store');

class AddUser extends React.Component {

	submitHandler() {
		store.dispatch(actions.addUser());
	}

	render() {
		return (
			<div>
				<h2>Enter a username and Password</h2>
				<form onSubmit={this.submitHandler}>
					<Input className="username" placeholder="username" />
					<Input className="password" placeholder="password" />
					<Button type="submit" text="submit" />
				</form>
			</div>
		);
	}
}

module.exports = AddUser;
