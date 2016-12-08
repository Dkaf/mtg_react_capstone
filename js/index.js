require('babel-polyfill');

const React = require('react');
const ReactDOM = require('react-dom');
const Provider = require('react-redux').Provider;

const store = require('./store')

const App = require('./components/app');

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('app')
	)
});
