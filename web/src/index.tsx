import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import App from './App';
// https://stackoverflow.com/questions/63005568/
// property-setlink-is-missing-in-type-apolloclientnormalizedcacheobject-but
//  client: ApolloClient<TCache> | DefaultClient<TCache>;
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
