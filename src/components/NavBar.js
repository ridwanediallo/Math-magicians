import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => (
  <nav className="nav">
    <h1 className="logo">Math Magicians</h1>
    <ul className="nav-links">
      <li className="link">
        <Link to="/">Home</Link>
      </li>
      <li className="link">
        <Link to="/calculator">Calculator</Link>
      </li>
      <li className="link">
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
