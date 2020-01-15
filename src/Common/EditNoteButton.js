import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EditNoteButton = styled(Link)`
    align-self: flex-start;
    font-size: 1.7rem;
    font-family: "Roboto";
    color: orangered;
    padding: 1rem;
    margin-left: 3rem;
    margin-bottom: 2rem;
    font-weight: 500;
    background-color: white;
    opacity: 1;
    border: 1px solid orangered;
    -webkit-box-shadow: 0px 0px 50px -25px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 50px -25px rgba(0,0,0,0.75);
`

export default EditNoteButton;