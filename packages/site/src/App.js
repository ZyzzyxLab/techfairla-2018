import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

// import { gql } from 'apollo-boost';
// import { Query } from 'react-apollo';
// import moment from 'moment';

import Header from './components/Header';
import Project from './views/ProjectView';
import Login from './views/LoginView';
import ApolloExample from './views/ApolloExample';

const Home = () => (
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/project" component={Project} />
          <Route path="/apollo-example" component={ApolloExample} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
