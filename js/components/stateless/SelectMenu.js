import React from 'react';
import ReactDOM from 'react-dom';

const SelectMenu = (props) => {
  const menuItems = (item) => {
    return <option value={item}>{item}</option>
  }

  return (
    <select className={props.className} onChange={this.typeFilter}>
      <option>{props.name}</option>
      {props.options.map(menuItems)}
    </select>
  )
}

export default SelectMenu