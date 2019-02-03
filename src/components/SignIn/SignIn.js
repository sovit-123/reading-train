import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../Routes/Routes';
import './SignIn.css';

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <h1>SignIn</h1>
      <SignInForm />
      <SignUpLink />
    </div>
  );
};

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit} className="sign-in-form">
        <label>
          <p>Email Address</p>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder=""
          />
          <hr className="email-hr" />
        </label>
        <label>
          <p>Password</p>
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder=""
          />
          <hr className="password-hr" />
        </label>
        <button disabled={isInvalid} type="submit" className="sign-in-button">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
