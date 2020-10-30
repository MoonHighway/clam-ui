import React from "react";
import { Thumbnail } from "../ui";
import { useNavigate } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { Header } from "../ui/Header";
import { Loading } from "../ui/Loading";

const QUERY = gql`
  query {
    allCounselors {
      id
      name
      rank
      photo {
        thumb
      }
    }
  }
`;

export const Counselors = ({ client }) => {
  let navigate = useNavigate();
  const { data, loading } = useQuery(QUERY);
  if (loading) return <Loading />;
  return (
    <Container>
      <Header client={client} />
      <h1>Counselors</h1>

      <div className="counselors">
        {data.allCounselors.map((counselor, i) => (
          <Thumbnail
            key={i}
            link={`/counselor/${counselor.id}`}
            navigate={navigate}
          >
            <div className="card">
              <img src={counselor.photo.thumb} alt={counselor.name} />
              <h2>{counselor.name}</h2>
              <p>{counselor.rank.replace("_", " ")}</p>
            </div>
          </Thumbnail>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-rows: 100px 60px auto;
  h1 {
    grid-area: 2 / 2 / 3 / 5;
    padding-left: 20px;
  }
  header {
    grid-area: 1 / 1 / 2 / 5;
  }
  .counselors {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(auto-fill, 1fr);
    grid-column-start: 2;
    .thumbnail {
      justify-self: center;
      height: 16em;
      width: 16em;
      margin: 1em;
    }
    img {
      border-radius: 50%;
      width: 150px;
      height: 150px;
    }
    h2 {
      text-align: center;
    }
    p {
      text-align: center;
    }
    .card {
      background-color: #fafafc;
      align-items: center;
      border-radius: 1em;
      border: 1px solid #d3d3d3;
    }
  }
  @media only screen and (max-width: 1200px) {
    .thumbnail {
      justify-self: center;
      height: 16em;
      width: 14em;
      margin: 1em;
    }
  }
  @media only screen and (max-width: 1000px) {
    .counselors {
      grid-template-columns: repeat(2, 50%);
    }
    .thumbnail {
      justify-self: center;
      height: 16em;
      width: 24em;
      margin: 1em;
    }
  }
  @media only screen and (max-width: 748px) {
    .counselors {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
