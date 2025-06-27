import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

const HeaderData = () => {
  return (
    <div className="header">
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </nav>
    </div>
  );
}

export default HeaderData;
