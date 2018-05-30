import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { hot } from "react-hot-loader";

import { Dashboard } from "./dashboard";

import "bootstrap/dist/css/bootstrap.min.css";

const resolvers = {
  Query: {
    travis: (_, { project }) =>
      fetch(`https://api.travis-ci.org/${project}.svg?branch=master`)
        .then(res => res.text())
        .then(text => text.includes("passing"))
  }
};

const client = new ApolloClient({
  uri: "https://gc.funkenburg.net/api/graphql",
  clientState: {
    resolvers
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Dashboard />
    </div>
  </ApolloProvider>
);

export default hot(module)(App);
