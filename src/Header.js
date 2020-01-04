import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const StyledHeader = styled.h1`
  flex-grow: 1;
  flex-basis: 100%;
  text-align: left;
  border-bottom: 1px solid lightgray;
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  font-weight: 900;
  padding-top: 1.5rem;
  padding-left: 2rem;
  padding-bottom: 1.5rem;
  letter-spacing: 0px;
`


export default class Header extends Component {
  render() {
    return (

      <header>
        <StyledLink to='/'>
          <StyledHeader>Noteful</StyledHeader>
        </StyledLink>
      </header>
    )
  }
}
