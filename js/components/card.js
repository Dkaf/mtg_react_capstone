const React = require('react');
const ReactDOM = require('react-dom');

const store = require('../store');
const actions = require('../actions/index');
const connect = require('react-redux').connect;

class Card extends React.Component {
	constructor(props) {
		super(props)
		this.removeCard = this.removeCard.bind(this);
	}

	removeCard(e) {
		e.preventDefault();
		Promise.resolve(store.dispatch(actions.updateDeck(this.props.deck, this.props.fullCardlist, this.props.name))).then( () => {
			return store.dispatch(actions.removeCard(this.props.editedDeck.name, this.props.editedDeck.cards, this.props.user, this.props.password))
		})
	}


	render() {
		return (
			<div className="card">
				<ul>
					<li className="cardName">{this.props.name}</li>
					<li className="cardType" hidden="true">{this.props.type}</li>
				</ul>
				<img className="cardImage" src={this.props.imageUrl}></img>
				<a href="#" onClick={this.removeCard}>Remove</a>
			</div>
		)
	}
};

let mapStateToProps = (state, props) => {
	return {
		user: state.user,
		password: state.password,
		deckList: state.deckList,
		editedDeck: state.editedDeck
	}
}

let Container = connect(mapStateToProps)(Card);

module.exports = Container;
