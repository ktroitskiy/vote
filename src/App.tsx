import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { VotesList } from './pages/VotesList/VotesList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <VotesList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
