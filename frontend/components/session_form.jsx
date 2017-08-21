import React from 'react';
import { Route, Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({
      username: "",
      password: "",
    });
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  render() {
    const header = this.props.formType;
    const errors = this.props.errors.responseJSON;
    // debugger
    return (
      <div>
        <h3>{header}</h3>

      {this.props.loggedIn ? <Redirect to='/'/> : <div></div>}

        <form onSubmit={this.handleSubmit}>
          <h6>{errors}</h6>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={this.state.username} onChange={this.update('username')}/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={this.state.password} onChange={ this.update('password') }/>

          <button>{this.props.buttonText}</button>
        </form>

      </div>
    );
  }

}

export default SessionForm;
