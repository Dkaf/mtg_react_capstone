import React from 'react'
import ReactDOM from 'react-dom';


let Input = props => {
	return (
		<div>
			<input className={props.className} id={props.id} type={props.type}placeholder={props.placeholder} onChange={props.onChange}></input>
		</div>
	);
};

export default Input;
