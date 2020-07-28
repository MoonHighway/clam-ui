import React from "react";
import styled from "styled-components";
import dock from "../../assets/dock.jpg";

export const Welcome = () => <Container>Ready</Container>;

const Container = styled.section`
  background-image: url(${dock});
  background-size: cover;
  background-position: bottom;
  width: 100%;
  background-repeat: no-repeat;
`;
