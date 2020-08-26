import React from 'react';
import './App.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link }  from 'react-router-dom';

import { Header } from './components/Header.js';
import WelcomePage from './pages/Welcome.js';
import CTCalculator from './pages/CTCalculator.js';
import BlogPage from './pages/BlogPage.js';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// const MainPage = styled.main`
//   margin: 0px auto 150px auto;
//   align: center;
//   max-width: 1000px;
//   min-width: 600px;
// `;

function App() {
  return (
    <div className="App">
      <Router>
        {/* <MainPage> */}
          <Switch>
            <Route path="/works">
              <Header />
              <Title>Works</Title>
            </Route>
            <Route path="/tools">
              <Header />
              <CTCalculator />
            </Route>
            <Route path="/blog">
              <BlogPage />
            </Route>
            <Route path="/inprogress">
              <Header />
              <Title>Works in Progress</Title>
            </Route>
            <Route path="/contact">
              <Header />
              <Title>Reach Me Here</Title>
            </Route>
            <Route path="/">
              <WelcomePage />
            </Route>
          </Switch>
        {/* </MainPage> */}
      </Router>
    </div>
  );
}

export default App;
