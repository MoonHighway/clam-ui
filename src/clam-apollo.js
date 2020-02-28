import React from 'react'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import { createSubscriptionLink } from './clam-apollo-subscriptions'

const cache = new InMemoryCache()
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URI
})
const authLink = setContext((_, operation) => {
  const token = localStorage.getItem('token')
  if (token) {
    return {
      headers: {
        ...operation.headers,
        authorization: `Bearer ${token}`
      }
    }
  } else {
    return operation
  }
})

const httpAuthLink = authLink.concat(httpLink)
const link = createSubscriptionLink(httpAuthLink)
const client = new ApolloClient({ cache, link })

export default function AppProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
