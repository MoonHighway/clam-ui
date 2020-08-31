import React from "react"
import styled from "styled-components"

export const Header = () => {
    return (
        <Container>
            <a href="#" className="logo">Camp Lambda</a>
            <nav>
                <ul>
                    <li><a href="#">My Schedule</a></li>
                    <li><a href="#">Activities</a></li>
                    <li><a href="#">Counselors</a></li>
                </ul>
            </nav>
            <a href="#">Account</a>
        </Container>
    )
}


const Container = styled.header`
    background-color: black;
    grid-area: 1 / 1 / 3 / 5;
    li {
        list-style-type: none;
    }
`