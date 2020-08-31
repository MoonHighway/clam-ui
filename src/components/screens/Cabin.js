import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { Header } from "../ui/Header"

const CABIN_QUERY = gql`
  query($animal: ID!) {
    findCabinByAnimal(animal: $animal) {
      animal
      photo {
        full
      }
      description
      counselor {
        id
        name
        photo {
          thumb
        }
      }
    }
    allCabins {
      animal
      photo {
        thumb
      }
    }
  }
`;

export const Cabin = () => {
  let { animal } = useParams();
  let navigate = useNavigate();
  const { data, loading } = useQuery(CABIN_QUERY, { variables: { animal } });
  if (loading) return <p>Loading...</p>;

  let cabin = data.findCabinByAnimal;

  let otherCabins = data.allCabins.filter(c => c.animal !== cabin.animal);

  return (
    <Container>
      <Header />
      <img
        src={cabin.photo.full}
        alt={cabin.name}
        height={200}
        className="header-image"
      />
      <section className="details">
        <h1>
          {cabin.animal.charAt(0).slice().toUpperCase() +
            cabin.animal.substring(1)}
        </h1>
        <p>{cabin.description}</p>
        <section>
          <h3>Other Cabins</h3>
          <div className="other-cabins">
            {otherCabins.map(c => (
              <div
                key={c.animal}
                onClick={() => navigate(`/cabin/${c.animal}`)}
              >
                <p>{c.animal}</p>
                <img src={c.photo.thumb} alt={c.animal} />
              </div>
            ))}
          </div>
        </section>
      </section>
      <section className="sidebar">
        <h2>Counselor</h2>
        <img src={cabin.counselor.photo.thumb} alt={cabin.counselor.name} />
        <h4 onClick={() => navigate(`/counselor/${cabin.counselor.id}`)}>
          {cabin.counselor.name}
        </h4>
        <section className="campers">
          <h3>TODO: Add Campers</h3>
        </section>
      </section>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: 0.25fr 1fr 0.5fr 0.25fr;
  grid-template-rows: 100px 500px 1fr;
  header {
    grid-area: 1 / 1 / 2 / 5;
  }
  .header-image {
    grid-area: 2 / 2 / 3 / 4;
    height: 500px;
    justify-self: center;
  }
  .details {
    grid-area: 3 / 2 / 4 / 3;
    background-color: #fafafc;
    border-radius: 0 0 0 1em;
    padding: 1em;
  }
  .sidebar {
    grid-area: 3 / 3 / 4 / 4;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.25fr 1fr auto;
    img {
      border-radius: 50%;
      height: 100px;
      grid-area: 2 / 1 / 3 / 2;
    }
    background-color: #fafafc;
    border-radius: 0 0 1em 0;
    padding: 1em;
    .campers {
      grid-area: 3 / 1 / 4 / 2;
    }
    h4 {
      grid-area: 2 / 2 / 3 / 3;
      color: #756fd6;
      font-size: 1.3em;
      place-self: start;
    }
  }
  .other-cabins {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows; 1fr 1fr;
    img {
      height: 100px;
    }
    p {
      font-weight: bold;
      margin-bottom: -0.5px;
      font-variant: small-caps;
      text-align: center;
    }
  }
`;
