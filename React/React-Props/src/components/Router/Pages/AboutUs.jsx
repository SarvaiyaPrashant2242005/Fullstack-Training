import React from 'react';
import './AboutUs.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const nav = useNavigate()
  const handleHome = () => {
    nav(-1)
  }
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our web application. We are passionate developers dedicated to building fast,
        reliable, and easy-to-use interfaces that simplify your digital life.
      </p>
      <p>
        Our mission is to empower users through intuitive design and efficient functionality. Whether you're here for
        business, learning, or curiosity — we're glad to have you.
      </p>

      <button onClick={handleHome}>Home page</button>
    </div>
  );
};

export default About;
