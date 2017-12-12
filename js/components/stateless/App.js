import React from 'react';
import ReactDOM from 'react-dom';

import HeaderContainer from './../containers/HeaderContainer/HeaderContainer';
import User from './User/User';
import AddUserContainer from './../containers/AddUserContainer/AddUserContainer';
import SearchContainer from './../containers/SearchContainer/SearchContainer';
import Footer from './Footer/Footer'

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
