import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EditNoteLink = 
    styled(Link)`
    align-self: flex-start;
    font-size: 3rem;
    font-family: "Roboto";
    /* margin-top: 3rem; */
    font-weight: 900;
    color: orangered;
    padding: 1.5rem;
    padding-left: 7.5rem;
    padding-right: 7.5rem;
    /* width: 27.3rem; */
    background-color: white;
    display: inline;
    margin-right: 5rem;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid orangered;
`

export default EditNoteLink;