import React, { useState } from "react";
import { Login, Register } from "../forms";
import { Header } from "../ui/Header";
import styled from "styled-components";
import logo from "../../assets/lambda.png";

export function Authorization() {
  const [login, setLogin] = useState(true);
  return (
    <Container>
      <Header />
      <div className="form-holder">
        <div>
          <button
            style={{
              backgroundColor: `${login ? "gray" : "#D3D3D3"}`,
              color: `${login ? "white" : "gray"}`
            }}
            className="tab"
            onClick={() => setLogin(true)}
          >
            Log In
          </button>
          <button
            style={{
              backgroundColor: `${login ? "#D3D3D3" : "gray"}`,
              color: `${login ? "gray" : "white"}`
            }}
            className="tab"
            onClick={() => setLogin(false)}
          >
            Create Account
          </button>
          <div className="form">{login ? <Login /> : <Register />}</div>
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
  .tab {
    border: none;
    width: 45%;
    margin-bottom: 5%;
    text-align: center;
    height: 45px;
    color: white;
    margin-top: 20px;
    font-size: 1em;
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
`;
