import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Task from './views/Task';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

const graphqlEndpoint =
  'https://api.graph.cool/simple/v1/cjehlau7e177o011135boojp8';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
  uri: graphqlEndpoint //'https://nx9zvp49q7.lp.gql.zone/graphql'
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
<<<<<<< HEAD
    <Task />
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> 09d938f5b73a1d86ea92d9b7320d13b3c315f451
  </ApolloProvider>
);

ReactDOM.render(<ApolloApp />, document.getElementById('root'));
registerServiceWorker();
