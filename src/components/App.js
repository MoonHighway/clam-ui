import React from 'react'
import { Router } from '@reach/router'

import {
  Welcome,
  Cabin,
  Authorization,
  Activities,
  ActivityDetails,
  Counselors,
  CounselorDetails,
  Schedule
} from './screens'

const App = () => (
  <Router>
    <Schedule path="/schedule" />
    <CounselorDetails path="/counselor/:id" />
    <Counselors path="/counselors" />
    <ActivityDetails path="/activity/:id" />
    <Activities path="/activities" />
    <Cabin path="/cabin/:animal" />
    <Authorization path="/account" />
    <Welcome path="/" />
  </Router>
)

export default App
