import React from 'react';
import Login from './Login'
import Dashboard from './Dashboard'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>

      <Switch>
          <Route path="/dashboard">
          <Dashboard/>
          </Route>
          <Route path="/">
          <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
