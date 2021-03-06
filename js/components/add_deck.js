const React = require('react');
const ReactDOM = require('react-dom');
const store = require('../store');
const Actions = require('../actions/index');
const connect = require('react-redux').connect;

const Input = require('./input');
const Button = require('./button');

class AddDeck extends React.Component {
	constructor(props) {
  		super(props);
		this.submitHandler = this.submitHandler.bind(this);
		this.nameInputHandler = this.nameInputHandler.bind(this);
		this.formatInputHandler = this.formatInputHandler.bind(this);
	}

	submitHandler(e) {
		e.preventDefault();
		console.log(store.getState())
		this.props.dispatch(Actions.addDeck(store.getState().deckName, store.getState().deckFormat, store.getState().user, store.getState().password))
		e.target.reset();
	}

	nameInputHandler(e) {
		this.props.dispatch(Actions.deckName(e.target.value))
	}

	formatInputHandler(e) {
		this.props.dispatch(Actions.deckFormat(e.target.value))
	}

	//Input handler
		render() {
			if (this.props.isLoggedIn){
			return (
				<div id="addDeckDiv">
					<h2>Name your new deck</h2>
					<form onSubmit={this.submitHandler}>
						<Input className="deckInput" id="deckName" onChange={this.nameInputHandler} placeholder="Name" />
						<Input className="deckInput" id="deckFormat" onChange={this.formatInputHandler} placeholder="Format" />
						<Button className="addDeck" type="submit" text="Add" />
					</form>
				</div>
			);
		}
		else {
			return null
		}
	}
};

let mapStateToProps = (state, props) => {
	return {
		isLoggedIn: state.isLoggedIn
	}
};

const Container = connect(mapStateToProps)(AddDeck);

module.exports = Container;
