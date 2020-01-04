import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AddFolderLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    background-color: dodgerblue;
    font-weight: 700;
    font-family: "Roboto";
    font-size: 1.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export default AddFolderLink;