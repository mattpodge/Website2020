import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Home, Work } from './pages';

function Selena() {
  return (
    <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/work/:slug' component={Work} />
        </Switch>
    </Router>
  );
}

export default Selena;
