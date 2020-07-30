import React from 'react';
import './App.css';
import { StyledHeader } from './components/Header.js';
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const MainPage = styled.main`
  align: center;
  max-width: 1000px;
  margin: auto;
`;

function App() {
  return (
    <div className="App">
      <MainPage>
        <StyledHeader />
        <Title>BLAH</Title>
      </MainPage>
    </div>
  );
}

export default App;
