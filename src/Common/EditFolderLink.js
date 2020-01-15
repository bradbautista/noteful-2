import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EditFolderLink = 
    styled(Link)`
    border-bottom-right-radius: 30px;
    align-self: flex-start;
    display: flex;
    justify-items: center;
    font-size: 3rem;
    font-family: "Roboto";
    font-weight: 700;
    color: orangered;
    padding: 1.5rem;
    width: 27rem;
    margin-top: 5rem;
    margin-bottom: 0rem;
    margin-right: 5rem;
    background-color: white;
    display: inline-block;
    border: 1px solid orangered;
`

export default EditFolderLink;