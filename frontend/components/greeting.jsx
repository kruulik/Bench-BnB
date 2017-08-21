import React from 'react';
import {Link} from 'react-router-dom';


class Greeting extends React.Component {


  render() {
    // debugger
    if (this.props.currentUser) {
      return (
        <div>
          <h2>Welcome {this.props.currentUser.username}</h2>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      );
    }
  }
}

export default Greeting;
