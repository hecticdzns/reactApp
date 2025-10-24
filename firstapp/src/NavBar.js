import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import UserSupport from './UserSupport';

export default function NavBar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <NavLink to="/about">About</NavLink>
        <Link to="/contact">Contact</Link>
        <Link to="/usersupport">User Support</Link>

    </nav>
  )
}
