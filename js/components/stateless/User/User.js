import React from 'react';
import ReactDOM from 'react-dom';

import DeckListContainer from './../../containers/DeckListContainer/DeckListContainer';
import AddDeckContainer from './../../containers/AddDeckContainer/AddDeckContainer';

const User = (props) => {
	return (
		<div className="userDiv">
			<DeckListContainer />
			<AddDeckContainer />
		</div>
	);
};

export default User;
