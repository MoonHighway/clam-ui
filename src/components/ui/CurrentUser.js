import React from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { gql, useQuery, useApolloClient } from "@apollo/client";
import styled from "styled-components";

const ME_QUERY = gql`
  query {
    me {
      name
      photo {
        full
        thumb
      }
      githubPhoto
    }
  }
`;

export function CurrentUser() {
  let navigate = useNavigate();
  const client = useApolloClient();
  let { data, loading } = useQuery(ME_QUERY);

  async function logOut() {
    localStorage.removeItem("token");
    navigate(`/`);
  }

  if (loading) {
    return <p>Loading...</p>;
  } else if (data.me == null) {
    return (
      <>
        <a onClick={() => navigate(`/login/register`)}>
          <FaUser />
          &nbsp;Create Account
        </a>
        &nbsp;
        <span>|</span>&nbsp;
        <a onClick={() => navigate(`/login`)}>
          <FaLock /> &nbsp;Log In
        </a>
      </>
    );
  } else if (data.me !== null) {
    return (
      <Container>
        <img
          src={data.me.photo.thumb ? data.me.photo.thumb : data.me.githubPhoto}
        />
        <div>
          <h3>{data.me.name}</h3>
          <a onClick={() => navigate(`/account`)}>
            <FaUser />
            &nbsp;Account
          </a>
          <a onClick={() => logOut().then(() => client.resetStore())}>
            <ImExit />
            Log Out
          </a>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.25fr 0.25.fr;
  grid-template-columns: 0.5fr 1fr;
  align-items: center;
  img {
    border-radius: 50%;
    height: 50px;
    border: 1px solid black;
    grid-area: 1 / 1 / 2 / 2;
    justify-self: end;
    margin-bottom: 2px;
  }
  h3 {
    grid-area: 1 / 2 / 2 / 3;
  }
  a:first-of-type {
    margin-right: 15px;
  }
`;
