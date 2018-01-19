import React from 'react';
import ReactDOM from 'react-dom';

import { Form, Header, Container } from 'semantic-ui-react';
import Input from './../Input/Input';
import Button from './../Button/Button';
const AddUser = (props) => {
  return (
    <Container className="signUpDiv">
      <Header as="h2">Sign Up!</Header>
      <Form size="small" className="signUpForm" onSubmit={props.submitHandler}>
        <Form.Input placeholder="username" onChange={props.newUsername} />
        <Form.Input placeholder="password" type="password" onChange={props.newPassword} />
        <Form.Input placeholder="confirm password" type="password" onChange={props.confirmPassword} />
        <Form.Button type="submit" content="submit" />
      </Form>
    </Container>
  )
}

export default AddUser