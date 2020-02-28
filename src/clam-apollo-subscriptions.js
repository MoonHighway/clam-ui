import { SubscriptionClient } from 'subscriptions-transport-ws'
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'

export const wsClient = new SubscriptionClient(
  process.env.REACT_APP_GRAPHQL_SUBSCRIPTIONS,
  {
    reconnect: true,
    lazy: true,
    connectionParams: () => ({
      authorization: localStorage.getItem('token')
    })
  }
)

const wsLink = new WebSocketLink(wsClient)

export const createSubscriptionLink = link =>
  split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    link
  )
