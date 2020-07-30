import React from 'react';
import styled from 'styled-components';



const Header = ({ className }) => {
    return (
        <header className={className}>
            <div>
                JAMIE CHRISTOPHER WEBBER
            </div>
            <StyledNav>
                <NavItem>works</NavItem>
                <NavItem>tools</NavItem>
                <NavItem>blog</NavItem>
                <NavItem>in progress</NavItem>
                <NavItem>contact</NavItem>
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