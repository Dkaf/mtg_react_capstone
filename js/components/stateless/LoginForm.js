import React from 'react';
import ReactDOM from 'react-dom';

import Input from './Input';

const LoginForm = (props) => {
  return (
    <div id="loginForm">
      <form onSubmit={props.onSubmit}>
        <Input className="loginInput" placeholder="username" type="search" onChange={props.usernameChange} />
        <Input className="loginInput" placeholder="password" type="password" onChange={props.passwordChange} />
      </form>
      <div id="login"><span onClick={props.onClick} id="loginLink">Login</span></div>
  </div>
  );
}

export default LoginForm