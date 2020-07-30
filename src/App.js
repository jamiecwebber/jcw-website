import React from 'react';
import './App.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link }  from 'react-router-dom';

import { StyledHeader } from './components/Header.js';
import WelcomePage from './pages/Welcome.js';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const MainPage = styled.main`
  margin: 0px;
  align: center;
  max-width: 1000px;
  margin: auto;
`;

function App() {
  return (
    <div className="App">
      <Router>
        <MainPage>
          <Switch>
            <Route path="/works">
              <StyledHeader />
              <Title>Works</Title>
            </Route>
            <Route path="/tools">
              <StyledHeader />
              <Title>Tools</Title>
            </Route>
            <Route path="/blog">
              <StyledHeader />
              <Title>Blog</Title>
            </Route>
            <Route path="/inprogress">
              <StyledHeader />
              <Title>Works in Progress</Title>
            </Route>
            <Route path="/contact">
              <StyledHeader />
              <Title>Reach Me Here</Title>
            </Route>
            <Route path="/">
              <WelcomePage />
            </Route>
          </Switch>
        </MainPage>
      </Router>
    </div>
  );
}

export default App;
