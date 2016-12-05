const React = require('react');
const ReactDOM = require('react-dom');

class Input extends React.Component {
	render() {
		return (
			<input className={this.props.className} placeholder={this.props.placeholder}></input>
		);
	}
};

module.exports = Input;
