import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

export const Welcome = () =>
    <Container>
        <h1>Welcome Screen</h1>
        <Link to="/activities">Activities</Link>
        <Link to="/counselors">Counselors</Link>
        <Link to="/account">Login</Link>
        <Link to="/account">Account</Link>
        <Link to="/cabin/sheep">Cabin</Link>
        <Link to="/schedule">Schedule</Link>
    </Container>

const Container = styled.section`

    /* temporary styles */

    display: flex;
    flex-direction: column;

    * { 
        margin: 1em 0;
    }
`