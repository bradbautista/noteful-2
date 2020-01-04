import React from 'react';
import styled from 'styled-components';

const ValidationErrorMessage = styled.div`
    margin-top: 1rem;
    letter-spacing: -0.5px;
    font-size: 2rem;
    font-family: "Roboto";
    color: orangered;
`

export default function ValidationError(props) {
  if (props.message) {
    return (
      <ValidationErrorMessage>{props.message}</ValidationErrorMessage>
    );
  }

  return <></>
}