const React = require('react');
const ReactDOM = require('react-dom');

class Footer extends React.Component {
	render() {
		return (
			<div id="footer-div">
				<span id="footer-name">Daniel Kafer</span>
				<a href="#" id="footer-link">Website Link</a>
			</div>
		);
	}
}

module.exports = Footer;
