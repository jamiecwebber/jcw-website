import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Header = ({ className }) => {
    return (
        <header className={className}>
            <Link to='/'>
                JAMIE CHRISTOPHER WEBBER
            </Link>
            <StyledNav>
                <Link to='/works'>
                    <NavItem>works</NavItem>
                </Link>
                <Link to='/tools'>
                    <NavItem>tools</NavItem>
                </Link>
                <Link to='/blog'>
                    <NavItem>blog</NavItem>
                </Link>
                <Link to='/inprogress'>
                    <NavItem>in progress</NavItem>
                </Link>
                <Link to='/contact'>
                    <NavItem>contact</NavItem>
                </Link>
            </StyledNav>
        </header>
    )
  };
  
const StyledHeader = styled(Header)`
    margin: 0px;
    padding:10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #dddddd;
`;

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const NavItem = styled.div`
    margin: auto 5px;
    &:hover {
        font-weight: bold;
    } 
`

export { StyledHeader };