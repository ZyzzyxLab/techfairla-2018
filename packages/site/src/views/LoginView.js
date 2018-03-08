import React, { Component } from 'react';
import './LoginView.css';

import { Route, Switch } from 'react-router-dom';

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
      <nav className="pt-navbar">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading"> Login Buttons </div>
          <button className="pt-button pt-minimal pt-icon-user"> </button>
          <button className="pt-button pt-minimal pt-icon-cog"> </button>
        </div>
      </nav>
    );
  }
}

export default Login;
