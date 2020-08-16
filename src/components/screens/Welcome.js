import React from "react";
import styled from "styled-components";
import logo from "../../assets/lambda.png";
import "../../fonts/Catamaran-ExtraBold.ttf";
import "../../fonts/Roboto-Regular.ttf";

export const Welcome = () => (
  <Container>
    <div className="links">
      <a href="#">23 Counselors</a>
      <br />
      <a href="#">114 Activities</a>
      <div>
        <button>Sign In</button>
      </div>
    </div>
    <div className="logo">
      <h1>Camp Lambda</h1>
      <img src={logo} height={200} alt="camp lambda logo" />
    </div>
  </Container>
);

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  justify-items: center;
  .links {
    grid-area: 1 / 1 / 2 / 2;
    grid-row-start: 2;
    button {
      padding-top: 10px;
      padding-bottom: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  .logo {
    grid-area: 1 / 2 / 3 / 3;
    h1 {
      text-align: center;
    }
  }
  @media only screen and (max-width: 748px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;
    .links {
      grid-row-start: 2;
    }
    .logo {
      grid-area: 1 / 1 / 2 / 2;
    }
  }
`;
