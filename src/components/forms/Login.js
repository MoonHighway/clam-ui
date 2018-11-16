import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GITHUB_AUTH_LINK = gql`
  query {
    githubAuthUrl
  }
`

export const Login = () => (
  <Query query={GITHUB_AUTH_LINK}>
    {({ loading, data, error }) => {
      if (loading) return <p>loading... </p>
      if (error) return <p>{error}</p>
      return <p>{JSON.stringify(data)}</p>
    }}
  </Query>
)
