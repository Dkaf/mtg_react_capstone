const React = require('react');
const ReactDOM = require('react-dom')

class Checkbox extends React.Component {
	render() {
		return (
			<div className="colorCheckbox">
				<label htmlFor={this.props.id}><img src={this.props.image} className="colorIcon"></img></label>
				<input type="checkbox" className={this.props.className} id={this.props.id} value={this.props.value} onClick={this.props.onClick}></input>
			</div>
		);
	}
}

module.exports = Checkbox;
