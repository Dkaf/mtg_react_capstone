const React = require('react');
const ReactDOM = require('react-dom');

const store = require('../store');
const actions = require('../actions/index');

const RemoveDeck = require('./remove_deck');
const Card = require('./card');
const connect = require('react-redux').connect



class Deck extends React.Component {
	constructor(props){
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		if(this.props.selectedDeck.name == this.props.deckName) {
			return null
		} else{
			store.dispatch(actions.deckIsActive());
			store.dispatch(actions.selectDeck(this.props.deckName));
		}
		console.log(store.getState())
		}

	render() {
		let classNames;
		let totalCmc = 0;
		this.props.cards.forEach( (card) => {
			if(card.cmc) {
				totalCmc += card.cmc
			}
		})
		let averageCmc = Math.round(totalCmc/this.props.cards.length);
		let cards = this.props.cards.map( (card) => {
			return(
				<div key={card._id}>
					<Card name={card.name} deck={this.props.deckName} fullCardlist={this.props.fullCardlist} imageUrl={card.imageUrl} />
				</div>
			);
		});
		let deckIsActive = () => {
			if(this.props.deckIsActive) {
				return classNames = 'deckName deckActive'
			}
			return classNames = 'deckName'
		};
		deckIsActive();
		return (
			<div className="deck">
				<h3 className={classNames} onClick={this.clickHandler}>{this.props.deckName}</h3>
				<span className="deckFormat">Format: {this.props.deckFormat}</span>
				<span id="averageCmc">Average Cmc: {averageCmc}</span>
				<RemoveDeck className="removeDeckButton" deckName={this.props.deckName} />
				<div className="cardList" >{cards}</div>
			</div>
		);
	}
}

let mapStateToProps = (state, props) => {
	return {
		deckIsActive: state.deckIsActive,
		selectedDeck: state.selectedDeck
	}
}

let Container = connect(mapStateToProps)(Deck);


module.exports = Container;
