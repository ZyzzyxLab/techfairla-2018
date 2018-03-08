import React, { Component } from 'react';
import './LoginView.css';

import { Route, Switch } from 'react-router-dom';
import * as Blueprint from '@blueprintjs/core';

// import { gql } from 'apollo-boost';
// import { Query } from 'react-apollo';
// import moment from 'moment';

const Home = () => (
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
);

class Login extends Component {
  render() {
    return (
      <div class="pt-navbar-group pt-align-left">
        <div class="pt-navbar-heading"> Login Buttons </div>
        <div class="pt-button pt-minimal pt-icon-user"> </div>
        <div class="pt-button pt-minimal pt-icon-cog"> </div>
        const anotherSpinner ={' '}
        <Blueprint.Spinner intent={Blueprint.Intent.PRIMARY} />;
      </div>
    );
  }
}

export default Login;
