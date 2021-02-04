import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import BaseLayout from './components/Layout/BaseLayout';
import Home from './views/Home/Home';
import DashBoard from './views/DashBoard/DashBoard';
import Sale from './views/Sale/Sale'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/dashboard" exact component={DashBoard}/>
        <Route path="/sale" exact component={Sale}/>
      </Switch>
    </Router>
  )
}

export default App
