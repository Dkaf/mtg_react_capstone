const React = require('react');
const ReactDOM = require('react-dom');


class Input extends React.Component {
	render() {
		return (
			<div>
				<input className={this.props.className} id={this.props.id} type={this.props.type}placeholder={this.props.placeholder} onChange={this.props.onChange}></input>
			</div>
		);
	}
};

module.exports = Input;
