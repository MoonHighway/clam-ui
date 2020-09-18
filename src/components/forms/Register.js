import React from "react";
import { useMutation, gql } from "@apollo/client";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const CREATE_CAMPER = gql`
  mutation CreateCamper($input: CreateCamperInput!) {
    createCamper(input: $input) {
      email
      name
    }
  }
`;

export function Register() {
  const [setCamper] = useMutation(CREATE_CAMPER);
  return (
    <Container>
      <button className="githubButton">
        <FaGithub />
        &nbsp;&nbsp; Sign In with GitHub
      </button>
      <p>or</p>
      <form>
        <label>Name</label>
        <br />
        <input type="text" />
        <br />
        <label>Email</label>
        <br />
        <input type="email" />

        <label>Password</label>
        <br />
        <input type="password" />

        <button>Create Account</button>
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

  label {
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
