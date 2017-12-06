import React from 'react';
import ReactDOM from 'react-dom';

let Checkbox = (props) => {
	return (
		<div className="colorCheckbox">
			<label htmlFor={props.id}><img src={props.image} className="colorIcon"></img></label>
			<input type="checkbox" className={props.className} id={props.id} value={props.value} onClick={props.onClick}></input>
		</div>
	);
}

export default Checkbox;
