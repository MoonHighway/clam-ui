import React from "react";
import { BackLink } from "../ui";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { GiWoodCabin } from "react-icons/gi";

const COUNSELOR_QUERY = gql`
  query Counselor($id: ID!) {
    findCounselorById(id: $id) {
      id
      name
      rank
      bio
      cabin {
        animal
        photo {
          thumb
        }
      }
      photo {
        full
      }
    }
  }
`;

export const CounselorDetails = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const { data, loading } = useQuery(COUNSELOR_QUERY, { variables: { id } });
  if (loading) return <p>Loading...</p>;

  let counselor = data.findCounselorById;
  return (
    <Container>
      <BackLink />
      <img
        src={counselor.photo.full}
        className="counselor"
        alt={`${counselor.photo.name}`}
      />
      <section className="details">
        <h1>{counselor.name}</h1>
        <p className="rank">{counselor.rank.replace("_", " ")}</p>
        <p>{counselor.bio}</p>
        {counselor.cabin ? (
          <section
            className="cabin"
            onClick={() => navigate(`/cabin/${counselor.cabin.animal}`)}
          >
            <h3>
              <GiWoodCabin />
              &nbsp;
              <span>
                {counselor.cabin.animal.charAt(0).slice().toUpperCase() +
                  counselor.cabin.animal.substring(1)}
              </span>{" "}
              Cabin
            </h3>
            <img
              src={counselor.cabin.photo.thumb}
              alt={`${counselor.cabin.animal}`}
            ></img>
          </section>
        ) : null}
      </section>
      <section className="activities">
        <h2>{data.findCounselorById.name.split(" ")[0]}'s Activities</h2>
        <p>TODO: BUILD ACTIVITIES!</p>
      </section>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  column-gap: 0;
  grid-template-columns: 0.5fr 0.8 1.2fr 0.5fr;
  grid-template-rows: 400px auto;
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1em;
  }
  .rank {
    color: #756fd6;
    font-weight: bold;
    font-size: 1.5em;
    margin-top: -20px;
  }

  .counselor {
    width: 400px;
    height: 400px;
    object-fit: cover;
  }
  .cabin > img {
    height: 100px;
    width: 100px;
    object-fit: contain;
  }
  .cabin > p {
    color: #756fd6;
    font-size: 2.5em;
    font-weight: bold;
    align-self: center;
  }
  .activities {
    grid-area: 2 / 2 / 4 / 4;
    h2 {
      font-size: 1.5em;
    }
  }
  .details {
    background-color: #fafafc;
    border-radius: 0 1em 1em 0;
    border: 1px solid #d3d3d3;
    padding: 10px;
    justify-self: stretch;
  }
  @media only screen and (max-width: 840px) {
    grid-template-rows: 50px 1fr 1fr auto;
    grid-template-columns: 100%;
    button {
      grid-area: 1 / 1 / 2 / 2;
      align-self: start;
    }
    .counselor {
      grid-area: 2 / 1 / 3 / 2;
      justify-self: center;
    }
    .details {
      grid-area: 3 / 1 / 4 / 2;
      border-radius: 1em;
    }
    .activities {
      grid-area: 4 / 1 / auto / auto;
    }
  }
`;
