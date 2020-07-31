import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




const Header = ({ className }) => {
    return (
        <StyledHeader>
            <HeaderBody>
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
            </HeaderBody>
        </StyledHeader>
    )
  };
  
const StyledHeader = styled.header`
    background-color: #dddddd;
    padding: 0.6em;
    display: flex;
    justify-content: center;
`;

const HeaderBody = styled.header`
    width: 900px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

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

export { Header };