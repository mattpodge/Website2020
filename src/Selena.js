import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from './components/footer';
import { Header } from './components/header';
import ScrollToTop from './components/scrolltotop/scrolltotop';
import { Home, Work, About } from './pages';

function Selena() {
  return (
    <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/work/:slug' component={Work} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default Selena;
