import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Router/LayOut/Layout'
import Home from './components/Router/Pages/Home'
import About from './components/Router/Pages/AboutUs'
import Contact from './components/Router/Pages/Contact'
import Login from './components/Router/Pages/Login'
import Signup from './components/Router/Pages/Signup'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all pages inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
