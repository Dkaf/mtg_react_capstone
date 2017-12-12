import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.css';
let Footer = props => {
	return (
		<div className={styles.footerDiv}>
			<span className={styles.footerName}>Daniel Kafer</span>
			<a href="https://dkaf.github.io/portfolio/index.html" className="footerLink">Portfolio</a>
		</div>
	);
}

export default Footer;
