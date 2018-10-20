import React from 'react'
import styled from 'styled-components'

export const CloseButton = () =>
    <h3>Close Button</h3>

export const RemoveButton = () =>
    <h3>Remove Button</h3>

export const AddButton = () =>
    <h3>Add Button</h3>

export const IconButton = () => 
    <h3>Icon Button</h3>

export const GithubLoginButton = () =>
    <h3>Login Button</h3>

export const LinkButton = styled.button`
    background: none;
    border: none;
    color: blue;
    text-decoration: underline;
    font-size: 1em;
    font-family: -webkit-body;
`  

export const BackLink = () =>
    <LinkButton onClick={e => {
        e.preventDefault()
        window.history.back()
    }}>back</LinkButton>    

  