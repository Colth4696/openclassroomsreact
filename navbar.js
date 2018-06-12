import React from 'react'
import { Link } from 'react-router-dom'
import About from './about';
import Portfolio from './portfolio';
import './navbar.css';

// The Header creates links that can be used to navigate
// between routes.
const NavBar= () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
      </ul>
    </nav>
  </header>
)

export default NavBar

