import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Difficulty, Terrain } from '../ui'

export const Welcome = () => (
  <Container>
    <h1>Welcome Screen</h1>
    <Link to="/activities">Activities</Link>
    <Link to="/counselors">Counselors</Link>
    <Link to="/account">Login</Link>
    <Link to="/account">Account</Link>
    <Link to="/cabin/sheep">Cabin</Link>
    <Link to="/schedule">Schedule</Link>
    <div>
      <h2>Difficulty Icons</h2>
      <Difficulty />
      <Difficulty level="INTERMEDIATE" />
      <Difficulty level="ADVANCED" />
      <Difficulty level="EXPERT" />
    </div>
    <div>
      <h2>Terrain Emojis</h2>
      <br />
      {'FIELD,MOUNTAIN,FOREST,BEACH,OCEAN,DESERT,POND,INDOORS,THEATER,ICE'
        .split(',')
        .map(t => (
          <Terrain key={t} type={t} />
        ))}
    </div>
  </Container>
)

const Container = styled.section`
  /* temporary styles */

  display: flex;
  flex-direction: column;

  a {
    margin: 1em 0;
  }
`
