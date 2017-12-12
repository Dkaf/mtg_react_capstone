require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import App from './components/stateless/App';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('app')
	)
});

window.addEventListener('scroll', () => {
	let selectElem = document.querySelector("#selectedDeck")
	let headerElem = document.querySelector("#headerDiv")
	if(selectElem){
		if(window.scrollY >= headerElem.scrollHeight) {
			selectElem.style.position = "fixed"
		} else {
			selectElem.style.position = "absolute"
		}
	}
})
