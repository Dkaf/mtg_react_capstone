import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './styles.css';

let Button = props => {
		const className = [
			styles.root,
			props.className
		].join(' ');
		return (
			<button className={className} type={props.type} onClick={props.onClick}>{props.text}</button>
		);
};

Button.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	text: PropTypes.string.isRequired
}

export default Button;
