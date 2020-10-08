import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Home, WorkTwo, WorkOne } from './pages';

function Selena() {
  return (
    <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/work-one' component={WorkOne} />
          <Route component={WorkTwo} />
        </Switch>
    </Router>
  );
}

export default Selena;
