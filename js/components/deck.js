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
		let averageCmc = totalCmc/this.props.cards.length;
		this.props.cards.forEach( (card) => {
			if(card.cmc) {
				totalCmc += card.cmc
			} else{
				totalCmc += 0
			}
		})
		let cards = this.props.cards.map( (card) => {
			return(
				<Card name={card.name} deck={this.props.deckName} cards={this.props.cards} imageUrl={card.imageUrl} />
			);
		});
		return (
			<div>
				<h3 className="deckName" onClick={this.clickHandler}>{this.props.deckName}</h3>
				<span className="deckFormat">Format: {this.props.deckFormat}</span>
				<span id="averageCmc">Average Cmc: {averageCmc}</span>
				<ul className="cardList" >{cards}</ul>
				<RemoveDeck deckName={this.props.deckName} />
			</div>
		);
	}
}


module.exports = Deck;
