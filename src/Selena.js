import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Home, Example } from './pages';

function Selena() {
  return (
    <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Example} />
        </Switch>
    </Router>
  );
}

export default Selena;
