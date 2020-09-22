import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink
} from "@apollo/client";
import { setContext } from "apollo-link-context";
import { createSubscriptionLink } from "./clam-apollo-subscriptions";

const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URI
});
const authLink = setContext((_, operation) => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      headers: {
        ...operation.headers,
        authorization: token
      }
    };
  } else {
    return operation;
  }
});

const httpAuthLink = authLink.concat(httpLink);
const link = createSubscriptionLink(httpAuthLink);
const client = new ApolloClient({ cache, link });

export default function AppProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
