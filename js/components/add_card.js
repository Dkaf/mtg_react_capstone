const React = require('react')
const ReactDOM = require('react-dom');

const store = require('../store');
const actions = require('../actions/index');
const Button = require('./button');
const connect = require('react-redux').connect;

class AddCard extends React.Component {
	constructor(props) {
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e) {
		e.preventDefault();
		if(!store.getState().isLoggedIn){
			alert('Please login or sign up to add cards');
		} else if(!store.getState().selectedDeck) {
			alert('Please select a deck to add cards');
		} else {
			Promise.resolve(store.dispatch(actions.updateDecklist(this.props.card))).then( () => {
				return store.dispatch(actions.addCard(this.props.selectedDeck.name, this.props.selectedDeck.cards, this.props.user, this.props.password))
			})
			console.log(store.getState())
		}
	}

	render() {
		return(
			<Button text="add card" className="cardEdit" type="button" onClick={this.clickHandler} card={this.props.card} />
		)
	}
}

let mapStateToProps = (state, props) => {
	return {
		selectedDeck: state.selectedDeck,
		user: state.user,
		password: state.password
	}
}

let Container = connect(mapStateToProps)(AddCard)

module.exports = Container;
