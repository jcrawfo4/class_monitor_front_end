import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to='/create-school-account'>Create School</Link></li>
        <li><Link to='/my-school-information'>My School Information</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;