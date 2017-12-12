import React from 'react';
import ReactDOM from 'react-dom';

import RemoveDeck from './../../containers/RemoveDeckContainer/RemoveDeckContainer'
import styles from './styles.css'
const Deck = (props) => {
  return (
    <div className={styles.deck}>
      <h3 className={props.className} onClick={props.clickHandler}>{props.deckName}</h3>
      <span className={styles.deckFormat}>Format: {props.deckFormat}</span>
      <span className={styles.averageCmc}>Average Cmc: {props.averageCmc}</span>
      <RemoveDeck className={styles.removeDeckButton} deckName={props.deckName} />
      <div className={styles.cardList} >{props.cards}</div>
  </div>
  );
}

export default Deck