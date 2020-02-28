import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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

export default function App() {
  return (
    <Router>
      <Switch>
        <Schedule path="/schedule" />
        <Route component={CounselorDetails} path="/counselor/:id" />
        <Route component={Counselors} path="/counselors" />
        <Route component={ActivityDetails} path="/activity/:id" />
        <Route component={Activities} path="/activities" />
        <Route component={Authorization} path="/account" />
        <Route component={Cabin} path="/cabin/:animal" />
        <Route component={Welcome} path="/" />
      </Switch>
    </Router>
  )
}
