import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainView from './views/MainView';
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/Theme';

const App = () => (
  <div>
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
  </div>
);

export default App;
