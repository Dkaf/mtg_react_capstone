import React from 'react';
import ReactDOM from 'react-dom';

import RemoveDeck from './../containers/RemoveDeckContainer'
const Deck = (props) => {
  return (
    <div className="deck">
      <h3 className={props.className} onClick={props.clickHandler}>{props.deckName}</h3>
      <span className="deckFormat">Format: {props.deckFormat}</span>
      <span className="averageCmc">Average Cmc: {props.averageCmc}</span>
      <RemoveDeck className="removeDeckButton" deckName={props.deckName} />
      <div className="cardList" >{props.cards}</div>
  </div>
  );
}

export default Deck