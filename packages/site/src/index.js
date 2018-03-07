import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Task from './views/Task';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
  uri: 'https://nx9zvp49q7.lp.gql.zone/graphql'
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <Task />
  </ApolloProvider>
);

ReactDOM.render(<ApolloApp />, document.getElementById('root'));
registerServiceWorker();
