import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { gql, useMutation } from "@apollo/client";
import { useInput } from "../../hooks";

const LOG_IN = gql`
  mutation LogIn($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
      camper {
        email
        name
      }
      token
    }
  }
`;

export function Login() {
  const [logIn] = useMutation(LOG_IN);
  const [emailProps, resetEmail] = useInput("");
  const [passwordProps, resetPassword] = useInput("");

  const submit = e => {
    e.preventDefault();
    logIn({
      variables: {
        email: emailProps.value,
        password: passwordProps.value
      }
    });

    resetEmail();
    resetPassword();
  };

  return (
    <Container>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" {...emailProps} />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" id="password" {...passwordProps} />
        </div>
        <button type="submit">Log In</button>
        <button className="githubButton">
          <FaGithub />
          &nbsp;&nbsp;Log In with GitHub
        </button>
      </form>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  label,
  input {
    margin: 5px;
  }
  input {
    font-size: 1.5em;
    border: 0;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    padding: 0;
    cursor: text;
    height: 1.75em;
    width: 80%;
  }
  input:focus {
    outline: 0;
    border-bottom: 1px solid #666;
  }

  >>>>>>>master label {
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  button {
    background-color: #03a9f4;
    border: none;
    width: 100%;
    text-align: center;
    height: 45px;
    border-radius: 4px;
    color: white;
    margin-top: 20px;
    font-size: 1em;
  }
  .githubButton {
    background-color: rgba(36, 41, 44, 0.9);
  }
`;
