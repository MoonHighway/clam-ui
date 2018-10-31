import React from 'react'
import { capitalize } from '../../lib'
import greenCircle from '../../assets/green-circle.svg'
import blueSquare from '../../assets/blue-square.svg'
import blackDiamond from '../../assets/single-black-diamond.svg'
import doubleBlackDiamond from '../../assets/double-black-diamond.svg'
import styled from 'styled-components'

const difficulty = {
  BEGINNER: greenCircle,
  INTERMEDIATE: blueSquare,
  ADVANCED: blackDiamond,
  EXPERT: doubleBlackDiamond
}

const emoji = {
  FIELD: '🌾',
  MOUNTAIN: '⛰',
  FOREST: '🌲',
  BEACH: '🏝',
  OCEAN: '🌊',
  DESERT: '🌵',
  POND: '🐸',
  INDOORS: '⛺️',
  THEATER: '🎭',
  ICE: '⛸'
}

export const Logo = () => <h3>Logo</h3>

export const Grass = () => <h3>Logo</h3>

export const Difficulty = ({ level = 'BEGINNER', height = 30, width = 30 }) => (
  <img src={difficulty[level]} height={height} width={width} alt={level} />
)

export const Terrain = ({ type = 'FIELD' }) => (
  <Emoji role="img" aria-label={type}>
    <span>{emoji[type]}</span>
    <span className="title">{capitalize(type)}</span>
  </Emoji>
)

export const Emoji = styled.div`
  margin: 0.25em;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  float: left;
  font-size: 5em;
  span {
    margin: 0;
    padding: 0;
  }
  span.title {
    font-size: 0.25em;
  }
`
