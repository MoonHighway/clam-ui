import React from 'react'
import { BackLink, ActivityList } from '../ui'

const placeholderActivities = [
  { id: 'AAA', title: 'sample activity - A' },
  { id: 'BBB', title: 'sample activity - B' },
  { id: 'CCC', title: 'sample activity - C' }
]

export const Activities = () => (
  <section>
    <h1>Activities Screen</h1>
    <ActivityList activities={placeholderActivities} />
    <BackLink />
  </section>
)
