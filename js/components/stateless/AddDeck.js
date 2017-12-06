import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import Button from './Button';
import PropTypes from 'prop-types';

const AddDeck = (props) => {
  return(
    <div id="addDeckDiv">
      <h2>Name your new deck</h2>
      <form onSubmit={props.submitHandler}>
        <Input className="deckInput" id="deckName" onChange={props.nameInputHandler} placeholder="Name" />
        <Input className="deckInput" id="deckFormat" onChange={props.formatInputHandler} placeholder="Format" />
        <Button className="addDeck" type="submit" text="Add" />
      </form>
    </div>
  );
}

AddDeck.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  nameInputHandler: PropTypes.func.isRequired,
  formatInputHandler: PropTypes.func.isRequired
}

export default AddDeck