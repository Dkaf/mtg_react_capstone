import React from 'react';
import ReactDOM from 'react-dom';




const Card = (props) => {
  return (
    <div className="card">
      <ul>
        <li className="cardName">{props.name}</li>
        <li className="cardImage"><img src={props.imageUrl}></img></li>
      </ul>
      <a href="#" onClick={props.onClick}>Remove</a>
    </div>
  )
}

export default Card