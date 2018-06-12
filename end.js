import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './footer.js';

const End = () => (
  <main>
    <Switch>
      <Route path='/footer' component={Footer}/>
     </Switch>
  </main>
);

export default End