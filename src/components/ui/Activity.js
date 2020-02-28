import React from 'react'
import { Link } from 'react-router-dom'

export const ActivityListItem = ({ id, title }) => (
  <div>
    <h3>{title}</h3>
    <Link to={`/activity/${id}`}>details</Link>
  </div>
)

export const ActivityList = ({ activities = [] }) =>
  activities.map(a => <ActivityListItem {...a} />)

export const SportPanel = () => <h3>Sports Panel</h3>

export const NaturePanel = () => <h3>Nature Panel</h3>

export const ArtsCraftsPanel = () => <h3>Arts and Crafts Panel</h3>

export const GamePanel = () => <h3>Game Panel</h3>
