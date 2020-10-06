import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Home, Scratchpad } from './pages';

function Selena() {
  return (
    <Router>
        <Header></Header>
        <Hero></Hero>
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
