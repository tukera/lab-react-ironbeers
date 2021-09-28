import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import axios from 'axios';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Beers from './components/Beers';
import './App.css';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

function App() {
  const [fetching, setFetching] = useState(true);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    // console.log('useEffect - Initial render (Mounting)');
    axios.get(apiURL).then((response) => {
      setBeers(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/beers"
          component={() => <Beers beers={beers} fetching={fetching} />}
        />
      </Switch>
    </div>
  );
}

export default App;
