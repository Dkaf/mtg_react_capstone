import React from 'react';
import ReactDOM from 'react-dom';

const SelectMenu = (props) => {
  const menuItems = (item, i) => {
    return <option key={i} value={item}>{item}</option>
  }

  return (
    <select className={props.className} onChange={props.onChange}>
      <option>{props.name}</option>
      {props.options.map(menuItems)}
    </select>
  )
}

export default SelectMenu