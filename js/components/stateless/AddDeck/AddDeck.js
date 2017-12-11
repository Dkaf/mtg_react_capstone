import React from 'react';
import ReactDOM from 'react-dom';
import Input from './../Input/Input';
import Button from './Button/Button';
import PropTypes from 'prop-types';
import styles from './styles.css';

const AddDeck = (props) => {
  return(
    <div className={styles.addDeckDiv}>
      <h2>Name your new deck</h2>
      <form onSubmit={props.submitHandler}>
        <Input className={styles.deckInput} id="deckName" onChange={props.nameInputHandler} placeholder="Name" />
        <Input className={styles.deckInput} id="deckFormat" onChange={props.formatInputHandler} placeholder="Format" />
        <Button className={styles.addDeck} type="submit" text="Add" />
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