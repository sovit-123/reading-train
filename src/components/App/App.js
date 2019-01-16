import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import Navbar from '../Navigation/Navbar';
import Home from '../Home/Home';
import LandingPage from '../Landing/Landing';
import SignInPage from '../SignIn/SignIn';
import SignUpPage from '../SignUp/index';
import * as ROUTES from '../../Routes/Routes';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }
  render() {
    return (
      <Router>
        <div className="app">
          <div className="heading-navigation">
            <h1 className="heading">Reading Train</h1>
            <Navbar authUser={this.state.authUser} className="navbar" />
          </div>

        <hr className="bottom-nav-line" />

          <div className="routes">
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
