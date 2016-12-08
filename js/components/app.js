const React = require('react');
const ReactDOM = require('react-dom');
const router = require('react-router');
const Link = router.Link;

class App extends React.Component {
	render() {
		return (
			<div>
				<Link to={'/new-user/'}>Create Account</Link>
			</div>
		);
	}
}

module.exports = App;
