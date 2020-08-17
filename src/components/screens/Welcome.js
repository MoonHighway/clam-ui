import React from "react";
import styled from "styled-components";
import logo from "../../assets/lambda.png";
import "../../fonts/Catamaran-ExtraBold.ttf";
import "../../fonts/Roboto-Regular.ttf";

export const Welcome = () => (
  <Container>
    <div className="links">
      <a href="#" onClick={() => alert("To Counselor Page")}>
        23 Counselors
      </a>
      <br />
      <a href="#" onClick={() => alert("To Activities Page")}>
        114 Activities
      </a>
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
    <footer></footer>
  </Container>
);

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
  }
  .login-button {
    grid-area: 2 / 1 / 3 / 2;
    align-self: end;
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
    align-self: center;
    h1 {
      text-align: center;
      font-size: 2em;
    }
  }
  @media only screen and (max-width: 748px) {
    grid-template-columns: 100%;

    .links {
      grid-row-start: 1;
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
