import React from 'react';
import { BrowserRouter as Router, NavLink, Switch,Route } from "react-router-dom";

import './App.css';
import Devices from './Components/Devices';
import Ta from './Components/TA';
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
      <Router>
        <ul className="header">
          <li><NavLink to="/users">Users</NavLink></li>
          <li><NavLink to="/devices">Devices</NavLink></li>
          <li><NavLink to="/ta">TA</NavLink></li>
        </ul>
      <Switch>
        <Route path="/users" component={Users}/>
        <Route path="/devices" component={Devices}/>
        <Route path="/ta" component={Ta}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
