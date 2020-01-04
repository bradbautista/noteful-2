import styled from 'styled-components';

const NavItem = styled.li`
    list-style-type: none;
    text-align: left;
    color: black;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    letter-spacing: -0.3px;
    font-weight: 400;
    &:hover {
        background-color: gainsboro;
    };
    ${({ active }) => active && `
    background: gainsboro;
    font-size: 1.8rem;
    font-weight: 700;
    `}
`;

export default NavItem;