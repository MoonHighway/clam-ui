import React from 'react'
import styled from 'styled-components'

export const Thumbnail = ({ link, children, navigate }) => (
  <Container onClick={() => navigate(link)}>
    {children}
  </Container>
)

const Container = styled.div`
  cursor: pointer;
  display: grid;
  img {
    border-radius: 50%;
  }
`
