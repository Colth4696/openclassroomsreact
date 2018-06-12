import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Portfolio from './portfolio';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /about
// and /portfolio routes will match any pathname that starts
// with /about or /portfolio. The / route will only match
// when the pathname is exactly the string "/"

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/portfolio' component={Portfolio}/>
    </Switch>
  </main>
);

export default Main
