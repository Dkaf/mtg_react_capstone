const React = require('react');
const ReactDOM = require('react-dom');

class Button extends React.Component {
	render() {
		return (
			<button className={this.props.className} type={this.props.type}>{this.props.text}</button>
		);
	}
};

module.exports = Button;
