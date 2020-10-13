import React from "react";
import styled from "styled-components";
import { useInput } from "../../hooks";
import { gql, useQuery, useMutation } from "@apollo/client";
import { AiOutlineUpload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ME = gql`
  query Me {
    me {
      name
      email
      photo {
        thumb
      }
      githubPhoto
      cabin {
        name
      }
    }
  }
`;

const CHANGE_ACCOUNT = gql`
  mutation ChangeAccount($name: String!, $email: ID!) {
    changeAccount {
      changeEmail(email: $email) {
        camper {
          email
        }
      }
      changeName(name: $name) {
        camper {
          name
        }
      }
    }
  }
`;

export function Account() {
  const [nameProps] = useInput("");
  const [emailProps] = useInput("");
  const navigate = useNavigate();
  const { data, loading } = useQuery(ME);
  const [setAccountDetails] = useMutation(CHANGE_ACCOUNT, {
    onCompleted() {
      navigate(`/`);
    }
  });

  const submit = e => {
    e.preventDefault();
    setAccountDetails({
      variables: {
        name: nameProps.value,
        email: emailProps.value
      }
    });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <h1>Update Account Details</h1>
      <form onSubmit={submit}>
        <img src={data.me.photo.thumb} alt={data.me.name} />
        <button>
          <AiOutlineUpload />
          Change Photo
        </button>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          {...nameProps}
          id="name"
          placeholder={data.me.name}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          {...emailProps}
          id="email"
          placeholder={data.me.email}
        />

        <button type="submit">Update Profile</button>
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
