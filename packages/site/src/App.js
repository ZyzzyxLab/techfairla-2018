import React, { Component } from 'react';
import propTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import moment from 'moment';

const DATE_FORMAT = 'dddd, MMMM Do YYYY, h:mm:ss a';

const GET_DOGS = gql`
  query {
    dogs {
      id
      breed
      displayImage
    }
  }
`;

const GET_USERS = gql`
  query {
    allUsers {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

const Dog = ({ id, breed, displayImage }) => (
  <div>
    <h3>{breed}</h3>
    <img src={displayImage} alt={breed} />
  </div>
);
Dog.propTypes = {
  id: propTypes.string.isRequired,
  breed: propTypes.string.isRequired,
  displayImage: propTypes.string
};

const User = ({ id, name, createdAt, updatedAt }) => (
  <div>
    <h2>{name}</h2>
    <p>
      <span>created: {moment(createdAt).format(DATE_FORMAT)}</span>
      <br />
      <span>updated: {moment(updatedAt).format(DATE_FORMAT)}</span>
    </p>
  </div>
);
User.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  createdAt: propTypes.instanceOf(Date),
  updatedAt: propTypes.instanceOf(Date)
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Example using GraphQL's `apollo-boost`<br />
          <Query query={GET_USERS}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>Error :(</div>;

              return (
                <ul>
                  {data.allUsers.map(user => (
                    <li>
                      <User {...user} />
                    </li>
                  ))}
                </ul>
              );
            }}
          </Query>
        </p>
      </div>
    );
  }
}

export default App;
