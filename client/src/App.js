import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import BaseLayout from './components/Layout/BaseLayout';
import Home from './views/Home/Home';
import DashBoard from './views/DashBoard/DashBoard'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/dashboard" exact component={DashBoard}/>
      </Switch>
    </Router>
  )
}

export default App
