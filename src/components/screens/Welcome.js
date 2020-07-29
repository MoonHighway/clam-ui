import React from "react";
import styled from "styled-components";
import dock from "../../assets/dock.jpg";
import logo from "../../assets/lambda.png";
import "../../fonts/Catamaran-ExtraBold.ttf";

export const Welcome = () => (
  <Container>
    <div className="links">
      <a href="#">23 Counselors</a>
      <br />
      <a href="#">114 Activities</a>
      <button>Sign In</button>
    </div>
    <div className="logo">
      <h1>Camp Lambda</h1>
    </div>
  </Container>
);

const Container = styled.section`
  background-image: url(${dock});
  background-size: cover;
  display: flex;
  background-position: bottom;
  justify-content: space-around;
  background-repeat: no-repeat;
  width: 100%;
  align-items: stretch;
  @media screen and (max-width: 748px) {
    flex-direction: column-reverse;
  }
  .logo {
    margin: 5%;
    flex-wrap: wrap;
    flex: 1.5;
    align-items: center;
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    h1 {
      color: white;
      text-align: center;
    }
    @media screen and (max-width: 748px) {
      flex: 1;
      align-items: center;
      margin-bottom: 0;
    }
  }
  .links {
    border-radius: 5px;
    margin: 5%;
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    a {
      text-decoration: none;
      color: white;
      font-family: "Catamaran", sans-serif;
      font-size: 2em;
      font-weight: 700;
    }
    a:first-of-type {
      margin-top: 45%;
    }
    @media screen and (max-width: 748px) {
      flex: 2;
      margin-top: 0;
    }
  }
`;
