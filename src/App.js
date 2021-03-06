import React from 'react';
import './App.css';
// import styled from 'styled-components'

import { BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import { AudioContextProvider } from './contexts/AudioContext.js';

import WelcomePage from './pages/Welcome.js';
import { CTCalculator } from './pages/CTCalculator.js';
import BlogPage from './pages/BlogPage.js';
import TuningTool from './pages/TuningTool.js';

import { Title } from './components/styles'

import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  html {
    font-family: 'EB Garamond', sans-serif;
    background-color: honeydew;
  }
`

const App = ({ children }) => {
  return (
    <AudioContextProvider>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/works">
            <Title>Boop doop badaboop doop!</Title>
          </Route>
          <Route path="/tools">
           {/* <TuningTool />*/}
            <CTCalculator/>
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/bio">
            <Title>Reach Me Here</Title>
          </Route>
          <Route path="/">
            <WelcomePage />
          </Route>
        </Switch>
      </Router>
      { children }
    </AudioContextProvider>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <GlobalStyles />
//       <Router>
//         <Switch>
//           <Route path="/works">
//             <Title>Boop doop badaboop doop!</Title>
//           </Route>
//           <Route path="/tools">
//             <TuningTool />
//           </Route>
//           <Route path="/blog">
//             <BlogPage />
//           </Route>
//           <Route path="/contact">
//             <Title>Reach Me Here</Title>
//           </Route>
//           <Route path="/">
//             <WelcomePage />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

export default App;
