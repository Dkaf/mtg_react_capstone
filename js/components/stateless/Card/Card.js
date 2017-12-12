import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';




const Card = (props) => {
  return (
    <div className={styles.card}>
      <ul>
        <li className={styles.cardName}>{props.name}</li>
        <li className={styles.cardImage}><img src={props.imageUrl}></img></li>
      </ul>
      <a href="#" onClick={props.onClick}>Remove</a>
    </div>
  )
}

export default Card