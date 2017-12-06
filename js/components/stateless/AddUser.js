import React from 'react';
import ReactDOM from 'react-dom';

import Input from './Input';
import Button from './Button';
const AddUser = (props) => {
  return (
    <div id="signUpDiv">
    <h2 id="signUpTitle">Sign Up!</h2>
    <form id="signUpForm" onSubmit={props.submitHandler}>
      <Input className="addUserInput" placeholder="username" type="search" onChange={props.newUsername} />
      <Input className="addUserInput" placeholder="password" type="password" onChange={props.newPassword} />
      <Input className="addUserInput" placeholder="confirm password" type="password" onChange={props.confirmPassword} />
      <Button type="submit" text="submit" />
    </form>
  </div>
  )
}

export default AddUser