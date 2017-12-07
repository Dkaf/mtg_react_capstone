import React from 'react';
import ReactDOM from 'react-dom';

const UserGreeting = (props) => {
  return (
    <div id="greetingDiv">
      <h2 id="greeting" className="greetingMessage">Welcome {props.user}!</h2>
      <span onClick={props.logout} id="logout" className="greetingMessage">Logout</span>
    </div>
  )
}

export default UserGreeting;