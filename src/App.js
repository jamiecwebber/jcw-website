import React from 'react';
import './App.css';
// import { StyledHeader } from './components/Header.js';
import styled from 'styled-components'

const Header = ({ className }) => {
  return (
      <header className={className}>
          <div>
              JAMIE CHRISTOPHER WEBBER
          </div>
          <nav>
              <div>works</div>
              <div>tools</div>
              <div>blog</div>
              <div>contact</div>
          </nav>
      </header>
  )
};

const StyledHeader = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: right;
  color: palevioletred;
`;

function App() {
  return (
    <div className="App">
      <StyledHeader />
      <Title>BLAH</Title>
    </div>
  );
}

export default App;
