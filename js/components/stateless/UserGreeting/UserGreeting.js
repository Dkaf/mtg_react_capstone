import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Container } from 'semantic-ui-react';

import styles from './styles.css';

const UserGreeting = (props) => {
  return (
    <Container>
      <Header as="h2"> Welcome {props.user}! </Header>
      <span onClick={props.logout} className={styles.logout}>Logout</span>
    </Container>
  )
}

export default UserGreeting;