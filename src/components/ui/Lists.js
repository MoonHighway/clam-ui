import React from 'react'
import styled from 'styled-components'

export const Thumbnail = ({ link, img, children, navigate }) => (
  <Container img={img} onClick={e => navigate(link)}>
    {children}
  </Container>
)

const Container = styled.div`
  background-image: url(${props => props.img});
  background-size: contain;
  cursor: pointer;

  /* temporary styles */

  height: 150px;
  width: 150px;
  float: left;
  margin: 1em;
`
