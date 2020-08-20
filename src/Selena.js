import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Scratchpad } from './pages';

function Selena() {
  return (
    <Router>
        <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
          <Route path='/scratchpad'>
              <Scratchpad />
          </Route>
        </Switch>
    </Router>
  );
}

export default Selena;
