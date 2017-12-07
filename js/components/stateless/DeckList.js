import React from 'react';
import ReactDOM from 'react-dom';

import Deck from './../deck'
const Decklist = (props) => {
  const decks = props.decks.map(( deck, i) => {
    deck.cards = deck.cards.sort((a,b) => {
      if(a.name<b.name) return -1
      if(a.name>b.name) return 1
      return 0
    });
    return (
      <Deck key={i}
        deckName={deck.name}
        deckFormat={deck.format}
        fullCardlist={deck.cards}
        cards={deck.cards}/>      
    )
  });

  return (
    <div id="deckListDiv">
      <h2>Deck List</h2>
      <h3 id="selectedDeck">Selected Deck:<br /><span id="selectedDeckName">{props.selectedDeck}</span></h3>
      <ul>
        {decks}
      </ul>
    </div>
  )
}

export default Decklist