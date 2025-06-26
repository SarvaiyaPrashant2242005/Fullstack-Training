import React from 'react';
import "./Header.css";

const Header = ({headerInfo}) => {
  console.log(headerInfo);
  return (
    <div className='header'>
      <div className="header-content">
        <h3 className='header-title'>{headerInfo.title}</h3>
        <p className='header-desc'>{headerInfo.desc}</p>
      </div>
    </div>
  )
}

export default Header