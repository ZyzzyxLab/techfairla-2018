import React, { Component } from 'react';
import propTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_DOGS = gql`
  query {
    dogs {
      id
      breed
      displayImage
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
          <Query query={GET_DOGS}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>Error :(</div>;

              return (
                <ul>
                  {data.dogs.map(({ id, breed, displayImage }) => (
                    <li>
                      <Dog id={id} breed={breed} displayImage={displayImage} />
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
