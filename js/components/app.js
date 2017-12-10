import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import User from './user';
import AddUser from './add_user';
import Search from './search';
import Footer from './footer'

const App = () => {
	return (
		<div>
			<Header />
			<AddUser />
			<User />
			<Search />
			<Footer />
		</div>
	);
}


export default App;
