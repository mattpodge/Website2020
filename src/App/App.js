import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Scratchpad } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='homepage'>
            <Home />
          </div>
        </Route>
        <Route path='/scratchpad'>
          <div className='scratchpad'>
            <Scratchpad />
          </div>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
