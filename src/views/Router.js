import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
