import React from 'react';
import './App.css';
import Home from './pages/home/home';
import Map from './pages/nightMap/nightMap';
import Activities from './pages/activities/activities';

import FirstAid from './pages/firstAid/firstAid';
import Security from './pages/security/security';
import Prizes from './pages/prizes/prizes';
import Casino from './pages/casino/casino';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



class App extends React.Component {
  render() {
    return (

      <div className = 'App'>

    <Router>
        <Switch>
          <Route path="/map">
            <Map />
          </Route>

          <Route path="/activities">
            <Activities />
          </Route>

          <Route path="/aid">
            <FirstAid />
          </Route>

          <Route path="/security">
            <Security />
          </Route>

          <Route path="/prizes">
            <Prizes />
          </Route>

          <Route path="/casino">
            <Casino />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>

      </div>

    );
  }
}

export default App;
