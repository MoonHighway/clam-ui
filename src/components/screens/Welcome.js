import React from "react";
import styled from "styled-components";
import logo from "../../assets/lambda.png";
import "../../fonts/Catamaran-ExtraBold.ttf";
import "../../fonts/Roboto-Regular.ttf";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query {
    totalCounselors
  }
`;

export function Welcome() {
  const { loading, data } = useQuery(QUERY);
  if (loading) return <p>Loading...</p>;
  return (
    <Container>
      <div className="links">
        <Link to={"/counselors"}>{data.totalCounselors} Counselors</Link>
        <br />
        <Link to={"/activities"}>114 Activities</Link>
      </div>
      <div className="login-button">
        <button onClick={() => alert("Implement Login")}>
          Sign In &nbsp;&gt;
        </button>
      </div>
      <div className="logo">
        <h1>Camp Lambda</h1>
        <img src={logo} height={200} alt="camp lambda logo" />
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 2fr 1fr 0.5fr;
  justify-items: center;
  .links {
    grid-area: 2 / 1 / 3 / 2;
    text-align: center;
    font-size: 1.5em;
    align-self: center;
    a {
      color: #10a5f5;
      text-decoration: none;
    }
    a:hover {
      color: #0859c6;
    }
  }
  .login-button {
    grid-area: 2 / 1 / 3 / 2;
    place-self: end center;
  }
  button {
    height: 50px;
    width: 100px;
    border: 3px solid black;
    border-radius: 5px;
    background-color: #ffffff;
    text-transform: uppercase;
  }
  .logo {
    grid-area: 2 / 2 / 2 / 2;
    align-self: start;
    h1 {
      text-align: center;
      font-size: 2em;
    }
  }
  @media only screen and (max-width: 748px) {
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;

    .links {
      grid-row-start: 2;
      align-self: start;
    }
    .login-button {
      grid-row-start: 2;
      align-self: center;
    }
    .logo {
      grid-area: 1 / 1 / 2 / 2;
    }
  }
`;
