import React from "react";
import { useQuery, gql } from "@apollo/client";

const GITHUB_AUTH_LINK = gql`
  query {
    githubAuthUrl
  }
`;

export const Login = () => {
  const { data, loading, error } = useQuery(GITHUB_AUTH_LINK);
  if (loading) return <p>loading... </p>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return (
    <>
      <h2>Log In to Camp Lambda</h2>
      <button>Log In</button>
      <button>Log In with GitHub</button>
    </>
  );
};
