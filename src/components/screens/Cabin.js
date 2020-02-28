import React from 'react'
import { BackLink } from '../ui'

export const Cabin = ({ match }) => (
  <section>
    <h1>Cabin Screen: {match.params.animal}</h1>
    <BackLink />
  </section>
)
