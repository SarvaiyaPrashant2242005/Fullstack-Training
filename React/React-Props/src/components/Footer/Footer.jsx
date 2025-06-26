import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-left">
          <h3 className="title">Made By Prashant Sarvaiya</h3>
          <p className='footer-desc'>2025</p>
        </div>
        <div className="footer-right">
          <a href="" className="footer-link">Home</a>
          <a href="" className="footer-link">Contact Us</a>
          <a href="" className="footer-link">About US</a>
        </div>
      </div>
    </div>
  )
}

export default Footer