import React from 'react';
import ReactDOM from 'react-dom';

import Input from './../Input/Input';
import styles from './styles.css';

const LoginForm = (props) => {
  return (
    <div className={styles.loginForm}>
      <form onSubmit={props.onSubmit}>
        <Input className={styles.loginInput} placeholder="username" type="search" onChange={props.usernameChange} />
        <Input className={styles.loginInput} placeholder="password" type="password" onChange={props.passwordChange} />
      </form>
      <div className={styles.login}><span onClick={props.onClick} className={styles.loginLink}>Login</span></div>
  </div>
  );
}

export default LoginForm