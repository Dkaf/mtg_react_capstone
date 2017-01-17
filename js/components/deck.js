const React = require('react');
const ReactDOM = require('react-dom');

const store = require('../store');
const actions = require('../actions/index');

const RemoveDeck = require('./remove_deck');
const Card = require('./card');



class Deck extends React.Component {
	constructor(props){
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		store.dispatch(actions.selectDeck(this.props.deckName));
		console.log(store.getState())
	}

	render() {
		let totalCmc = 0;
		this.props.cards.forEach( (card) => {
			if(card.cmc) {
				totalCmc += card.cmc
			}
		})
		let averageCmc = Math.round(totalCmc/this.props.cards.length);
		let cards = this.props.cards.map( (card) => {
			return(
				<div>
					<Card name={card.name} deck={this.props.deckName} fullCardlist={this.props.fullCardlist} imageUrl={card.imageUrl} />
				</div>
			);
		});
		return (
			<div className="deck">
				<h3 className="deckName" onClick={this.clickHandler}>{this.props.deckName}</h3>
				<span className="deckFormat">Format: {this.props.deckFormat}</span>
				<span id="averageCmc">Average Cmc: {averageCmc}</span>
				<RemoveDeck className="removeDeckButton" deckName={this.props.deckName} />
				<div className="cardList" >{cards}</div>
			</div>
		);
	}
}


module.exports = Deck;
