import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import dymocumentation from './themes/dymocumentation';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Installation from './pages/Installation';
import GettingStarted from './pages/GettingStarted';
import Commands from './pages/Commands';
import Configuration from './pages/Configuration';
import Templates from './pages/Templates';
import AdvancedUsage from './pages/AdvancedUsage';
import Troubleshooting from './pages/Troubleshooting';
import GlobalStyle from './components/GlobalStyle';

const AppWrapper = styled.div`
  max-width: ${props => props.theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.space.large};
  display: flex;
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding-left: ${props => props.theme.space.large};
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.medium};
`;

function App() {
  return (
    <ThemeProvider theme={dymocumentation}>
      <GlobalStyle />
      <Router>
        <AppWrapper>
          <Navigation />
          <MainContent>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/installation" component={Installation} />
              <Route path="/getting-started" component={GettingStarted} />
              <Route path="/commands" component={Commands} />
              <Route path="/configuration" component={Configuration} />
              <Route path="/templates" component={Templates} />
              <Route path="/advanced" component={AdvancedUsage} />
              <Route path="/troubleshooting" component={Troubleshooting} />
            </Switch>
          </MainContent>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;