import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import OutcomeProvider from './context/outcomeContext';
import MainView from './views/MainView';
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/Theme';

const App = () => (
  <div>
    <OutcomeProvider>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Router>
            <Switch>
              <Route path="/">
                <MainView />
              </Route>
            </Switch>
          </Router>
        </>
      </ThemeProvider>
    </OutcomeProvider>
  </div>
);

export default App;
