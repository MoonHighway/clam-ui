import React from "react";
import styled from "styled-components";
import { Header } from "../ui/Header";

export function Schedule() {
  return (
    <Container>
      <Header />
      <section>
        <p>TODO: Build Schedule</p>
      </section>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  column-gap: 0;
  grid-template-columns: 0.5fr 0.8fr 1.2fr 0.5fr;
  grid-template-rows: 100px 400px auto;
  header {
    grid-area: 1 / 1 / 2 / 5;
  }
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1em;
  }

  @media only screen and (max-width: 840px) {
    grid-template-rows: 50px 1fr 1fr auto;
    grid-template-columns: 100%;
  }
`;
