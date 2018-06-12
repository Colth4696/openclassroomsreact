import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Myself from './myself';



const About = () => (
  <Switch>
    <Route  path='/about' component={Myself}/>
  </Switch>
);


export default About