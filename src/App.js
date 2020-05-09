import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainView from './views/MainView';
import GlobalStyle from './theme/GlobalStyle';

const App = () => (
  <div>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/">
          <MainView />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
