import React from 'react'
import { Thumbnail } from '../ui'
import { useNavigate } from "react-router-dom"
import { gql, useQuery} from "@apollo/client"
import styled from "styled-components"

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
`

export const Counselors = () => {
  let navigate = useNavigate()
  const {data, loading} = useQuery(QUERY)
  if (loading) return <p>Loading...</p>
  return (
    <Container>
      <div className="header"><h1>Camp Lambda Counselors</h1></div>
      
      
      {data.allCounselors.map((counselor, i) => (
        <Thumbnail
          key={i}
          link={`/counselor/${counselor.id}`}
          navigate={navigate}
        >
          <div className="card">
          <img src={counselor.photo.thumb} />
          <h2>{counselor.name}</h2>
          <p>{counselor.rank.replace("_", " ")}</p>
          </div>
        </Thumbnail>
      ))}

    </Container>
  )
} 

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  .header {
    grid-area: 1 / 1 / 2 / 5;
  }
  .thumbnail {
    justify-self: center;
    height: 16em;
    width: 20em;
    margin: 1em;
  }
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    align-self: center;
  }
  h2 {
    text-align: center;
  }
  p {
    text-align: center;
  }
  .card {
    background-color: #FAFAFC;
    align-items: center;
    border-radius: 1em;
    border: 1px solid #D3D3D3;
  }
  @media only screen and (max-width: 748px) {
    grid-template-columns: repeat(1, 1fr);
    .header {
      grid-area: 1 / 1 / 2/ 2;
    }
  }
` 