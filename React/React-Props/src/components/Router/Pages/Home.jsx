import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const nav = useNavigate();

  const handleAbout = () => {
    nav('/about ')
  }
  return (
    <div>
      <button onClick={handleAbout}>About page</button>
    </div>
  )
}

export default Home
