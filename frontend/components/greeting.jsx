import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    if (this.props.currentUser){
      return (
        <div>
          <h2>Welcome, {this.props.currentUser.username}!</h2>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    }

  }
}

export default Greeting;
