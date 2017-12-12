import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';

let Checkbox = (props) => {
	return (
		<div className={styles.colorCheckbox}>
			<label htmlFor={props.id}><img src={props.image} className={styles.colorIcon}></img></label>
			<input type="checkbox" className={props.className} id={props.id} value={props.value} onClick={props.onClick}></input>
		</div>
	);
}

export default Checkbox;
