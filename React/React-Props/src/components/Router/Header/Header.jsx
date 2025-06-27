import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <nav className="nav-links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </nav>
    </div>
  );
}

export default Header;
