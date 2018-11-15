import {
  InMemoryCache,
  ApolloLink,
  HttpLink,
  ApolloClient,
  split
} from 'apollo-boost'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { persistCache } from 'apollo-cache-persist'

const cache = new InMemoryCache()
persistCache({
  cache,
  storage: localStorage
})

if (localStorage['apollo-cache-persist']) {
  let cacheData = JSON.parse(localStorage['apollo-cache-persist'])
  cache.restore(cacheData)
}

const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT })
const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(context => ({
    headers: {
      ...context.headers,
      authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }))
  return forward(operation)
})

const httpAuthLink = authLink.concat(httpLink)

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_SUBSCRIPTIONS_ENDPOINT,
  options: {
    reconnect: true,
    lazy: true,
    connectionParams: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpAuthLink
)

export default new ApolloClient({ cache, link })
