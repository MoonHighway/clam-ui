import React from "react";
import { Header } from "../ui/Header";
import styled from "styled-components";

export function Activities() {
  return (
    <Container>
      <div>TODO: Activities</div>
      <Header />
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
`;
