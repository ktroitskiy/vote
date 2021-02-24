import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { VotesList } from './pages/VotesList/VotesList';
import { Api } from 'api';

const api = new Api();

function App() {

  useEffect(() => {
    async function fetchData() {
      const a = await api.getAll('vote');
      console.log(a);
    }

    fetchData();
  }, [])

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
