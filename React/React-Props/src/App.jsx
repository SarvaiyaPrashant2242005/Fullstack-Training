import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import {headerInfo} from '../public/HeaderData';
import {footerData, footerLinks} from "../public/FooterData";
import { cardData } from '../public/cardData'
import FeedBack from './components/FeedBack-Form/FeedBack'

function App() {

  return (
    <>
        <FeedBack/>
    </>
  )
}

export default App
