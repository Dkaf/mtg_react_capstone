import React from 'react';
import ReactDOM from 'react-dom';

import HeaderContainer from './../containers/HeaderContainer';
import User from './User';
import AddUserContainer from './../containers/AddUserContainer';
import SearchContainer from './../containers/SearchContainer';
import Footer from './Footer'

const App = () => {
	return (
		<div>
			<HeaderContainer />
			<AddUserContainer />
			<User />
			<SearchContainer />
			<Footer />
		</div>
	);
}


export default App;
