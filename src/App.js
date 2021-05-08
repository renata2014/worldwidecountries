import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Homepage } from './Homepage/Home';
import { Header } from './components/Header';
import { RegionPage } from './RegionPage/RegionPage';
import { CountryDetails } from './singlecountrypage/CountryDetails';
import { About } from './aboutpage/About';
import { Countries } from './Countries/Countries';
import { SearchPage } from './SearchPage/SearchPage';

function App() {
  return (
    <Router>
      <div className="App">
    <Header />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/countries">
        <Countries />
      </Route>
      <Route path="/searchpage">
        <SearchPage />
      </Route>
      
    <Route component={RegionPage} path="/RegionPage"/>

    <Route component={CountryDetails} path="/CountryDetails"/>

    </Switch>
    </div>
    </Router>
    
  );
}

export default App;
