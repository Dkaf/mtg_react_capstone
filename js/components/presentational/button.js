import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

let Button = props => {
		return (
			<button className={props.className} type={props.type} onClick={props.onClick}>{props.text}</button>
		);
};

Button.propTypes = {
	className: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired
}

export default Button;
