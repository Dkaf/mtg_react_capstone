import React from 'react';
import ReactDOM from 'react-dom';

import store from '../../store';
import { deckIsActive, selectDeck } from '../../actions/deck';

import CardContainer from './CardContainer';
import { connect } from 'react-redux'


export class DeckContainer extends React.Component {
	constructor(props){
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		if(this.props.selectedDeck.name == this.props.deckName) {
			return null
		} else{
			store.dispatch(deckIsActive());
			store.dispatch(selectDeck(this.props.deckName));
		}
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
				<div key={card._id}>
					<CardContainer name={card.name} deck={this.props.deckName} fullCardlist={this.props.fullCardlist} imageUrl={card.imageUrl} />
				</div>
			);
		});
		let deckIsActive = () => {
			let classNames = 'deckName ' + ((this.props.selectedDeck.name == this.props.deckName) ?'deckActive':'');
			return classNames
		};
		deckIsActive();
		return (
			<Deck className={deckIsActive()}
				clickHandler={this.clickHandler}
				deckName={this.props.deckName}
				deckFormat={this.props.deckFormat}
				averageCmc={averageCmc}
				cards={cards}	
			/>
		);
	}
}

let mapStateToProps = (state, props) => {
	return {
		selectedDeck: state.selectedDeck
	}
}

let Container = connect(mapStateToProps)(DeckContainer);


export default Container;
