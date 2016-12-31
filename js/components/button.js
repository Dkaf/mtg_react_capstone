const React = require('react');
const ReactDOM = require('react-dom');

const store = require('../store');
const actions = require('../actions/index');

class Button extends React.Component {

	render() {
		return (
			<button className={this.props.className} type={this.props.type} onClick={this.props.onClick}>{this.props.text}</button>
		);
	}
};

module.exports = Button;
