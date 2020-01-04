import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NoteLink = styled(Link)`
    text-decoration: none;
    margin: 0;
    padding:0;
    color: black;
    display: flex;
    flex-grow: 0;
    flex-direction: column;
    justify-content: flex-start;
`;

export default NoteLink;