const React = require('react');
const ReactDOM = require('react-dom');

class Input extends React.Component {
	render() {
		return (
			<div>
				<input className={this.props.className} id={this.props.id} placeholder={this.props.placeholder}></input>
			</div>
		);
	}
};

module.exports = Input;
