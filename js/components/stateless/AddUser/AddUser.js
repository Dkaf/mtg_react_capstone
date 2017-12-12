import React from 'react';
import ReactDOM from 'react-dom';

import Input from './../Input/Input';
import Button from './../Button/Button';
const AddUser = (props) => {
  return (
    <div className="signUpDiv">
    <h2 className="signUpTitle">Sign Up!</h2>
    <form className="signUpForm" onSubmit={props.submitHandler}>
      <Input className="addUserInput" placeholder="username" type="search" onChange={props.newUsername} />
      <Input className="addUserInput" placeholder="password" type="password" onChange={props.newPassword} />
      <Input className="addUserInput" placeholder="confirm password" type="password" onChange={props.confirmPassword} />
      <Button className="addUserButton" type="submit" text="submit" />
    </form>
  </div>
  )
}

export default AddUser