import React from "react";
import { Header } from "../ui/Header";
import styled from "styled-components";
import logo from "../../assets/lambda.png";
import { NavLink, Outlet } from "react-router-dom";

export function Authorization() {
  return (
    <Container>
      <Header />
      <div className="form-holder">
        <div>
          <NavLink to="/account" className="tab">
            <button className="login">Log In</button>
          </NavLink>
          <NavLink to="register" className="tab">
            <button>Create Account</button>
          </NavLink>
          <Outlet />
        </div>
      </div>
      <div className="tent">
        <h1>Camp Lambda</h1>
        <img src={logo} height={200} alt="camp lambda logo" />
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: 0.5fr 0.8fr 1.2fr 0.5fr;
  grid-template-rows: 0.5fr 2fr 1fr 0.5fr;
  a:active {
    text-decoration: underline;
  }
  .tab > button {
    border: none;
    width: 45%;
    margin-bottom: 5%;
    text-align: center;
    height: 45px;
    margin-top: 20px;
    font-size: 1em;
  }
  .login {
    background-color: #d3d3d3;
    color: black;
  }
  .form-holder {
    grid-area: 2 / 2 / 3 / 3;
    align-self: center;
  }
  header {
    grid-area: 1 / 1 / 2 / 5;
  }
  .tent {
    grid-area: 2 / 3 / 3 / 4;
    justify-self: end;
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
