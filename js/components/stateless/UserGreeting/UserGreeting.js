import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.css';

const UserGreeting = (props) => {
  return (
    <div className={styles.greetingDiv}>
      <h2 className={styles.greeting} className={styles.greetingMessage}>Welcome {props.user}!</h2>
      <span onClick={props.logout} className={styles.logout}>Logout</span>
    </div>
  )
}

export default UserGreeting;