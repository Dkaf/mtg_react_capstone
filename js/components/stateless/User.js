import React from 'react';
import ReactDOM from 'react-dom';

import DeckListContainer from './../containers/DeckListContainer';
import AddDeckContainer from './../containers/AddDeckContainer';

const User = (props) => {
	return (
		<div id="userDiv">
			<DeckListContainer />
			<AddDeckContainer />
		</div>
	);
};

export default User;
