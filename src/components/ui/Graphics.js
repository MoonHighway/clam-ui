import React from 'react'
import greenCircle from '../../assets/green-circle.svg'
import blueSquare from '../../assets/blue-square.svg'
import blackDiamond from '../../assets/single-black-diamond.svg'
import doubleBlackDiamond from '../../assets/double-black-diamond.svg'

const difficulty = {
  BEGINNER: greenCircle,
  INTERMEDIATE: blueSquare,
  ADVANCED: blackDiamond,
  EXPERT: doubleBlackDiamond
}

export const Logo = () => <h3>Logo</h3>

export const Grass = () => <h3>Logo</h3>

export const Difficulty = ({ level = 'BEGINNER', height = 30, width = 30 }) => (
  <img src={difficulty[level]} height={height} width={width} alt={level} />
)

export const Terrain = () => <h3>Terrain</h3>
