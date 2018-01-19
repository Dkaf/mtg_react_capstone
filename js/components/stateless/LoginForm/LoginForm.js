import React from 'react';
import ReactDOM from 'react-dom';

import { Form, Container } from 'semantic-ui-react';
import Input from './../Input/Input';
import styles from './styles.css';

const LoginForm = (props) => {
  return (
    <Container>
      <Form size="small" onSubmit={props.onSubmit}>
        <Form.Input placeholder="username" onChange={props.usernameChange} />
        <Form.Input placeholder="password" type="password" onChange={props.passwordChange} />
        <Form.Button onClick={props.onClick} content="login" />
      </Form>
  </Container>
  );
}

export default LoginForm