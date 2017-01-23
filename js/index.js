require('babel-polyfill');

const React = require('react');
const ReactDOM = require('react-dom');
const Provider = require('react-redux').Provider;

const store = require('./store')

const App = require('./components/app');
const User = require('./components/user');

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
		if(window.scrollY >= headerElem.scrollHeight + selectElem.scrollHeight) {
			selectElem.style.position = "fixed"
		} else {
			selectElem.style.position = "absolute"
		}
	}
})
