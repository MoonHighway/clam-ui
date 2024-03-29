import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Welcome,
  Cabin,
  Authorization,
  Activities,
  ActivityDetails,
  Counselors,
  CounselorDetails,
  Schedule,
  Account
} from "./screens";

import { Login, Register } from "./forms";

export default function App() {
  return (
    <Router>
      <Routes>
        <Schedule path="/schedule" />
        <Route element={<CounselorDetails />} path="counselor/:id" />
        <Route element={<Counselors />} path="counselors" />
        <Route element={<ActivityDetails />} path="activity/:id" />
        <Route element={<Activities />} path="activities" />
        <Route element={<Account />} path="account" />
        <Route element={<Authorization />} path="login">
          <Route element={<Login />} path="/" />
          <Route element={<Register />} path="register" />
        </Route>
        <Route element={<Cabin />} path="cabin/:animal" />
        <Route element={<Welcome />} path="/" />
      </Routes>
    </Router>
  );
}
