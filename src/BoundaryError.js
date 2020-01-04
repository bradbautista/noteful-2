import React, { Component } from 'react';
import styled from 'styled-components';

const StyledBoundaryError = styled.p`
  padding: 0;
  font-size: 3rem;
  font-weight: 200;
  margin-top: 3rem;
  margin-left: 3rem;
  margin-right: 3rem;
`

class BoundaryError extends Component {

    constructor(props) {
        super(props);
        this.state = {
          hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        
        if (this.state.hasError) {      
          return (
            <StyledBoundaryError>Error: Foos and/or bars could not be loaded. Either the server is offline, you are offline or something is broken. Please wait and try again.</StyledBoundaryError>
          );
        }
        return this.props.children;
    } 
}

export default BoundaryError;