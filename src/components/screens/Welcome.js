import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LinkButton } from "../ui/Buttons";
import { Terrain } from "../ui/Graphics";

const Nav = () => (
  <nav>
    <Link to="/activities">Activities</Link>
    <Link to="/counselors">Counselors</Link>
    <Link to="/account">Login</Link>
    <Link to="/account">Account</Link>
    <Link to="/cabin">Cabin</Link>
    <Link to="/schedule">Schedule</Link>
  </nav>
);

export const Welcome = () => (
  <Container>
    <Nav />
    <div>
      <h1>Camp Lambda 🏕</h1>
    </div>
  </Container>
);

const Container = styled.section`
  display: flex;
  flex-direction: column;

  nav {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div {
    display: flex;
    padding-top: 10%;
    align-items: center;
    justify-content: center;
  }
`;
