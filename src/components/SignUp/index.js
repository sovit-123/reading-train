import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../Routes/Routes';

import './SignUp.css';

const INITIAL_STATE = {
  unsername: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <h1>SignUp</h1>
      <SignUpForm />
    </div>
  );
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault(); // Prevents reload of the browser when submitting the form
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit} className="sign-up-form">
        <label>
          <p>Full Name</p>
          <input
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder=""
          />
          <hr className="full-name-hr" />
        </label>
        <label>
          <p>Email</p>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder=""
          />
          <hr className="email1-hr" />
        </label>
        <label>
          <p>Password</p>
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type=""
            placeholder=""
          />
          <hr className="password1-hr" />
        </label>
        <label>
          <p>Confirm Password</p>
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type=""
            placeholder=""
          />
          <hr className="password2-hr" />
        </label>
        <button disabled={isInvalid} type="Submit" className="sign-up-button">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => {
  return (
    <p>
      Don't have an account ? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
  );
};

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
