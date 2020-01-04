import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
    text-decoration: none;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    color: black;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export default NavLink;