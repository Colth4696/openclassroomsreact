import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Clock from './clock.js';

ReactDOM.render(<App name= "Colt" />, document.getElementById('root'));
registerServiceWorker();

let name = "Colt";
ReactDOM.render(
  <App name={name} />,
  document.getElementById('root')
);

