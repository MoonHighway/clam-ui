import React from 'react'
import { Login, Register, Account } from '../forms'
import { BackLink } from '../ui'

export const Authorization = () => (
  <section>
    <h1>Authorization Screen</h1>
    <Login />
    <Register />
    <Account />
    <BackLink />
  </section>
)
