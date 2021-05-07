import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Homepage } from './Homepage/Homepage';
import { Header } from './components/Header';



function App() {
  return (
    <Router>
      <div className="App">
    <Header />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      
    </Switch>
    </div>
    </Router>
    
  );
}

export default App;
