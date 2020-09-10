import React from "react";
import { Login, Register } from "../forms";
import { Header } from "../ui/Header";
import styled from "styled-components";
import logo from "../../assets/lambda.png";

export function Authorization() {
  return (
    <Container>
      <Header />
      <Login />
      <Register />
      <div className="logo">
        <h1>Camp Lambda</h1>
        <img src={logo} height={200} alt="camp lambda logo" />
      </div>
    </Container>
  );
}

const Container = styled.section`
  header {
    grid-area: 1 / 1 / 2 / 5;
  }
`;
